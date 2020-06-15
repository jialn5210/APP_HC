import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class AdminUserView {
    constructor() {
        this.userController = new UserController()
        this.userModel= new UserModel()

        this.userCatalog = document.querySelector('#userCatalog')
        
   
        this.renderCatalog1(this.userModel.getAll())
        this.bindRemoveEvent()
    }

    bindRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName('remove')) {
            
            btnRemove.addEventListener('click', event => {
                this.userController.removeUser(event.target.id)
                this.renderCatalog1(this.userModel.getAll())
            })
        }
    }

    renderCatalog1(users = []) {
        let result = ''
        if (users.length != 0) {
            result = `
            <table class="info"><tr><th>Username</th><th></th><th></th></tr>
            `
        } else {
            result = `<p class="info">Without any users registered!</p>`
        }

        for (const user of users) {
            
            result += `                
            <td>${user.username}</td>
            <td><button id='${user.username}' class='btn btn-outline-primary m-2 remove'>REMOVE</button></td>
            <td><button id='${user.username}' class='btn btn-outline-primary m-2 block'>BLOCK</button></td>
            </tr>
            `
        }
        result += `</table>`
        this.userCatalog.innerHTML = result
        this.bindRemoveEvent()
    }






}