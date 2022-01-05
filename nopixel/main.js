
setInterval(function(){
  window.fbAsyncInit = function() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
};
},1000);

