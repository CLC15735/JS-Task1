 function retrievePost (id) {
     fetch('http://jsonplaceholder.typicode.com/posts'+id)
     .then(
         function(response) {
             if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
             }
      
             // Examine the text in the response
             response.json().then(function(posts) {
               console.log("hey",posts);
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
   let x=param[1]
   console.log(x)
   retrievePost(x)
 }

 let table = document.querySelector("table");

