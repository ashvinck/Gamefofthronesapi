    
    

 // Creating HTML Elements

///container div
const container = document.createElement('div'); 
 container.className = 'container';              
 document.body.appendChild(container);
  
//row div
 const row = document.createElement('div'); 
 row.className = 'row';                   
 container.appendChild(row); 

// GOT Characters List
const GOTData = () => {
    // div to display Loading window
    let loader = `<div class="boxLoading">Loading...</div>`; 
    document.querySelector('.row').innerHTML = loader;
    // fetching from rest-countries API
    fetch("https://thronesapi.com/api/v2/Characters") 
    //parsing the response to JSON
        .then(response => response.json())  
        .then(function (data) {           
            let result = `<h1>Game Of Thrones</h1>
                          <p>The full name of the characters , their names ,houses and images are shown below</p>`; //  Page Heading 
            // responses are parsed and stored in "data" and forEach loop below takes "info" as parameter where we specify the required arguments to iterate over the response.
            data.forEach((info) => {
                const {title, imageUrl, fullName, family} = info;
                result +=
                // Creating remaining repeating HTML elements using Bootstrap
                    `<div class="col-lg-4">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h2> ${title} </h2>
                                    </div>
                                    <div class="card-body">
                                    <img  class="rounded mx-auto d-block card-img" src=${imageUrl}  id="flag" alt="character-img">
                                        <h4> Fullname:  ${fullName} </h4>
                                        <h4> Family :  ${family} </h4>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            document.querySelector(".row").innerHTML = result;  /// appending results to the row div 
        })
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`)
      });       
                
};

GOTData();   //calling the function.

  