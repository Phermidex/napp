const express = require('express');
const router = express.Router();
const dbConn = require('../config/mysqldb.js');
const navi = require('../config/nav.js');

//app navigation
const nav_title = 'Cool Template';


const baseUrl_domain = process.env.BASE_URL;

/*const profileData = (IDfind = 1, res) => {
    
}*/



//user rest
router.get('/users/:username/:password', (req, res, next) => {
    let userword = req.params.username;
    //revive encrypt pass
    let pass = req.params.password;
    let despass = new Buffer(pass, 'base64');
    pass = despass.toString('ascii'); //return string password

    dbConn.query(`SELECT id_users , username, email, img_uri, creation_date, CASE WHEN COUNT(id_users)=1 THEN 'TRUE' ELSE 'FALSE' END as validated FROM users WHERE username = "${userword}" AND password = "${pass}"`, (error, results, fields) => {
        if (error) throw error;
        let validation = [];
        if (results[0]['validated'] === "TRUE") {
            validation = results;
        } else {
            validation = [{
                validated: false
            }];
        }
        //res.end(JSON.stringify(validation));
        //res.send('api response');
        //res.header("Access-Control-Allow-Origin", "*");
        res.json(validation);
    });
});


//create new account service
router.post('/auth/login/', (req, res, next) => {
    const data = req.body;
    const sql = "INSERT INTO users SET ?";
    let validation = [{
        validated: false
    }];
    dbConn.query(`SELECT id_users , username, email, img_uri, creation_date, CASE WHEN COUNT(id_users)=1 THEN 'TRUE' ELSE 'FALSE' END as validated FROM users WHERE email = "${data.email}"`, (error, results, fields) => {
        if (error) throw error;

        if (results[0].email == data.email) {
            validation = [{
                validated: true,
                id_users: results[0].id_users,
                username: results[0].username,
                img_uri: results[0].img_uri
            }];
            res.json(validation);
        }

    });

});

//create new account service
router.post('/auth/register/', (req, res, next) => {
    const data = req.body;
    const sql = "INSERT INTO users SET ?";
    let validation = [{
        validated: false
    }];
    dbConn.query(`SELECT id_users , username, email, creation_date, CASE WHEN COUNT(id_users)=1 THEN 'TRUE' ELSE 'FALSE' END as validated FROM users WHERE email = "${data.email}"`, (error, results, fields) => {
        if (error) throw error;
        //res.json(validation);
        if (results[0].email != data.email) {
            dbConn.query(sql, data, function (error, results, fields) {
                if (error) throw error;

                /*if(results[0]['id_users']){
                     validation = [{validated: true, username: fields.username, id_users: fields.id_users}];
                 }else{*/
                validation = [{
                    validated: true,
                    id_users: results.insertId,
                    username: data.username
                }];
                res.json(validation);
                //}


            });
        }

        if (results[0].email == data.email) {
            validation = [{
                validated: true,
                id_users: results[0].id_users,
                username: results[0].username
            }];
            res.json(validation);
        }

    });

});


//profile data
router.post('/profile/update/:id', (req, res, next) => {
    let {givenname, familyname, email} = req.body;
    console.log(req.body)
    let IDfind = req.params.id;
    dbConn.query(`UPDATE users SET givenname = "${givenname}", familyname = "${familyname}" , email = "${email}"  WHERE id_users = ${IDfind}`, (error, results, fields) => {
        if (error) throw error;
        const response = [{
            results: 0,
            validated: true
        }];
        res.json(response);
    });
});


router.get('/profile/:id', (req, res, next) => {
    let IDfind = req.params.id;
    //let IDfind = 1;
    dbConn.query(`SELECT COUNT(id_users) as total, id_users , username, email, img_uri, givenname, familyname, creation_date FROM users WHERE id_users = ${IDfind}`, (error, results, fields) => {
        if (error) throw error;
        const response = (results[0].total > 0 ? [{
            results: results,
            validated: true
        }] : [{
            results: 0,
            validated: false
        }]);
        res.json(response);
    });
});


//Upload method

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "./public/assets/uploads/",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
}).single("myImage");

router.post("/upload/:id", (req, res, next) => {
    upload(req, res, (err) => {

        const sql = `UPDATE users SET img_uri = "http://localhost:3002/uploads/${req.file.filename}" WHERE id_users = ${req.params.id}`;
        dbConn.query(sql, (error, results, fields) => {
            if (error)
                console.log(results);
        });
        console.log(req.params.id);
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file); //Here you get file.
        /*Now do where ever you want to do*/
        res.json({
            file: `http://localhost:3002/uploads/${req.file.filename}`,
            upload: true
        });
        if (err)
            res.json({
                upload: false
            });
    });
});


module.exports = router;