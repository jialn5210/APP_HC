import UserController from '../controllers/UserController.js'




export default class UserView {
    constructor() {
        this.userController = new UserController();
        
        this.loginUser = localStorage.getItem('loggedUser')
        this.logoutButton = document.getElementById('btnLogout');
        this.loginUsername();
        this.bindAddLogoutEvent();

        
        // buttons Social painel
        this.floating_btn = document.querySelector('.floating-btn');
        this.close_btn = document.querySelector('.close-btn');
        this.social_panel_container = document.querySelector('.social-panel-container');

        this.bindAddFloating_btn();
        this.bindAddClose_btn();
    }

loginUsername(){
    document.getElementById('user').innerHTML = this.loginUser;
}

bindAddLogoutEvent() {
    this.logoutButton.addEventListener('click', event => {
        this.userController.logoutUser();
        
        location.replace('Site_HC/index.html')
    });
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

}