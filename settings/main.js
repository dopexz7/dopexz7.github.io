(function() { 
	function showhide(id){
	        if (document.getElementById) {
	          var divid = document.getElementById(id);
	          var divs = document.getElementsByClassName("hide");
	          for(var i=0;i<divs.length;i++) {
	             divs[i].style.display = "none";
	          }
	          divid.style.display = "block";
	        } 
	        return false;
	 }
	var mainPageBtn = document.getElementById('show-main-page');
	var emoteSettingsBtn = document.getElementById('show-emote-settings');
	var chatSettingsBtn = document.getElementById('show-chat-settings');
	var textSettingsBtn = document.getElementById('show-text-settings');
	var readSettingsBtn = document.getElementById('show-readability-settings');
	var highSettingsBtn = document.getElementById('show-high-settings');
	var otherSettingsBtn = document.getElementById('show-other-settings');
	var changelogBtn = document.getElementById('show-changelog');
	var changelogBtnx = document.getElementById('show-changelogx');
	var aboutBtn = document.getElementById('show-about');
	var breadcrumb = document.getElementById('breadcrumb');

	mainPageBtn.addEventListener('click', function() {
		showhide('main-tab');
		breadcrumb.innerText = "Main page";
	});
	emoteSettingsBtn.addEventListener('click', function() {
		showhide('emote-settings');
		breadcrumb.innerText = "Emote settings";
	});
	chatSettingsBtn.addEventListener('click', function() {
		showhide('chat-settings');
		breadcrumb.innerText = "Chat settings";
	});
	textSettingsBtn.addEventListener('click', function() {
		showhide('text-settings');
		breadcrumb.innerText = "Text settings";
	});
	readSettingsBtn.addEventListener('click', function() {
		showhide('readability-settings');
		breadcrumb.innerText = "Readability settings";
	});

	highSettingsBtn.addEventListener('click', function() {
		showhide('high-settings');
		breadcrumb.innerText = "Highlighting settings";
	});
	otherSettingsBtn.addEventListener('click', function() {
		showhide('other-settings');
		breadcrumb.innerText = "Other settings";
	});
	changelogBtn.addEventListener('click', function() {
		showhide('changelog');
		breadcrumb.innerText = "Changelog";
	});
	changelogBtnx.addEventListener('click', function() {
		showhide('changelog');
		breadcrumb.innerText = "Changelog";
	});
	aboutBtn.addEventListener('click', function() {
		showhide('about');
		breadcrumb.innerText = "About";
	});




}());