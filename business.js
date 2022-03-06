/* fetch() method : It is defined on the window object,which we cam use to perform request.
   This methos will return promise
   Promise will either be fullfilled or rejected 
   */


   document.getElementById('button3').addEventListener('click', getExternal);
   // Get external API data
   function getExternal(){
    
     fetch('https://content.guardianapis.com/search?q=business&api-key=4f044cb8-731a-438e-8cdf-a8f087afca87').then(function(data2){
       
         return data2.json();
        
     }).then(function(completedata2){
        
        let output2='';
        for (let res of completedata2.response.results){  
          output2 +=` 
           
          <div class="border border-dark rounded" >
                 
            <div class="row m-1">
             <a class="text-decoration-none " href="${res.webUrl}" class="webTitle" id="linkF1">${res.webTitle}</a>
            </div>
            <div class="row m-1 ">
              <div class="col-1">
                  
                     <p><img class="img-thumbnail" src="img/B1.jpg" /></p>
                 
                </div>
                
                <div class="col">
                 
                    <p>Get the latest International Business and Finacial news from global markets and economies around the world. Live updates of the business developments globally.</p>
                  
                </div>
              </div>
                
           </div>
           <br>
   
   
          
                  
                 `
        };
        document.getElementById("Business").innerHTML=output2;
         }).catch((err)=>{
           console.log(err);
         })
       }