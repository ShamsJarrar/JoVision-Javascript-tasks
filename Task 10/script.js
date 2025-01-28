const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let ft = fetch("https://api.ipify.org/");

    ft.then(res => res.text()).then(d => btn.innerHTML = d);
})