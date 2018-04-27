document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getJson").addEventListener("click", getJson);
document.getElementById("getApi").addEventListener("click", getApi);

//Get Data from a txt file
function getText() {
  // fetch('sample.txt')
  // .then(function(res){
  //   return res.text();
  // })
  // .then(function(data){
  //   console.log(data);
  // })
  fetch("sample.txt")
    .then(res => res.text())
    .then(data => {
      document.getElementById("output").innerHTML = data;
    });
}

//Get data from a JSON File
function getJson() {
  fetch("people.json")
    .then(res => res.json())
    .then(data => {
      let output = "<h2>People you know:</h>";
      data.forEach(function(user) {
        output += `
        <ul>
          <li>ID: ${user.id}</li>
          <li>ID: ${user.name}</li>
          <li>ID: ${user.email}</li>
        </ul>
      `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

//Get data from an external API
function getApi() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      let output = "<h2>Here are 100 posts</h2>";
      data.forEach(function(post) {
        output += `
              <div>
                <h3>${post.title}</h3>
                <textarea rows="10" cols="20" disabled = "disabled">
                ${post.body}
                </textarea>
              </div>
              <hr>
       `;
      });
      document.getElementById("output").innerHTML = output;
    });
}
