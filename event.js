
// console.log("hello world");
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     console.log("Button was clicked");
// };

// function sayHello() {
//     alert("ssay siiii hello")
// }

// btn.onclick = sayHello;

// btn.addEventListener()

// let weather = fetch("https://goweather.herokuapp.com/weather/Nepal")

// weather.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)

//     console.log(response.header)
//     return response.json()
// }).then((value2) => {
//     console.log(value2)

// })

// const createTodo = async () => {
//     let options = {
//         method: "Post",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             title: "Hello",
//             body: "too fat",
//             userId: 112,
//         })
//     }

//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response;
// }

// const mainfunction = async () => {
//     let todo = createTodo()
//     console.log(todo);
// }
// mainfunction();

let changeColor = document.querySelector("button");
changeColor.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    let randomColor = getRandomColor()
    h1.innerText = randomColor;
    console.log("color updated")
    let div = document.querySelector("div")
    div.style.backgroundColor = randomColor;
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`
    return color;
}




// let color = document.querySelector("btn")
// color.addEventListener("click", function () {

//     let h1 = document.querySelector("h1");
//     let RandomColor = randomColor();
//     h1.style.backgroundColor = RandomColor;

// })


// let randomColor = () => {
//     let red = Math.floor(Math.random() * 255)
//     let green = Math.floor(Math.random() * 255)
//     let blue = Math.floor(Math.random() * 255)

//     let color = `rgb(${red}, ${green}, ${blue})`
//     return color;
// }


// document.querySelector('p')



// let button = document.querySelector("button")

// console.log(button);



//concat string
let arr = ["hello", "hi", "niroj"]

function concat(arr) {

    let str = "";
    for (i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;

}
console.log(concat(arr));

// Generate random number for dice

function rollDice() {

    let random = Math.floor(Math.random() * 6) + 1;
    return random;
}
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());



















