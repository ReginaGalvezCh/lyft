$('#input_text').val('');
$('#input_text').trigger('autoresize');

$(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });
       