import UserController from '../controllers/UserController.js'

export default class ProfileView {
    constructor() {
        this.userController = new UserController();

        //DOM references
        this.userName = document.getElementById('txtName');
        this.userEmail = document.getElementById('txtEmail');
        this.userAge = document.getElementById('txtAge');
        this.userAdress = document.getElementById('txtAdress');
        this.userPhoto = document.getElementById('txtPhoto');

    }
}















