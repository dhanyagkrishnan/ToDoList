password=document.getElementById("password");
uname=document.getElementById("uname");
error=document.getElementById("error");
function validate()
{
    
    if(uname.value==""||password.value=="")
    {
       
        
        error.innerHTML="All fields are mandatory";
        error.style.color="red";
        return false;
    }
    else 
    {
       if(uname.value=='admin' && password.value==12345)
          {
              return true;
          }
    }

}