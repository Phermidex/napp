const express = require('express');
const router = express.Router();
const dbConn = require('../config/mysqldb.js');
const navi = require('../config/nav.js');

//app navigation
const nav_title = 'Cool Template';


const baseUrl_domain = process.env.BASE_URL;


//user rest
router.get('/users/:username/:password', (req, res, next) => {
    let userword = req.params.username;
    //revive encrypt pass
    let pass = req.params.password;
    let despass = new Buffer(pass, 'base64');
    pass = despass.toString('ascii'); //return string password

    dbConn.query(`SELECT id_users , username, email, creation_date, CASE WHEN COUNT(id_users)=1 THEN 'TRUE' ELSE 'FALSE' END as validated FROM users WHERE username = "${userword}" AND password = "${pass}"`, (error, results, fields) => {
        if(error) throw error;
            let validation = [];
            if(results[0]['validated'] === "TRUE"){
                validation = results;
            }else{
                validation = [{validated: false}];
            }
            //res.end(JSON.stringify(validation));
            //res.send('api response');
            //res.header("Access-Control-Allow-Origin", "*");
            res.json(validation);
    });
});


//create new account service
router.post('/account/new/', (req, res, next) => {
    const data = req.body;
    const sql = "INSERT INTO users SET ?";
    let validation = [{validated: false}];
    dbConn.query(`SELECT id_users , username, email, creation_date, CASE WHEN COUNT(id_users)=1 THEN 'TRUE' ELSE 'FALSE' END as validated FROM users WHERE email = "${data.email}"`, (error, results, fields) => {
        if (error) throw error;
        //res.json(validation);
        if(results[0].email != data.email){
            dbConn.query(sql, data, function (error, results, fields) {
                if (error) throw error;
        
               /*if(results[0]['id_users']){
                    validation = [{validated: true, username: fields.username, id_users: fields.id_users}];
                }else{*/
                    validation = [{validated: true, id_users: results.insertId, username: data.username}];
                    res.json(validation);
                //}
        
                
            });
        }
        
        if(results[0].email == data.email){
            validation = [{validated: true, id_users: results[0].id_users, username: results[0].username}];
            res.json(validation);
        }

    });
    
});


module.exports = router;