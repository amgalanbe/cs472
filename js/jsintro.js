function sum(arr) {
    return arr
        .filter(i=>i>20)
        .reduce((s,i)=>s+i);
}

function getNewArray(arr){
    return arr
        .filter( s => s.length >= 5 && s.includes('a'));
}

function ExecuteSum(arr){
    document.getElementById("sumParameter").innerHTML = arr.map(i=>i > 20 ? `<strong>${i}</strong>` : i);
    document.getElementById("sumResult").innerText = sum(arr);
}

function ExecuteGetNewArray(arr) {
    document.getElementById("getNewArrayParameter").innerHTML = arr.map(i=>i.length >= 5 && i.includes('a') ? `<strong>${i}</strong>` : i);
    document.getElementById("getNewArrayResult").innerText = getNewArray(arr);
}

function main() {
    document.getElementById('sumButton').addEventListener('click', (event) => {
        const arr = document.getElementById('sumInput').value.replace(' ', '').split(',');
        ExecuteSum(arr);
    });

    document.getElementById('getNewArrayButton').addEventListener('click', (event) => {
        const arr = document.getElementById('getNewArrayInput').value.replace(' ', '').split(',');
        ExecuteGetNewArray(arr);
    });

    let arr = [20,22,13,24,15];
    ExecuteSum(arr);

    let strArr = ['banana','strawberry','melon', 'kiwi', 'apple', 'coconut', 'orange', 'grape', 'blueberry'];
    ExecuteGetNewArray(strArr);
}

main();






