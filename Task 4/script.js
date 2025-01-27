const button = document.querySelector("button");
const text = document.querySelector("p");

button.addEventListener("click", function(){
    const arr = [];
    let sum = 0;
    for(let i = 0; i <= 100; i++){
        arr.push(i);
        sum += i;
    }
    text.innerHTML = "Sum = " + sum;
})