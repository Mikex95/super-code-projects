const inputValue = document.getElementById('text-input');

function changeMe(event) {
    let input = inputValue.value
    console.log(input);
    if (input == 'green') {
        document.body.style.backgroundColor = 'green';
    } else if (input == 'red') {
        document.body.style.backgroundColor = 'red';
    } else if (input == 'yellow') {
        document.body.style.backgroundColor = 'yellow';
    }else if (input == '#') {
        document.body.style.backgroundColor = '#ccc';
    }
    else {
        document.body.style.backgroundColor = 'white';
    }
    event.preventDefault();
}