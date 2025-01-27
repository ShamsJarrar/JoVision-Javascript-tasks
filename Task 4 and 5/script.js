const button = document.querySelector("button");
const text = document.querySelector("p");

button.addEventListener("click", function(){
    const arr = [];
    let sum = 0;
    let evenSum = 0;
    for(let i = 0; i <= 100; i++){
        arr.push(i);
        sum += i;
        if(i % 2 == 0){
            evenSum += i;
        }
    }
    text.innerHTML = "Sum of all numbers = " + sum + 
                    "<br> Sum of even numbers only = " + evenSum;
})