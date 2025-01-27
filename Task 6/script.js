function shuffleArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(function(value){

    value.addEventListener("click", function(){
        const arr = [];
        for(let i = 0; i <= 100; i++){
            arr.push(i);
        }
    
        if(value.className == "one"){
            const notDivisibleBy3 = arr.filter(x => (x % 3 > 0));
            console.log(notDivisibleBy3.join(" "));
        }
        else if(value.className == "two"){
            for(let i = 101; i <= 150; i++){
                arr.push(i);
            }
            console.log(arr.join(" "));
        }
        else if(value.className == "three"){
            const add3 = arr.map(x => x + 3);
            console.log(add3.join(" "));
        }
        else if(value.className == "four"){
            const sliced = arr.slice(20, 41);
            console.log(sliced.join(" "));
        }
        else if(value.className == "five"){
            shuffleArray(arr);
            console.log(arr.join(" "));
            const sorted = arr.sort(function(a,b) {return b - a});
            console.log(sorted.join(" "));
        }
    })

})
