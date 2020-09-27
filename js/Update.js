 function retrievePost (id) {
     fetch('http://jsonplaceholder.typicode.com/posts/'+id)
     .then(
         function(response) {
             if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
             }
      
             // Examine the text in the response
             response.json().then(function(posts) {
               console.log(posts);
               let values = Object.values(posts);
               let i = 0;
                for(let x in posts){
                  
                  let card = document.querySelector("form");
                  let formLabel = document.createElement("label");
                  let formInput = document.createElement("input");
                  let att4 = document.createAttribute("class");
                  att4.value = "form-control";
                  formInput.setAttributeNode(att4);
                  
                  formInput.style.width = "1200px";
                  
                  if (x !== 'title' && x !== 'body'){
                    
                    let att = document.createAttribute("readonly");
                    att.value = "form-control-plaintext";
                    formInput.setAttributeNode(att);
                    let att2 = document.createAttribute("value");
                    att2.value = values[i];
                    formInput.setAttributeNode(att2); 
                  } else {
                    
                    let att = document.createAttribute("placeholder");
                    att.value = values[i];
                    formInput.setAttributeNode(att);
                  }      
                  
                  let formDiv = document.createElement("div");
                  let att3 = document.createAttribute("class");
                  att3.value = "form-group";
                  formDiv.setAttributeNode(att3);

                  formLabel.innerHTML = x + ": "; 
                  card.appendChild(formDiv);
                  formDiv.appendChild(formLabel);
                  formDiv.appendChild(formInput);
                  
                  i++;
                }

                let findForm = document.querySelector("form");
                let newButton = document.createElement("button");
                newButton.innerHTML = "Submit";
                findForm.appendChild(newButton);
             });
         }
     )
     .catch(function(err) {
       console.log('Fetch Error :-S', err);
     });
 }


 const params = new URLSearchParams(window.location.search);

 for(const param of params){
  console.log(param);
  let x=param[0];
  console.log(x);
  retrievePost(x);
 }

 let table = document.querySelector("table");

