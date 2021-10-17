//var rate_value= document.querySelector('input[name="fav_language"]:checked').value;
//if (document.getElementById('html').checked) {
 //rate_value = document.getElementById('html').value;
//}
var checkRadio = document.querySelector(
  'input[name="GFG"]:checked');

  if(checkRadio !=null){
    var value=checkRadio.value;
    document.getElementById(value + value).disabled = true;
    window.alert(value + value)
  }

function display() { 
  var checkRadio = document.querySelector(
      'input[name="GFG"]:checked');
    
  if(checkRadio != null) {
      document.getElementById("disp").innerHTML
          = checkRadio.value
          + " radio button checked";
          var value=checkRadio.value;
          //window.alert(value + value);
          for(i=1;i<4;i++){
            document.getElementById(i.toString() ).disabled = false;
            document.getElementById(i.toString() + i.toString()).disabled = false;
            document.getElementById(i.toString() + i.toString() + i.toString() ).disabled = false;
           
           //window.alert(i.toString() + i.toString())
          }
          document.getElementById(value  ).disabled = true;
          document.getElementById(value + value ).disabled = true;
          document.getElementById(value + value + value).disabled = true;
  }
  
  else {
      document.getElementById("disp").innerHTML
          = "No one selected";
  }
}




//window.alert(rate_value);