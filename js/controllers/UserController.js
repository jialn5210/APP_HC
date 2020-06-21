import UserModel from '../models/UserModel.js'

export default class UserController {
    constructor() {
        this.userModel = new UserModel();
    }

    createUser(username, password, photo, type , age, adress, email,status) {
        if (!this.userModel.getAll().some(user => user.username === username)) {
            this.userModel.create(username, password, photo, type, age, adress, email, status);
        } else {
            throw Error(`User with username "${username}" already exists!`);
        }
    }

    loginUser(username, password) {
        if (this.userModel.getAll().some(user => { return user.username === username && user.password === password })) {
            this.userModel.login(username);
            this.userCompare = JSON.parse(localStorage.getItem('users'))
            for (let i = 0; i <= [this.userModel.users.length - 1]; i++) {
                if (this.userCompare[i].username === sessionStorage.getItem('loggedUser')) {
                    sessionStorage.setItem('userPhoto', this.userPhotoLink = JSON.parse(localStorage.getItem('users'))[i].photo);
                    sessionStorage.setItem('userType', this.userType = JSON.parse(localStorage.getItem('users'))[i].type)
                    sessionStorage.setItem('userStatus', this.userStatus = JSON.parse(localStorage.getItem('users'))[i].status)
                    localStorage.setItem('user',this.user=JSON.parse(localStorage.getItem('users'))[i].id)
                }
            }
            return true;
        } else {
            throw Error('Invalid login!');
        }    
    }

    setCurrentUser(id) {
        this.userModel.setCurrentUser(id)
    }
    getCurrentUser() {
        return this.userModel.getCurrentUser()
    } 
    /* getUserId(id){
        for (const user of this.userModel.users) {
           if(user.id==id){
               return user;
           }
            
        }
    } */

    logoutUser() {
        this.userModel.logout();
    }

    checkLoginStatus() {
        return this.userModel.isLogged();
    }

    removeUser(username) {
        this.userModel.remove(username)
    }

    blockUser(username) {
        this.userModel.block(username)
    }

    editProfile(username, password, photo, type , age, adress, email,status) {
        this.userModel.editProfile(username, password, photo, type , age, adress, email,status)
        
    }
}
