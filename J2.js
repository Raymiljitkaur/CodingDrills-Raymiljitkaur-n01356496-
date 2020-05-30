window.onload=function(){
  // here i am trying to get the two inputs
  var d1=document.getElementById('depth1');
  var d2=document.getElementById('depth2');
  var d3=document.getElementById('depth3');
  var d4=document.getElementById('depth4');
//here the result will be taken in and evaluated for both the teams
  var button=document.getElementById('result');
  var result=document.getElementById('result1');
// the functionality that will be performed on clicKing the button
  button.onclick= function depthresult()
  {
    //checking for the situation where the fish is diving
    if((d1.value)>(d2.value) && (d2.value)>(d3.value) && (d3.value)>(d4.value))
    {
      result1.innerHTML="fish diving";
    }
    //checking for the situation where the fish is rising
    else if ((d1.value)<(d2.value) && (d2.value)<(d3.value) && (d3.value)<(d4.value))
    {
      result1.innerHTML="fish rising";
    }
    //checking for constant depth
    else if ((d1.value)=(d2.value)=(d3.value)=(d4.value)) {
      result1.innerHTML="fish at constant depth";
    }else if ((d1.value)=(d2.value)=(d3.value)=(d4.value)=" "){
      result1.innerHTML="enter something";
    }else {
      result1.innerHTML="no fish";
    }
  }
}
