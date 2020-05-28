import UserController from '../controllers/UserController.js'



export default class UserView {
    constructor() {
        this.userController = new UserController();
        
        // register DOM
        this.registerForm = document.getElementById('frmRegister');
        this.registerUsername = document.getElementById('txtUsernameRegister');
        this.registerPassword = document.getElementById('txtPasswordRegister');
        this.registerPassword2 = document.getElementById('txtPasswordRegister2');
        this.registerMessage = document.getElementById('mdlRegisterMessage');

        this.bindAddRegisterForm();

        // login DOM

        this.loginForm = document.getElementById('frmLogin');
        this.loginUsername = document.getElementById('txtUsername');
        this.loginPassword = document.getElementById('txtPassword');
        this.loginMessage = document.getElementById('mdlLoginMessage');
        

        this.bindAddLoginForm();

        // buttons DOM
        this.loginButton = document.getElementById('btnLogin');
        this.registerButton = document.getElementById('btnRegister');
        this.logoutButton = document.getElementById('btnLogout');

        this.bindAddLogoutEvent();

        this.checkLoginStatus();

        
        
        
// buttons Social painel
        this.floating_btn = document.querySelector('.floating-btn');
        this.close_btn = document.querySelector('.close-btn');
        this.social_panel_container = document.querySelector('.social-panel-container');
         
        this.bindAddFloating_btn();
        this.bindAddClose_btn();

    //counter
        this.Counter=document.querySelector('.counter');
        this.Counters();
    }

    
    bindAddFloating_btn(){
        this.floating_btn.addEventListener('click', () => {
            this.social_panel_container.classList.toggle('visible')
        });
    }
    bindAddClose_btn(){
        this.close_btn.addEventListener('click',() => {
            this.social_panel_container.classList.remove('visible')
        
        });
    }
    Counters(){
        this.Counter.counterUp({delay:10,time:1000});
    }
    
  
   
       
        
    

bindAddRegisterForm() {
    this.registerForm.addEventListener('submit', event => {
        event.preventDefault();

        try {
            if (this.registerPassword.value !== this.registerPassword2.value) {
                throw Error('Password and Confirm Password are not equal');
            }
            this.userController.createUser(this.registerUsername.value, this.registerPassword.value);
            this.displayRegisterMessage('User registered with success!', 'success');
        } catch (e) {
            this.displayRegisterMessage(e, 'danger');
        }
    });
}

bindAddLoginForm() {
    this.loginForm.addEventListener('submit', event => {
        event.preventDefault();

        try {
            this.userController.loginUser(this.loginUsername.value, this.loginPassword.value);
            this.displayLoginMessage('User logged in with success!', 'success');

            // Wait 1 second before reloading, so the user can see the login success message
            setTimeout(() => {
                this.updateButtons('login');
                location.replace('html/hc.html')

              

            },
                1000);

        } catch (e) {
            this.displayLoginMessage(e, 'danger');
        }
    });
}

bindAddLogoutEvent() {
    this.logoutButton.addEventListener('click', event => {
        this.userController.logoutUser();
        this.updateButtons('logout');
        location.reload()
    });
}

checkLoginStatus() {
    if (this.userController.checkLoginStatus()) {
        this.updateButtons('login');
    } else {
        this.updateButtons('logout');
    }
}

displayRegisterMessage(message, type) {
    this.registerMessage.innerHTML =
        `<div class="alert alert-${type}" role="alert">${message}</div>`;
}

displayLoginMessage(message, type) {
    this.loginMessage.innerHTML =
        `<div class="alert alert-${type}" role="alert">${message}</div>`;
}

updateButtons(event) {
    switch (event) {
        case 'login':
            this.loginButton.style.visibility = 'hidden'

            this.logoutButton.style.visibility = 'visible'
            break;
        case 'logout':
            this.loginButton.style.visibility = 'visible'

            this.logoutButton.style.visibility = 'hidden'
    }
}
 
    
}

//background animation
const particles = [];
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
}


particles.forEach((particle, idx) => {
    particle.update();
    particle.draw();
    particle.checkParticles(particles.slice(idx));
});


class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.size = 5;
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    draw() {
        background(120, 231, 194);
        noStroke();
        fill('rgba(255, 255, 255, 0.5)');
        circle(this.pos.x, this.pos.y, this.size * 2);
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }


    }

    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < 120) {
                const alpha = map(d, 0, 120, 0, 0.25)
                stroke(`rgba(0, 0, 0, ${alpha})`);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        });
    }
}

<<<<<<< HEAD


=======
//narvbar mais escuro
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('header').addClass('black');

    }
    else{
        $('header').removeClass('black');
    }
})
new WOW().init();

//carrossel
$(document).ready(function(){
    $('.carousel').carousel();
    });
   
   
    var swiper = new Swiper('.swiper-container', {
       effect: 'coverflow',
       grabCursor: true,
       centeredSlides: true,
       slidesPerView: 'auto',
       coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows : true,
       },
     });
>>>>>>> 45d1bdc24d4807f663c24aebe6168edc559df0e9
