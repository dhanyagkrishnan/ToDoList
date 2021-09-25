
 $(document).ready(function() {
    $("#buttonid").click(function() {


   var xhttp=new XMLHttpRequest();
   xhttp.onreadystatechange=function()
   {
      if(this.readyState==4&&this.status==200)
      {
         var response=JSON.parse(this.responseText);
         var jresponse=response.grocery;
         console.log(response);
         var output="";
            
                output +="<tr>"+ 
                    "<th>"+ "Userid" +"</th>"+
                    "<th>"+ "ID "+"</th>"+
                    "<th>"+ "Title" +"</th>"+
                    "<th>"+ "Status" +"</th>"+
                    
                +"<tr>";
              
         for(var i=0;i<response.length;i++)
         {
            output +="<tr>"+ 
            "<td>"+ response[i].userId +"</td>"+
            "<td>"+ response[i].id +"</td>"+
            "<td>"+ response[i].title +"</td>"+
            "<td>"+ response[i].completed +"</td>"+
            "<td>"+(`<input type="checkbox" id="check" name="check" value="check" onchecked="${change2()}">`)+"</td>"
            "<tr>";
            $('#check').change(function() 
                    {
                        alert("ll")
                    if(this.checked != true)
                    {
                         alert('kk');
                    }
                 });   
            if(response[i].completed)
            {
                
                   
                $('input[type=checkbox]').attr('disabled',false);
                    
                    console.log("ll")
                    
                      
                 
            }
           
         }
         
         function change2()
         {
        //    alert("ll")
        //     if ( $("#check").attr('checked', true))
        //     {
                
        //     }
         }

         document.getElementById("tableid").innerHTML=output;
      }
   }
   xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
   xhttp.send();

});
});