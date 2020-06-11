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
                    
                    

                },
                    1000);

            } catch (e) {
                this.displayLoginMessage(e, 'danger');
            }
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

