

function openNav(){
    let bar=document.getElementById('bar');
    let cross=document.getElementById('cross');
    let nav=document.getElementById("sidenav");
    nav.style.display="flex";
    bar.style.display="none";
    cross.style.display="block";
}
function closenav(){
    let bar=document.getElementById('bar');
    let cross=document.getElementById('cross');
    let nav=document.getElementById("sidenav");
    cross.style.display="none";
    bar.style.display="block";
    nav.style.display="none";
}