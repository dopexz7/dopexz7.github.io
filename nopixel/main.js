
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
      alert('loggedIn')
      testAPI();
  }
}


function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('user_name').textContent = response.name;
      console.log(response)
    });
    location.reload();
}

window.fbAsyncInit = function() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};


