$('#input_text').val('');
$('#input_text').trigger('autoresize');

$(document).ready(function() {
	$('input#input_text, textarea#textarea1').characterCounter();
});
$(document).ready(function() {
	Materialize.updateTextFields();
});



$(document).ready(function(){

	$('#nextPage').click(function(e){
		e.preventDefault();

		if($('#test5').is(':checked')){
			var telefonoInput = $('#chile').val();

			if (celu(telefonoInput)){
				localStorage.setItem('telefono', telefonoInput);
				window.location.href = 'validar.html';
			}
			else{
				alert("ingresa un numero valido");
			}
		}
		else{
			alert("Tienes que estar de acuerdo con los terminos del servicio");
		}
	});
});

function celu(telefono) {
	var filter = /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/	
	if (filter.test(telefono)) {
		return true;
	}
	else {
		return false;
	}
}

function numerorandom(){
    var length = 3,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    alert(retVal);
}



