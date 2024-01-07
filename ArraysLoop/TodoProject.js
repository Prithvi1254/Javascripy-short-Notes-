let list = [];
function call() {
    list.push(document.querySelector('.inp').value);
    console.log(list);
    document.querySelector('.inp').value = '';
}