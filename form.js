function validateForm(form)
{
   //var name=document.getElementById("username").value;
   var uname=form.username.value; //here the form."username" is name field not id field
   var email=form.mail.value;
   var email_reg=/\S+@\S+\.\S+/;
   var phone=form.phone.value;
   var phone_reg=/(6|7|8|9)\d{9}$/;
   if(uname.length<8)
   {
    alert("The Username must be of atleast 8 characters");
    return false;
   }
   else if(email_reg.test(email)==false)
   {
       alert("Please Enter a valid Email!");
       return false;
   }
   else if(phone_reg.test(phone)==false)
   {
       alert("Please Enter a valid Phone Number")
       return false;
   }
   
    
}