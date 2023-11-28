// console.log(window)


// const oyunQaydasi = ["e", "f", "w"];
// let player1Point = 0;
// let player2Point = 0;



// const showPoint1 = document.querySelector("#showPoint1")
// const showPoint2 = document.querySelector("#showPoint2")


// const showResult1 = document.querySelector("#showResult1")
// const showResult2 = document.querySelector("#showResult2")


// const showİmg1 = document.querySelector("#showİmg1")
// const showİmg2 = document.querySelector("#showİmg2")

// const gameMusic = document.querySelector("#music")


// gameMusic.play()

// function randomElement() {
//     const randomIndex = Math.floor(Math.random() * oyunQaydasi.length)
//     return oyunQaydasi[randomIndex];
// }



// function resultGame(userChose, compChose) {


//     console.log(userChose); //!menme
//     console.log(compChose);//!kompdu

//     showİmg1.src = `./img/${userChose}.png`;
//     showİmg2.src = `./img/${compChose}.png`;


// }

// function startGame() {







//     if (userChose == "w" && compChose == "f") {
//         //!!su yanginını sondrur deye men qalibem
//         console.log("win");

//         player1Point += 1//!xalı artıtrır
//         showPoint1.innerHTML = player1Point  //!win olan oyuncunu gostermek ucun
//         showResult1.innerHTML = "WİN"  //!win i goster
//         showResult2.innerHTML = "LOSE"


//         showResult1.style.color = "green"
//         showResult2.style.color = "red"

//     } else if (userChose == "f" && compChose == "e") {
//         console.log("WİN");//!qalib olan zaman

//         player1Point += 1//!xalım 1vahid artır
//         showPoint1.innerHTML = player1Point//! meni goster
//         showResult1.innerHTML = "WİN" //!at the same time show writing of the "win"
//         showResult2.innerHTML = "LOSE" //!at the same time show writing of the "lose"


//         showResult1.style.color = "green"
//         showResult2.style.color = "red"


//     } else if (userChose == "e" && compChose == "w") {
//         console.log("WİN");

//         player1Point += 1
//         showPoint1.innerHTML = player1Point
//         showResult1.innerHTML = "WİN"
//         showResult2.innerHTML = "LOSE"

//         showResult1.style.color = "green"
//         showResult2.style.color = "red"


//     } else if (userChose == compChose) {
//         console.log("DRAW")

//         showResult1.innerHTML = "DRAW"
//         showResult2.innerHTML = "DRAW"

//         showResult1.style.color = "gray"
//         showResult2.style.color = "gray"

//     } else {
//         console.log("LOSE")

//         player2Point += 1
//         showPoint2.innerHTML = player2Point
//         showResult2.innerHTML = "WİN"//!reqib uduub guya
//         showResult1.innerHTML = "LOSE"//!men lse

//         showResult1.style.color = "red"
//         showResult2.style.color = "green"

//     }


// }


// window.addEventListener("keypress", function (e) {
//     // console.log("click", e.key)

//     const userChose = e.key; //!basılan tusu qaytaracaq   //Userchoose 

//     if (oyunQaydasi.indexOf(userChose) != -1) {

//         startGame()
//         gameMusic.play()

//         const compChose = randomElement();

//         resultGame(userChose, compChose);


//     } else {
//         alert("sehvdir")
//     }


// })


const oyunQaydasi = ["e", "f", "w"];
let player1Point = 0;
let player2Point = 0;

const showPoint1 = document.querySelector("#showPoint1");
const showPoint2 = document.querySelector("#showPoint2");

const showResult1 = document.querySelector("#showResult1");
const showResult2 = document.querySelector("#showResult2");

const showİmg1 = document.querySelector("#showİmg1");
const showİmg2 = document.querySelector("#showİmg2");

const gameMusic = document.querySelector("#music");

function randomElement() {
    const randomIndex = Math.floor(Math.random() * oyunQaydasi.length);
    return oyunQaydasi[randomIndex];
}

function resultGame(userChose, compChose) {
    console.log(userChose);
    console.log(compChose);

    showİmg1.src = `./img/${userChose}.png`;
    showİmg2.src = `./img/${compChose}.png`;
}

function startGame(userChose, compChose) {
    if (userChose == "w" && compChose == "f") {
        // Oyuncu 1 kazandı.
        player1Point += 1;
        showPoint1.innerHTML = player1Point;
        showResult1.innerHTML = "WIN";
        showResult2.innerHTML = "LOSE";
        showResult1.style.color = "green";
        showResult2.style.color = "red";
    } else if (userChose == "f" && compChose == "e") {
        // Oyuncu 1 kazandı.
        player1Point += 1;
        showPoint1.innerHTML = player1Point;
        showResult1.innerHTML = "WIN";
        showResult2.innerHTML = "LOSE";
        showResult1.style.color = "green";
        showResult2.style.color = "red";
    } else if (userChose == "e" && compChose == "w") {
        // Oyuncu 1 kazandı.
        player1Point += 1;
        showPoint1.innerHTML = player1Point;
        showResult1.innerHTML = "WIN";
        showResult2.innerHTML = "LOSE";
        showResult1.style.color = "green";
        showResult2.style.color = "red";
    } else if (userChose == compChose) {
        // Berabere.
        showResult1.innerHTML = "DRAW";
        showResult2.innerHTML = "DRAW";
        showResult1.style.color = "gray";
        showResult2.style.color = "gray";
    } else {
        // Oyuncu 2 kazandı.
        player2Point += 1;
        showPoint2.innerHTML = player2Point;
        showResult1.innerHTML = "LOSE";
        showResult2.innerHTML = "WIN";
        showResult1.style.color = "red";
        showResult2.style.color = "green";
    }
}

window.addEventListener("keypress", function (e) {
    const userChose = e.key;

    if (oyunQaydasi.indexOf(userChose) != -1) {
        const compChose = randomElement();
        resultGame(userChose, compChose);
        startGame(userChose, compChose);
        gameMusic.play();
    } else {
        alert(" wrong");
    }
});

