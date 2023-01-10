
function changeName() {
    const name = prompt('Tu nombre');
    document.getElementById("changeNames").innerHTML = name;
    document.getElementsByClassName("tenor-gif-embed")[0].style.opacity = '1';
}