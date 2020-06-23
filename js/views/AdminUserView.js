import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class AdminUserView {
    constructor() {
        this.userController = new UserController()
        this.userModel= new UserModel()
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
        this.userCatalog = document.querySelector('#userCatalog')
      
        this.renderCatalog1(this.userModel.getAll())
        
    }


    bindBlockEvent() {
        for (const btnBlock of document.getElementsByClassName('block')) {
            
            btnBlock.addEventListener('click', event => {
                
                this.userController.setCurrentUser(event.target.id)
                const currentUser = this.userController.getCurrentUser()
                if(currentUser.status=="false"){

                    alert("Already Blocked!")
                }else{
                if (confirm("Are you Sure you want to block?")) {
                this.userController.editProfile(currentUser.username,currentUser.password,currentUser.photo,currentUser.type,currentUser.age,currentUser.adress,currentUser.email,"false")
                alert("User Blocked with Success!")
                }
                }
            })
        }
    }

    bindUnlockEvent() {
        for (const btnUnlock of document.getElementsByClassName('unlock')) {
            
            btnUnlock.addEventListener('click', event => {
                
                
                this.userController.setCurrentUser(event.target.id)
                const currentUser = this.userController.getCurrentUser()
                if(currentUser.status=="true"){

                    alert("Already Unblocked!")
                }else{
                if (confirm("Are you Sure you want to unblock?")) {
                this.userController.editProfile(currentUser.username,currentUser.password,currentUser.photo,currentUser.type,currentUser.age,currentUser.adress,currentUser.email,"true")
                alert("User Unlocked with Success!")
                }
            }
            })
        }
    }

    bindRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName('remove')) {
            
            btnRemove.addEventListener('click', event => {
                let decide = confirm('Are you sure you want to delete?');
                if(decide==true){
                    this.userController.removeUser(event.target.id)
                    location.href="adminUsers.html"
                }else{
                console.log('ok')
                }
                
            })
        }
    }

    renderCatalog1(users = []) {
        let result = ''
        if (users.length != 0) {
            result = `
            <table class="info text-center"><tr><th>Username</th><th></th><th></th><th></th></tr>
            `
        } else {
            result = `<p class="info">Without any users registered!</p>`
        }

        for (const user of users) {
            
            result += `                
            <td>${user.username}</td>
            <td><button id='${user.username}' class='btn btn-outline-primary m-2 remove'>REMOVE</button></td>
            <td><button id='${user.id}' class='btn btn-outline-primary m-2 block'>BLOCK</button></td>
            <td><button id='${user.id}' class='btn btn-outline-primary m-2 unlock' >UNBLOCK</button></td>
            </tr>
            `
        }
        result += `</table>`
        this.userCatalog.innerHTML = result
        
        this.bindRemoveEvent()
        this.bindBlockEvent()
        this.bindUnlockEvent()
    }

}