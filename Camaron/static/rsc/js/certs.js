function update(p) {
    x=document.getElementById(p);
    y=document.getElementById(p).getAttribute('src');
    x.src = y;
}

function closeDoc(p) {
    x=document.getElementById(p);
    x.style.display = "none";
}