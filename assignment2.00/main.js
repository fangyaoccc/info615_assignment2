function performMath(math) {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;

    var result;
    if (math === 'add') {
        result = parseInt(x) + parseInt(y);
    } else if (math === 'multiply') {
        result = parseInt(x) * parseInt(y);
    }

    document.getElementById('result').textContent = result;
}