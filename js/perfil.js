window.localStorage.getItem('name-user', input_name);
window.localStorage.getItem('lastname-user', input_lastname); 


window.localStorage.getItem('email-user', input-email);

$(document).ready(function(){
		$('#input_name').html(localStorage.getItem('name-user'));
		$('#input_lastname').html(localStorage.getItem('lastname-user'));
		$('#input-email').html(localStorage.getItem('email-user'));
	}