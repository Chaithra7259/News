/* fetch() method : It is defined on the window object,which we cam use to perform request.
   This methos will return promise
   Promise will either be fullfilled or rejected 
   */

   document.getElementById('button1').addEventListener('click', getExternal);
   // Get external API data
   function getExternal(){
    
     fetch('https://content.guardianapis.com/search?q=football&api-key=4f044cb8-731a-438e-8cdf-a8f087afca87').then(function(data){
       
         //console.log(data);
         return data.json();
         debugger
     }).then(function(completedata){
         console.log("hai",completedata);
        let output='';
        for (let res of completedata.response.results){  
          output +=` 
           
          <div class="border border-dark rounded" >
                 
            <div class="row m-1">
             <a class="text-decoration-none " href="${res.webUrl}" class="webTitle" id="linkF1">${res.webTitle}</a>
            </div>
            <div class="row m-1 ">
              <div class="col-1">
                  
                     <p><img class="img-thumbnail" src="img/F1.jpg" /></p>
                 
                </div>
                <div class="col">
                  
                    <p>The home of football in this website bringing you the latest football news,  exclusive interviews, transfer rumours, upcoming events and many more.</p>
                  
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


      