const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    const now = new Date();
    const info = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        timestamp: now.toLocaleTimeString()
    };

    alert("Your name is: " + info.name +
        "\nYour age is: " + info.age +
        "\nTimestamp: " + info.timestamp
    );
})