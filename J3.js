window.onload=function(){
  var x=document.getElementById('t1');
  var y=document.getElementById('t2');
  var result=document.getElementById('result1');
  var button=document.getElementById('result');
   button.onclick= function series(){
    var z=0;
     var m=2;
     if(x>y){
       m+=1;
       z=y;
       y=x.value-y.value;
       x=z;
     }
     result1.innerHTML= m;
   }
}
