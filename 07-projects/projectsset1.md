# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
console.log(buttons)
const body = document.querySelector("body");
buttons.forEach( function (button) {
  button.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)
switch (e.target.id) {
case 'grey':body.style.backgroundColor = e.target.id ; // e.target.id ki jagah direct color likh sakte the 'grey' but this is more profesional or change bhinhi krna parega hr button ke color ke acc
break;
case 'white':body.style.backgroundColor = e.target.id ; 
break;
case 'blue':body.style.backgroundColor = e.target.id ;
 break;
case 'yellow':body.style.backgroundColor = e.target.id ;
 break;

}



  })
})


```

## project 2 solution

```javascript
const form = document.querySelector("form");

//this usecase will give you empty value
//const height = parseInt(document.querySelector("#height").value)
// height select karli .value se jo bhi input hogi value vo agai (isse string me value return hogi to parseInt se int krliya)
//const weight = parseInt(document.querySelector("#weight").value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); //jo bhi default work hoga click krne pr vo ruk jayega (yaha isliye use kiya taki data url ya server pr na jaye)
  const height = parseInt(document.querySelector("#height").value)// kisi event pr hi value store ho isliye eventlistner me rakha varana bahar to apne aap chalega & empty value fill ho jayegi
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  //checks
  if (weight && height === '' || weight && height < 0 || isNaN(weight) && isNaN(height)) {
    results.innerHTML = `Please give a valid height & weight `;
  }
  else if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else if (weight && height === '' || weight && height < 0 || isNaN(weight) && isNaN(height)) {
    results.innerHTML = `Please give a valid height & weight `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    // results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span> under Weight`;
      results.style.color="blue"
    } else if (bmi > 24.9) { results.innerHTML = `<span>${bmi}</span> Overweight`; 
  results.style.color = 'yellow'   } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span> Normal Range`;
      results.style.color = "green"
    }
  }
});


```

## project 3 solution code

```javascript
const clock =document.getElementById('clock');
// document.querySelector('#clock');
//setInterval function is use to repeat aprocess ata set particular time
setInterval( function () {
  let date =new Date();// want the date to relode every second no need manual reloding to update time on page
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)



```

## project 4 solution


```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
// const userinput = parseInt(document.querySelector("#guessfield").value);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
// generate a random color from hex value

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomcolor());

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

// The primary difference between the two snippets is the safety check inside the startChangingColor function.
// The Key Difference
// In the first code, you have this if statement:
// javascript
// if (!intervalId) {
//   intervalId = setInterval(changeBgColor, 1000);
// }
// Use code with caution.

// In the second code, that check is missing:
// javascript
// intervalId = setInterval(changeBgColor, 1000);
// Use code with caution.

// Why the second code fails:
// The second program fails because of a phenomenon called Interval Overlapping and Variable Overwriting.
// Speed Increases: Every time you click "Start," you create a new interval timer. If you click it 3 times, you have 3 separate timers all changing the background color every second. This makes the color transitions appear much faster.
// Stop Button Fails: This is the "lost reference" problem. When you click "Start" the first time, the ID for that timer is saved in intervalId. When you click "Start" a second time, a new timer is created, and its ID overwrites the old one in the intervalId variable.
// The first timer is still running in the background, but you no longer have its ID.
// When you click "Stop," clearInterval(intervalId) only kills the most recent timer. The previous "orphaned" timers keep running forever because you’ve lost the "key" to stop them.
// The first code is correct because it ensures only one interval exists at any given time.




```