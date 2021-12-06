
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

	var interactiveChatTopbar = document.getElementById('interTopBar');
	interactiveChatTopbar.addEventListener('click', function() {
		if (interactiveChatTopbar.style.opacity !== '0.05') {
			interactiveChatTopbar.style.opacity = '0.05';
		} else {
			interactiveChatTopbar.style.opacity = '1';
		}	
	});
	var elements = document.getElementsByClassName('interactive-chat-message-right');
	for (var i = 0, len = elements.length; i < len; i++) {

    	elements[i].onclick = function(){
    		var elements = document.getElementsByClassName('interactive-chat-message-right');
    		for(var j=0; j<elements.length; j++) {
    			if (elements[j].style.opacity !== '0.05') {
    				elements[j].style.opacity = '0.05'
    			} else {
    				elements[j].style.opacity = '1'
    			}
    			
    		}
    	}
	}
	var interlikereply = document.getElementsByClassName('interactive-chat-message-likereply');
	for (var i = 0, len = interlikereply.length; i < len; i++) {

    	interlikereply[i].onclick = function(){
    		var interlikereply = document.getElementsByClassName('interactive-chat-message-likereply');
    		for(var j=0; j<interlikereply.length; j++) {
    			if (interlikereply[j].style.opacity !== '0.05') {
    				interlikereply[j].style.opacity = '0.05'
    			} else {
    				interlikereply[j].style.opacity = '1'
    			}
    			
    		}
    	}
	}
	var likebtn = document.getElementById('interlikebtn');
	likebtn.addEventListener('click', function(){
		if(likebtn.style.opacity !== '0.05') {
			likebtn.style.opacity = '0.05';
		} else {
			likebtn.style.opacity = '1';
		}
	});

	var intermessagepfp = document.getElementsByClassName('interactive-chat-message-pfp');
	for (var i = 0, len = intermessagepfp.length; i < len; i++) {
    	intermessagepfp[i].onclick = function(){
    		var intermessagepfp = document.getElementsByClassName('interactive-chat-message-pfp');
    		for(var j=0; j<intermessagepfp.length; j++) {
    			if (intermessagepfp[j].style.opacity !== '0.1') {
    				intermessagepfp[j].style.opacity = '0.1';
    				intermessagepfp[j].style.width = '5px';
    				intermessagepfp[j].style.height = '5px';
    			} else {
    				intermessagepfp[j].style.opacity = '1'
    				intermessagepfp[j].style.width = '30px';
    				intermessagepfp[j].style.height = '30px';
    			}
    			
    		}
    	}
	}
	
	




