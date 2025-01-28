let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    let ft = fetch("https://api.agify.io/?name=" + name);

    ft.then(res => {
        if(!res.ok || name == ""){
            throw new Error("Invalid fetch");
        }
        return res.json()
    })
    .then(d => alert("Your name is: " + d.name
        + "\nYour age is: " + d.age)
    )
    .catch(err => alert(err.message));

})