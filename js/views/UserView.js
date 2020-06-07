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




        // buttons Social painel
        this.floating_btn = document.querySelector('.floating-btn');
        this.close_btn = document.querySelector('.close-btn');
        this.social_panel_container = document.querySelector('.social-panel-container');

        this.bindAddFloating_btn();
        this.bindAddClose_btn();

        //counter
        this.Counter = document.querySelector('.counter');
        this.Counters();
    }


    bindAddFloating_btn() {
        this.floating_btn.addEventListener('click', () => {
            this.social_panel_container.classList.toggle('visible')
        });
    }
    bindAddClose_btn() {
        this.close_btn.addEventListener('click', () => {
            this.social_panel_container.classList.remove('visible')

        });
    }
    Counters() {
        this.Counter.counterUp({ delay: 10, time: 1000 });
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
                    
                    location.replace('html/hc.html')
                    document.getElementById('user').innerHTML = this.loginUsername.value;
                    

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
            
            location.replace('index.html')
        });
    }

 

    displayRegisterMessage(message, type) {
        this.registerMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

    displayLoginMessage(message, type) {
        this.loginMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

   


}

