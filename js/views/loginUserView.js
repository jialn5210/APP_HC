import UserController from '../controllers/UserController.js'





export default class UserView {
    constructor() {
        this.userController = new UserController();


        this.loginUser = sessionStorage.getItem('loggedUser')
        this.logoutButton = document.getElementById('btnLogout');
        
        this.getUserPhoto=document.getElementById('UserPhoto')
     

        // buttons Social painel
        this.floating_btn = document.querySelector('.floating-btn');
        this.close_btn = document.querySelector('.close-btn');
        this.social_panel_container = document.querySelector('.social-panel-container');

        this.LoginUser();
        this.bindAddLogoutEvent();
        this.bindAddFloating_btn();
        this.bindAddClose_btn();
        
        
    }

         

LoginUser(){
    this.getUserPhoto.setAttribute("src",sessionStorage.getItem("userPhoto"))
    document.getElementById('user').innerHTML = ("Welcome,   " + this.loginUser);
    
    /* sessionStorage.setItem("userid",event.target.id) */
}



bindAddLogoutEvent() {
    this.logoutButton.addEventListener('click', event => {
        this.userController.logoutUser();
        
        location.replace('../index.html')
    });
}


//redes sociais
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