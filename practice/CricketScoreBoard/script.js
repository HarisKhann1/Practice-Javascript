const form = document.querySelector('form')
let teamTwoName;
let teamOneName;
let matchOvers;

let oneRun = document.getElementById('one');
let twoRun = document.getElementById('two');
let threeRun = document.getElementById('three');
let fourRun = document.getElementById('four');
let fiveRun = document.getElementById('five');
let sixRun = document.getElementById('six');

let dotBall = document.getElementById('dotBall');
let wicket = document.getElementById('wicket');
let wideBall = document.getElementById('wideBall');
let noBall = document.getElementById('noBall');

let showOver = document.getElementById('showOver');
let stats = document.getElementById('stats');

let resetOver = false;
let totalRun = []
let totalBall = 0
let over = 1
let totalWicket = 0
let prevOverScore = 0
let totalScore;

let team1Score = 0;
let team2Score = 0;

let setInning = 1;

let flag = false;

function totalScorePrint() {
    if (flag === true && setInning === 1) {
        team1Score = totalScore;
        document.getElementById('totalRun').innerHTML += `${teamOneName} Total Score: ${totalScore} <br>`
        flag = false;
    }else if(flag === true && setInning === 2){
        team2Score = totalScore;
        document.getElementById('totalRun').innerHTML += `${teamTwoName} Total Score: ${totalScore}`
        flag = false;
    }
}
function newOver() {
    const ul2 = document.querySelector('#ul2');

    let li = document.createElement('li')
    li.setAttribute('class', 'rules-box');
    li.setAttribute('id', 'addover');
    li.appendChild(document.createTextNode('New Over'))
    ul2.appendChild(li)


    addover.addEventListener('click', function(){
        showOver.innerHTML = ``
        totalBall = 0;

        ul2.removeChild(li)
        resetOver = false
    })
}

function calculation(run) {
    if (!resetOver) {
        showOver.innerHTML += `<span class="run-circle">${run}</span> `

        if (run === 'wide ball' || run === 'no ball') {
            totalRun.push(1);
        }else if (run === 'dot ball') {
            ++totalBall;
        }else if (run === 'wicket') {
            ++totalWicket;
            ++totalBall;
        }else if (typeof run === 'number') {
            totalRun.push(run);
            ++totalBall;
        }
        
        totalScore = totalRun.reduce((acc, run) => acc + run, 0);
        document.getElementById('liveScore').innerHTML = `<p>Current Score: ${totalScore} Runs and ${totalWicket} wickets</p>`;

        if (totalBall === 6) {
            let overByOverScore = totalScore - prevOverScore;
            if (setInning === 1) {
                document.getElementById('scoreHistory').innerHTML += `<p class="over-by-over"> ${teamOneName}, Over ${over}: ${overByOverScore} runs</p>`;
            }else{
                
                document.getElementById('scoreHistory').innerHTML += `<p class="over-by-over"> ${teamTwoName}, Over ${over}: ${overByOverScore} runs</p>`;
            }
            prevOverScore = totalScore;
            resetOver = true
            ++over;
            newOver();
        }

        if (over-1 === matchOvers) {
            flag = true;
            totalScorePrint();
            ++setInning;
            totalRun = []
            totalRun = []
            totalBall = 0
            over = 1
            totalWicket = 0
            prevOverScore = 0
            totalScore = 0;
            document.getElementById('scoreHistory').innerHTML += '';
        }
    }
}

function runs(run) {
    if (setInning === 1) {
        calculation(run);
    } else if (setInning === 2 || wicket === 10) {
        calculation(run);
    }else if (setInning === 3) {
        const result = team1Score - team2Score;
        if (team1Score > team2Score) {
            document.getElementById('result').innerHTML = `<h2>${teamOneName} Won by ${result} runs</h2>`
        } else if(team1Score < team2Score){
            document.getElementById('result').innerHTML = `<h2>${teamTwoName} Won by ${wicket} wicket</h2>`
        }else{
            document.getElementById('result').innerHTML = `<h2>Match Draw</h2>`
        }
        alert('Refresh the page for new game')
    }
}


form.addEventListener('submit', function(e) {
   e.preventDefault()
   matchOvers = parseInt(document.getElementById('matchOvers').value);
   teamOneName = document.getElementById('team1').value;
   teamTwoName = document.getElementById('team2').value;
    
   document.getElementById('information').innerHTML = `
   <h4>Total Overs: ${matchOvers}</h4>
   <p>Match: ${teamOneName} vs ${teamTwoName}</p>
   `
}); 



oneRun.addEventListener('click', function() {
    runs(1);
});

twoRun.addEventListener('click', function() {
    runs(2);
});

threeRun.addEventListener('click', function() {
    runs(3);
});

fourRun.addEventListener('click', function() {
    runs(4);
});

fiveRun.addEventListener('click', function() {
    runs(5);
});

sixRun.addEventListener('click', function() {
    runs(6);
});

dotBall.addEventListener('click', function() {
    runs('dot ball');
});

wicket.addEventListener('click', function() {
    runs('wicket');
});

wideBall.addEventListener('click', function() {
    runs('wide ball');
});

noBall.addEventListener('click', function() {
    runs('no ball');
});

