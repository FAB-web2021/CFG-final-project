//function switchVisible() {
    //if (document.getElementById('pizza')) {

       // if (document.getElementById('pizza').style.display == 'none') {
         //   document.getElementById('pizza').style.display = 'block';
      //      document.getElementById('patisserie').style.display = 'none';
            
      //  }
      //  else {
      //      document.getElementById('pizza').style.display = 'none';
      //      document.getElementById('patisserie').style.display = 'block';
   //     }
 //   }
//}
function trigger1(){
    document.getElementById('pizza').style.display ='block';
    document.getElementById('patisserie').style.display ='none';
    document.getElementById('cakes').style.display ='none';
    document.getElementById('cookies').style.display ='none';
  }
  function trigger2(){
    document.getElementById('pizza').style.display ='none';
    document.getElementById('patisserie').style.display ='block';
    document.getElementById('cakes').style.display ='none';
    document.getElementById('cookies').style.display ='none';
  }
  function trigger3(){
    document.getElementById('pizza').style.display ='none';
    document.getElementById('patisserie').style.display ='none';
    document.getElementById('cakes').style.display ='block';
    document.getElementById('cookies').style.display ='none';
  }
  function trigger4(){
    document.getElementById('pizza').style.display ='none';
    document.getElementById('patisserie').style.display ='none';
    document.getElementById('cakes').style.display ='none';
    document.getElementById('cookies').style.display ='block';
  }
  