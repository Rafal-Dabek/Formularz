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
  var d="";
  var ele = document.getElementsByTagName('input');
    
  /*for(i = 0; i < ele.length; i++) {
                  
    if(ele[i].type="radio") {
      
        if(ele[i].checked){
          
          d+= parseInt(ele[i].value);



        }
            
    }
}*/
       


        document.getElementById("disp").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        var c=[];
        var b=[];
        var a=[];
        var d=[];
        for(i = 0; i < ele.length; i++) {
              var m=0;
              var k=0;
              var r=0;
            if(ele[i].type="radio") {
              
                if(ele[i].checked){

                  document.getElementById("disp").innerHTML
                  += ele[i].className + " Points: "
                  + ele[i].value + "<br>";
                  //a[i]=ele[i].value;
                  if(ele[i].value!=null)d+=ele[i].value;
                  if(ele[i].className=="C"&&ele[i].checked&&ele[i].value!=null){
                     c[m]= parseInt(parseInt(ele[i].value));
                     // console.log(c[i]);
                     m++;
                     }
                  if(ele[i].className=="B"&&ele[i].checked){
                    b[r]= parseInt((ele[i].value));
                    r++;
                    //console.log(b[i]);
                  }
                  if(ele[i].className=="A"&&ele[i].checked){
                      a[k]= parseInt((ele[i].value));
                      k++;
                      //console.log(a[i]);
                    }

                    }
                    

            }
        


          }


coach=d[2]+d[4]+b[2]+a[3]+c[4]+a[5]+a[6]+b[7]+b[8]+b[9];
//mentor=a[0]+c[1]+a[2]+c[3]+a[4]+c[5]+c[6]+c[7]+a[8]+c[9];
//doradca=b[0]+a[1]+c[2]+b[3]+b[4]+b[5]+b[6]+a[7]+c[8]+a[9];
for(i=0;i<d.length;i++){
  var l=0;
  var j=0;
  var m=0;

  /*
  if(i%3==0&&d[i]!=null){
    a[l]=d.slice(0+i,1+i );
  l++;
 
  
  }
  if(i%3==1){
    b[j]=d.slice(1+i,2+i );
  j++;
  }
  if(i%3==2){
    c[m]=d.slice(2+i,3+i );
  m++;
  }*/

  
  
  
  




  /*
  a[0]=d.slice(0,1)
  a[1]=d.slice(0,1)
  a[2]=d.slice(0,1)
  a[3]=d.slice(0,1)
  a[4]=d.slice(0,1)
  a[5]=d.slice(0,1)
  a[6]=d.slice(0,1)
  a[7]=d.slice(0,1)
  a[8]=d.slice(0,1)
  a[9]=d.slice(0,1)
  c[0]=d.slice(0,1)
  c[1]=d.slice(0,1)
  c[2]=d.slice(0,1)
  c[3]=d.slice(0,1)
  c[4]=d.slice(0,1)
  c[5]=d.slice(0,1)
  c[6]=d.slice(0,1)
  c[7]=d.slice(0,1)
  c[8]=d.slice(0,1)
  c[9]=d.slice(0,1)



  b[0]=d.slice(1,2)
  b[1]=d.slice(0,1)
  b[2]=d.slice(0,1)
  b[3]=d.slice(0,1)
  b[4]=d.slice(0,1)
  b[5]=d.slice(0,1)
  b[6]=d.slice(0,1)
  b[7]=d.slice(0,1)
  b[8]=d.slice(0,1)
  b[9]=d.slice(0,1)
  */
  
  //d+=parseInt(a[i]);
  console.log(a)
  }
//console.log(coach);
//console.log(mentor);
//console.log(doradca);
//console.log(a)
//console.log(a[0])
//console.log(b)
//console.log(c)

}



//window.alert(rate_value);