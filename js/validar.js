
  $(document).ready(function(){

    $('#nextPage').click(function(e){
        e.preventDefault();

        if($('#test5').is(':checked')){
            var codigoInput = $('#codigo').val();
            window.location.href = 'registrate.html';
        }
        else{
            alert('Tienes que estar de acuerdo con los terminos del servicio');
        }
    });
  });


  function numerorandom(){
    var length = 3,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    alert('Tu codigo es LAB -' + retVal);
  }






