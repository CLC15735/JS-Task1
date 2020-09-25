fetch('http://jsonplaceholder.typicode.com/posts')
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

              //Find the table within index.html
              let table = document.querySelector("table");
              let data = Object.keys(posts[0]);

              //Generate both table and header
              generateHeader(table, data);
              populateTable(table, posts);
            });
        }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

function generateHeader (table, data) {
    let header = table.createTHead();
    let row = header.insertRow();
    for (let x of data) {
        let th = document.createElement("th");
        let addTitle = document.createTextNode(x);
        th.appendChild(addTitle);
        row.appendChild(th);
    }

    let AddUpdate = document.createElement("th");
    let addInfo = document.createTextNode("Update");
    AddUpdate.appendChild(addInfo);
    row.appendChild(AddUpdate);

    let AddDelete = document.createElement("th");
    let addInfo2 = document.createTextNode("Delete");
    AddDelete.appendChild(addInfo2);
    row.appendChild(AddDelete);

}

function populateTable (table, posts) {
    for (let one of posts){
        let row = table.insertRow(); 
        for (let x in one) {
            let dataCell = row.insertCell();
            let addInfo = document.createTextNode(one[x]);
            dataCell.appendChild(addInfo);
        }
        let AddUpdate = row.insertCell();
        let generateUpdate = document.createElement("button");
        generateUpdate.innerHTML="Update";
        generateUpdate.onclick = "update.html?" + one.id; 
        AddUpdate.appendChild(generateUpdate);

        let AddDelete = row.insertCell();
        let generateDelete = document.createElement("button");
        generateDelete.innerHTML="Delete";
        AddDelete.appendChild(generateDelete);
    }
}


