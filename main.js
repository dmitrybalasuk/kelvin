const nav = document.querySelector('#nav');
const navBth = document.querySelector('#nav-bth');
const navBthImg = document.querySelector('#nav-bth-img');

navBth.onclick = () => {
    if(nav.classList.toggle('open')){
        navBtnImg.src = "./img12/NAV-CLOSE.svg";
    } else {
        navBtnImg.src = "./img12/NAV.svg";
    }
}

AOS.init({
    once:true
});