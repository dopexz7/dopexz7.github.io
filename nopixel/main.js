
// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
// }
var searchingStreamer=document.getElementById('searchStream');
var streamerPin = document.getElementById('searchStreamPin');

function autocc() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchStream");
  filter = input.value.toUpperCase();
  ul = document.getElementById("videoUl");
  
  li = ul.getElementsByTagName("div");
  for (i = 0; i < li.length; i++) {
      if (li[i].id.toUpperCase().indexOf(filter) > -1) {
        ul.style.opacity = '1'
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
searchingStreamer.addEventListener("keyup", autocc);

streamerPin.addEventListener('click', function(){
  var currentVal = searchingStreamer.value;
  ul = document.getElementById("videoUl");
  li = ul.getElementsByTagName("div");
  document.getElementById('kekw').appendChild(document.getElementById(currentVal));  
});
