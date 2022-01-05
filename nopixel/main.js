function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();

    } else if (response.status === 'not_authorized') {
      FB.login(function(response) {
        statusChangeCallback2(response);
      }, {scope: 'public_profile,email'});

    } else {
      alert("not connected, not logged into facebook, we don't know");
    }
  }

  function statusChangeCallback2(response) {
    console.log('statusChangeCallback2');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();

    } else if (response.status === 'not_authorized') {
      console.log('still not authorized!');

    } else {
      alert("not connected, not logged into facebook, we don't know");
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

window.fbAsyncInit = function() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
};



function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
