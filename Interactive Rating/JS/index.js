var value;

function GetValue(id){
    value = document.getElementById(id).textContent;
    sessionStorage.setItem('key', value);
}

console.log(value);

value = sessionStorage.getItem('key');
document.getElementById('test').innerHTML = value;
