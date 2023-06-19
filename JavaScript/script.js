/*----------------------------------------PARTEDO CRUD---------------------------------*/

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

/*----------------------------------------PARTEDO DA HOME---------------------------------*/

// const el = document.querySelector(".titulo");
// const text = "Bem Vindo ao Portal Astronomia!";
// const interval = 200;

// function showText(el, text, interval){
//     const char = text.split("").reverse();
//     const typer = setInterval(() => {
//         if(!char.length){
//             return clearInterval(typer);
//         }
//         const next = char.pop();

//         el.innerHTML += next;

//     }, interval);
// }

// showText(el,text,interval);