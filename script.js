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

function display(id) { 
  var checkRadio = document.querySelector(
      'input[name="Question"]:checked');
      //window.alert(checkRadio.id)
      //console.log(id);

    
  if(checkRadio != null) {
      document.getElementById("disp").innerHTML
          = checkRadio.value
          + " radio button checked";
          var value=checkRadio.value;
          //var id=checkRadio.id;
          var question=id.slice(0, 1);
          //if(question.slice(0, 1)==0)question=question.slice(1,2);
        
          var number=id.slice(2, 3);
          var point=id.slice(4, 5);
         // console.log(question);
          
          //console.log(number);
         // console.log(point);

        for(var m=1;m<4;m++){
          
          for(var n=1;n<4;n++){
            //console.log(n)
            for(var k=1;k<4;k++){//czyszczenie
              for(var l=1;l<4;l++){
                //console.log(k+"_"+l);
                //document.getElementById(01 + "_"+k.toString() +"_"+ l.toString()  ).disabled = false;
                
              }
            }

            


            for(var k=1;k<4;k++){//disabledowanie 
              for(var l=1;l<4;l++){
                if(k!=number && l==point)document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).disabled = true;
                //window.alert(number.toString()+ point.toString())
                //console.log("yes"+l)
              }
            }
            

          }
        }



        /*for(var i=1;i<4;i++){
          for(var j=1;j<4;j++){
            //console.log(i+"_"+j)
            if(document.getElementById(number + "_"+i.toString() +"_"+ j.toString()  ).checked  ){//narazie hardcode na "1" potem trzeba dorobić 3 petle na kazde pytanie
              
              //var question=1;//narazie hardcode na "1" potem trzeba dorobić z  3 petli
             //  var number=i;
              //var point=j;
              
              for(var k=1;k<4;k++){//czyszczenie
                for(var l=1;l<4;l++){
                  //console.log(k+"_"+l);
                  if(document.getElementById(number + "_"+k.toString() +"_"+ l.toString()  ).checked )document.getElementById(1 + "_"+k.toString() +"_"+ l.toString()  ).disabled = false;
                  //if(document.getElementById(1 + "_"+i.toString() +"_"+ j.toString()  ).checked )document.getElementById(1 + "_"+k.toString() +"_"+ l.toString()  ).disabled = false;
                }
              }


              for(var k=1;k<4;k++){//disabledowanie 
                for(var l=1;l<4;l++){
                  if(k!=number && l==point)document.getElementById(number + "_"+k.toString() +"_"+ l.toString()  ).disabled = true;
                  //window.alert(number.toString()+ point.toString())
                  //console.log("yes"+l)
                }
              }
            }

          }
        }*/














          //window.alert(number)
          //window.alert(value + value);
          for(i=1;i<4;i++){
            for(j=1;j<4;j++)
            {
           // document.getElementById(question + "_"+i.toString() +"_"+ j.toString()  ).disabled = false;
           // window.alert(question + "_"+i.toString() +"_"+ j.toString())


            }
            
           
           
          }
          for(i=1;i<4;i++){
            
        

              //document.getElementById(question + "_"+i.toString() +"_"+ point  ).disabled = true;
            //if(i!=number) document.getElementById(question + "_"+i.toString() +"_"+ point  ).disabled = true;

            
            
           
           
          }
          //document.getElementById(question + "_"+i.toString() +"_"+ i.toString()).disabled = true;
          //document.getElementById(value + value ).disabled = true;
          //document.getElementById(value + value + value).disabled = true;
  }
  
  //else {
      document.getElementById("disp").innerHTML
          = "No one selected";
  //}
}


function done(){
  var mentor=0;
  var coach=0;
  var doradca=0;
  
    
    
       /*
        if(document.querySelector(
          'input[name="Question"]:checked')){
          mentor +=parseInt( document.getElementById(9 + "_"+"3" +"_" +"1" ).value);
          coach+=parseInt( document.getElementById(9 + "_"+"2" +"_" +"1" ).value);
          doradca+=parseInt( document.getElementById(9 + "_"+"1" +"_" +"1" ).value);

          console.log(mentor);
        }*/
       


        document.getElementById("disp").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        var c=[];
        var b=[];
        var a=[];
        var d;
        for(i = 0; i < ele.length; i++) {
              
            if(ele[i].type="radio") {
              
                if(ele[i].checked){

                  document.getElementById("disp").innerHTML
                  += ele[i].className + " Points: "
                  + ele[i].value + "<br>";
                  if(ele[i].className=="C"&&ele[i].checked){
                     c[i]= parseInt(ele[i].value);
                     // console.log(c[i]);
                     }
                  if(ele[i].className=="B"&&ele[i].checked){
                    b[i]= parseInt(ele[i].value);
                    //console.log(b[i]);
                  }
                  if(ele[i].className=="A"&&ele[i].checked){
                      a[i]= ele[i].value;
                      //console.log(a[i]);
                    }

                    }
                    

            }
        


          }


coach=c[0]+b[1]+b[2]+a[3]+c[4]+a[5]+a[6]+b[7]+b[8]+b[9];
mentor=a[0]+c[1]+a[2]+c[3]+a[4]+c[5]+c[6]+c[7]+a[8]+c[9];
doradca=b[0]+a[1]+c[2]+b[3]+b[4]+b[5]+b[6]+a[7]+c[8]+a[9];
for(i=0;i<a.length;i++){
  console.log(a[i]);
  //d+=parseInt(a[i]);
  }
//console.log(coach);
//console.log(mentor);
//console.log(doradca);
//console.log(d)
}





//window.alert(rate_value);