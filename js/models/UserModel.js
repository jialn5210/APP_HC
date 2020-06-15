export default class UserModel {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
    }

    getAll() {
        return this.users
    }

    create(username, password, photo) {
        const user = {
            id: this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1,
            username: username,
            password: password,
            photo: photo
        }
        this.users.push(user);
        this._persist();
    }

    remove(username) {
        this.users = this.users.filter(user => user.username != username)
        this._persist()
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

    _persist() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}
