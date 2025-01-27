const button = document.querySelector("button");

button.addEventListener("click", function(){
    let fet = fetch("https://api.ipify.org/");

    fet.then(res => res.text()).then(d => {console.log(d)});
})