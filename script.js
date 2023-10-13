
// -----------------Task1--------------------

// let btnDeposit = document.querySelector(".btn-deposit");
// let withdraw = document.querySelector(".withdraw");
// let btnWithdraw = document.querySelector(".btn-withdraw");


// const bankAccount = {
//     ownerName: "Valeria",
//     accountNumber: 1234567890,
//     balance: 100,

//     deposit(amount) {
//         this.balance += amount;
//     },

//     withdraw(amount) {
//         this.balance -= amount;
//     },

//     getBalance() {
//         return this.balance;
//     }
// };

// btnDeposit.addEventListener("click", () => {
//     const amount = Number(document.querySelector(".deposit").value);

//     bankAccount.deposit(amount);
//     console.log(`On your account: ${bankAccount.getBalance()}`);
// });

// btnWithdraw.addEventListener("click", () => {
//     const amount = Number(document.querySelector(".withdraw").value);

//     bankAccount.withdraw(amount);
//     console.log(`On your account: ${bankAccount.getBalance()}`);
// });



// -----------------Task2--------------------

// const weather = {
//     temperature: Number(document.querySelector(".temperature").value),
//     humidity: 70,
//     windSpeed: 10,

//     temperatureToday() {
//         if (this.temperature < 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// let btn = document.querySelector(".btn-check");

// btn.addEventListener("click", () => {
//     answear = weather.temperatureToday();

//     if (answear) {
//         console.log("Temperature is below 0 degrees Celsius");
//     } else {
//         console.log("Temperature is above 0 degrees Celsius");
//     }
// })
 

// -----------------Task3--------------------

// const user = {
//     name: "Valeria",
//     email: "name.surname@gmail.com",
//     password: 1234567890,

//     login(userEmail, userPassword) {

//         if (userEmail === this.email) {
//             console.log("Email is correct")
//         } else {
//             console.log("Email is incorrect")
//         }

//         if (userPassword === this.password) {
//             console.log("Password is correct")
//         } else {
//             console.log("Password is incorrect")
//         }
//     }
// }

// let btn2 = document.querySelector(".btn2");

// btn2.addEventListener("click", () => {
//     let userEmail = document.querySelector(".email").value;
//     let userPassword = Number(document.querySelector(".password").value);
//     user.login(userEmail, userPassword);
// };)



// -----------------Task4--------------------

const movie = {
    title: "Ford vs Ferrari",
    director: "James Mangold",
    year: "2019",
    rating: 9,

    ratingCheck() {
        if (this.rating > 8) {
            return true;
        } else {
            return false;
        }
    }
}

movieTitle = document.querySelector(".title");
movieDirector = document.querySelector(".director");
movieYear = document.querySelector(".year");
movieRating = document.querySelector(".rating");

movieTitle.textContent =`Title:  ${movie.title}`; 
movieDirector.textContent = `Director:  ${movie.director}`;
movieYear.textContent = `Year:  ${movie.year}`;
movieRating.textContent = `Rating:  ${movie.rating}/10`;

answear1 = movie.ratingCheck();

if (answear1 == true) {
    movieTitle.style.color = "green";
} else {
    movieTitle.style.color = "red";
}