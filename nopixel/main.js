
// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
// }
function statusChangeCallback(response) {
  //console.log('statusChangeCallback');
  //console.log(response);
  if (response.status === 'connected') {
      testAPI();
      console.log(response.name)
  } else {
    document.getElementById('user_name').textContent = 'Not connected';
  }
}

function testAPI() {
  var lmao;
    console.log('Welcome! Fetching your information.... ');
    FB.api('/me', function(response) {
      lmao = response.name;
      document.getElementById('user_name').textContent = 'response.name';
      console.log(response.name)

    });

    
}

window.fbAsyncInit = function() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};


