let output = document.getElementById('output');
let key = document.getElementById('key');
let keyNumber = document.getElementById('key-number');
let keyCode = document.getElementById('key-code');

document.body.addEventListener('keydown', function(e){
    key.innerHTML = e.key;
    keyCode.innerHTML = e.code;
    keyNumber.innerHTML = e.which;
    output.innerHTML = e.which
})