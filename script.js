let topbg = document.querySelector('.top-bg');
let bottombg = document.querySelector('.bottom-bg');

window.addEventListener('load' , () => resize(topbg,bottombg))
window.addEventListener('resize' , () => resize(topbg,bottombg))

function resize(t,b){
    window.innerWidth < 850 ? mobile(t,b) : Desktop(t,b);
}

function mobile(t,b){
    t.src = "images/bg-pattern-top-mobile.svg"
    b.src = "images/bg-pattern-bottom-mobile.svg"
}
function Desktop(t,b){
    t.src = "images/bg-pattern-top-desktop.svg"
    b.src = "images/bg-pattern-bottom-desktop.svg"
}