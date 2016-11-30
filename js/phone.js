$(function() {
  $('#codeselector').change(function(){
    $('.code').hide();
    $('#' + $(this).val()).show();
  });
});



$(document).ready(function() {
    $('select').material_select();
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
				Materialize.toast('ingresa un numero valido', 4000);
			}
		}
		else{
			Materialize.toast('Tienes que estar de acuerdo con los terminos del servicio', 4000);
		}
	});
});
function celu(telefono) {
	var filter = /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{3})$/	
	if (filter.test(telefono)) {
		return true;
	}
	else {
		return false;
	}
}

