let output = document.getElementById('option-selected');
let selected = document.getElementById('my-select');

selected.addEventListener('change', function(e){
    e.target.value;
    output.innerHTML =`Sie haben ausgewählt ${e.target.value}`;
})