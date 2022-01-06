
// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
// }
function statusChangeCallback(response) {
  //console.log('statusChangeCallback');
  //console.log(response);
  if (response.status === 'connected') {
      document.getElementById('user_name').textContent = response.name;
      testAPI();

  } else {
    document.getElementById('user_name').textContent = 'Not connected';
  }
}

function testAPI() {
  var lmao;
    console.log('Welcome! Fetching your information.... ');
    FB.api('/me', function(response) {
      

    });

    
}

window.fbAsyncInit = function() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};


