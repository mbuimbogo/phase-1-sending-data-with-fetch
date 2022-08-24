// Add your code here

function submitData(name, email){
   return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        name:name, 
        email:email,
        })
   })
   .then(res => res.json())
   .then(user => {
    let id = user.id;
    let p = document.createElement('p')
    p.textContent = id;
    document.body.appendChild(p)
   })
.catch(function(error){
    let er = document.createElement("p");
    er.textContent = error.message;
    document.body.appendChild(er);
});

}
submitData('Steve', "steve@steve.com")
