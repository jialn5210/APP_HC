export default class UserModel {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
    }

    getAll() {
        return this.users
    }

    create(username, password, photo, type, age, adress, email, status) {
        const user = {
            id: this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1,
            username: username,
            password: password,
            photo: photo,
            type:type,
            age:age,
            adress:adress,
            email:email,
            status:status,
        }
        this.users.push(user);
        this._persist();
    }

    remove(username) {
        this.users = this.users.filter(user => user.username != username)
        this._persist()
    }
    block(username){
        this.users = this.users.filter(user => user.username != username)
    }

    login(username) {
        sessionStorage.setItem('loggedUser', username);
        
    }

    logout() {
        sessionStorage.removeItem('loggedUser');
        sessionStorage.removeItem("userPhoto");
    }

    isLogged() {
        return sessionStorage.getItem('loggedUser') !== null ? true : false;
    }

   /*  setCurrentUser(id) {
        localStorage.setItem("user", id); 
    } */

    getCurrentUser() {
        return this.users.find(user => user.id === +localStorage.user)
    } 

    _persist() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    editProfile(username, password, photo, type , age, adress, email,status){
        const currentUser = this.getCurrentUser()

        const UserNew = {
            id: currentUser.id,
            username: username,
            password: password,
            photo: photo,
            type:type,
            age:age,
            adress:adress,
            email:email,
            status:status,
            
        }
        
        this.users= this.users.map(user=>user.id==currentUser.id?UserNew:user)
        this._persist()
    }
}
