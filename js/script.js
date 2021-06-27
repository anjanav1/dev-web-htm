function changecontent()
{
   let x=document.getElementById("knowmore");
   
   if(x.style.display=="block")
   {
       x.style.display="none";
   }
   else
   x.style.display="block";

}
function validation(){
   x=document.getElementById("nameinput");
   y=document.getElementById("emailinput");
   z=document.getElementById("batchinput");
   
   if(x.value=="")
   {
       document.getElementById("validname").style.display="block";
   }
    
   if(y.value=="")
   {
       document.getElementById("validemail").style.display="block";
   }
    
   if(z.value=="--none--")
   {
       document.getElementById("enterbatch").style.display="block";
   }
   if(x||y==""||z=="--none--")
   {
   return false;
   }
}
