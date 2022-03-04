/* fetch() method : It is defined on the window object,which we cam use to perform request.
   This methos will return promise
   Promise will either be fullfilled or rejected 
   */

   document.getElementById('button1').addEventListener('click', getExternal);
   // Get external API data
   function getExternal(){
    
     fetch('https://content.guardianapis.com/search?q=football&api-key=test').then(function(data){
       https://content.guardianapis.com/search?q=football&api-key=4f044cb8-731a-438e-8cdf-a8f087afca87
         //console.log(data);
         return data.json();
         debugger
     }).then(function(completedata){
         console.log("hai",completedata);
        let output='';
        for (let res of completedata.response.results){  
          output +=` 
           
          <div class="border border-dark border-round" >
                 
            <div class="row">
             <a href="${res.webUrl}" class="webTitle" id="linkF1">${res.webTitle}</a>
            </div>
            <div class="row">
              <div class="col">
                  <div class="card card-body">
                     <p>img</p>
                  </div>
                </div>
                <div class="col">
                  <div class="card card-body">
                    <p>Description</p>
                  </div>
                </div>
              </div>
                
           </div>
           <br>


          
                  
                 `
        };
        document.getElementById("Foodball").innerHTML=output;
         }).catch((err)=>{
           console.log(err);
         })
       }


       document.getElementById('button2').addEventListener('click', getExternal);
       // Get external API data
       function getExternal(){
        
         fetch('https://content.guardianapis.com/search?q=health&api-key=test').then(function(data){
           https://content.guardianapis.com/search?q=football&api-key=4f044cb8-731a-438e-8cdf-a8f087afca87
             //console.log(data);
             return data.json();
             debugger
         }).then(function(completedata){
            
            let output='';
            for (let res of completedata.response.results){  
              output +=` 
               
              <div class="border border-dark border-round" >
                     
                <div class="row">
                 <a href="${res.webUrl}" class="webTitle" id="linkF1">${res.webTitle}</a>
                </div>
                <div class="row">
                  <div class="col">
                      <div class="card card-body">
                         <p>img</p>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card card-body">
                        <p>Description</p>
                      </div>
                    </div>
                  </div>
                    
               </div>
               <br>
    
    
              
                      
                     `
            };
            document.getElementById("Health").innerHTML=output;
             }).catch((err)=>{
               console.log(err);
             })
           }