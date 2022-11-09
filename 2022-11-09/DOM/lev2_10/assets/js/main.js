let wrapper = document.getElementById('element');
let txt = document.getElementById('txt');
const list = wrapper.classList;
const list2 = wrapper.classList;
const list3 = wrapper.classList;


function small(){
    list.add("small-style");
    list.remove("middle-style")
    list.remove("big-style")
}
function middle(){
    list2.add("middle-style");
    list.remove("small-style");
    list.remove("big-style")
}
function big(){
    list3.add("big-style");
    list.remove("small-style");
    list.remove("middle-style")
}