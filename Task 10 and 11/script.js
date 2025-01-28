const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    
    let ft = fetch("https://api.ipify.org/");
    ft
    .then(res => {
        if(!res.ok){
            throw new Error("Invalid Fetch");
        }
        return res.text();
    })
    .then(d => btn.innerHTML = d)
    .catch(err => alert(err.message));
})