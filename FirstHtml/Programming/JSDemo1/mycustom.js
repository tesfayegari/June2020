function customCalculator() {
  var num1 = document.getElementById('number1').value * 1; //$('#number1').val()*1;
  var num2 = document.getElementById('number2').value * 1;//$('#number1').val()*1;
  var result = num1 + num2;
  //document.getElementById('result').innerHTML = 'Sum of the two numbers is ' + result;
  $('#result').html('Sum of the two numbers is ' + result);
}

function getListItems(listName){
  var listItemsUrl =''
  return $.ajax({
    url: listItemsUrl,
    method: "POST",
    headers: { "Accept": "application/json; odata=nometadata" },
    data: jsonData
  });
}

$(document).ready(function () {
  //code goes here 
  $('#hideText').click(function () {
    $('#hideme').hide();
  });
  $('#showText').click(function () {
    $('#hideme').show();
  });
  $('#submit').click(function () {
    customCalculator();
  });

  

});
