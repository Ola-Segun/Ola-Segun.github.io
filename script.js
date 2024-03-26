const sections = document.querySelectorAll('section');
const body = document.querySelector('body');
const navLi = document.querySelectorAll('body nav .navCon ul li')
const dot = document.querySelectorAll('li.dot')


window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight; 

        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
            // console.log(current);

        }
    })
    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
    dot.forEach( item => {
        item.classList.remove('activeDot');
        if(item.classList.contains(current)){
            item.classList.add('activeDot');
        }
    })
})


const menuToggle = document.querySelector('.menuToggle');
const nav = document.querySelector('nav');

menuToggle.onclick = function(){
    nav.classList.toggle('open')
}

// MODAL DISPLAY

const login_show = document.getElementById('login-show');
const login_modal = document.getElementById('login-modal');
const close_modal = document.getElementById('close-modal');

login_show.onclick = function(){
    login_modal.classList.remove('hidden')
}
close_modal.onclick = function(){
    login_modal.classList.add('hidden')
}


// window.addEventListener('load', function() {
//     var bodyWidth = document.body.clientWidth;
//     var navHeight = 0;
//     if (bodyWidth < 650) {
//         body.classList.add('mobile');
//         body.classList.remove('desktop')
//         }
//     }
// );
