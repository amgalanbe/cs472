function printNumbers (from, to) {
    let timerID = setInterval(()=>{
        if(from > to) {
            clearInterval(timerID);
            setResult("finished");
        }
        else setResult(from++);
    }, 1000);
}

function setResult(msg){
    let result = document.getElementById('fromToResult').innerHTML;
    result += msg + ", ";
    document.getElementById('fromToResult').innerHTML = result;
}

function ExecuteFromTo(from, to) {
    document.getElementById('fromToParameter').innerHTML = "from: " + from + ", to: " + to;
    document.getElementById('fromToResult').innerHTML = "";
    printNumbers(from, to);
}

function main() {
    document.getElementById('fromToButton').addEventListener('click', (event) => {
        const from = document.getElementById('fromInput').value;
        const to = document.getElementById('toInput').value;
        ExecuteFromTo(from, to);
    });
    let from = 1;
    let to = 3;

    ExecuteFromTo(1, 3);
}

window.onload = main;