import UserController from '../controllers/UserController.js'




export default class UserView {
    constructor() {
        this.userController = new UserController();
        
        this.loginUser = sessionStorage.getItem('loggedUser')
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

//comentários
/* render(data){
    var comment ="<div class='commentBox'><div class='panel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p>";
    $('#container').append(comment);
}

$(document).ready(function(){

}); */

}