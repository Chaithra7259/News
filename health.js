/* fetch() method : It is defined on the window object,which we cam use to perform request.
   This methos will return promise
   Promise will either be fullfilled or rejected 
   */


document.getElementById('button2').addEventListener('click', getExternal);
// Get external API data
function getExternal(){
 
  fetch('https://content.guardianapis.com/search?q=health&api-key=4f044cb8-731a-438e-8cdf-a8f087afca87').then(function(data1){
    
     
      return data1.json();
     
  }).then(function(completedata1){
     
     let output1='';
     for (let res of completedata1.response.results){  
       output1 +=` 
        
       <div class="border border-dark rounded" >
              
       <div class="row m-1">
          
          <a class="text-decoration-none" href="${res.webUrl}" class="webTitle" id="linkF1">${res.webTitle}</a>
        
         </div>
         <div class="row m-1 ">
              <div class="col-1">
                  
                     <p><img class="img-thumbnail" src="img/H1.jpg" /></p>
                 
                </div>
             
             <div class="col">
               
                 <p>Healthline news reports on emerging research, new treatments, diets, excercise, mental health, vaccine and trending topics in health and welness.</p>
              
             </div>
           </div>
             
        </div>
        <br>


       
               
              `
     };
     document.getElementById("Health").innerHTML=output1;
      }).catch((err)=>{
        console.log(err);
      })
    }