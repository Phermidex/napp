$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.fixed-action-btn').floatingActionButton({
        toolbarEnabled: true
      });
      
    const active_link = $('body').data('current');
    $('.'+active_link).addClass('active');

  });

  