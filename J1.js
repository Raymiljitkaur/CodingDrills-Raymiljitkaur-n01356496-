window.onload=function()
{
 var a1=document.getElementById('1A');
 var a2=document.getElementById('2A');
 var a3=document.getElementById('3A');
 var b1=document.getElementById('1B');
 var b2=document.getElementById('2B');
 var b3=document.getElementById('3B');
 var button=document.getElementById('result');
 var result=document.getElementById('result1');

 button.onclick= function finalresult()
 {
   var apple=(a1.value * 1)+(a2.value * 2)+(a3.value * 3);
   var banana=(b1.value * 1)+(b2.value * 2)+(b3.value * 3);
   console.log(apple);
   console.log(banana);
   if(apple>banana)
   {
     result1.innerHTML="And the Winner is Team A";
   }
   else if(apple<banana)
   {
     result1.innerHTML="And the Winner is Team B";
   }
   else if (apple=banana)
   {
     result1.innerHTML="it's a tie";
   }
   else{
     result1.innerHTML="enter something";
   }
 }

}
