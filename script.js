let cross=document.getElementById('cross');
let bar=document.getElementById('bar');
let nav=document.getElementById("sidenav");

function openNav(){
    nav.style.display="flex";
    bar.style.display="none";
    cross.style.display="block";
}
function closenav(){
    cross.style.display="none";
    bar.style.display="block";
    nav.style.display="none";
}

// active Nav link 
let section = document.querySelectorAll('.section');
let lists = document.querySelectorAll('.list');
function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
lists.forEach((item) =>
    item.addEventListener('click', function(){
        activeLink(this);
        cross.style.display="none";
        bar.style.display="block";
        nav.style.display="none";
    }));
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`).children[0];

            activeLink(target);
        }
    })
};
