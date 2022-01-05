
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
  } else {
    document.getElementById('user_name').textContent = 'Not connected';
  }
}

function testAPI() {
    console.log('Welcome! Fetching your information.... ');
    FB.api('/me', function(response) {
      document.getElementById('user_name').textContent = response.name;
    });
    location.reload();
}

window.fbAsyncInit = function() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};


