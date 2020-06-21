import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class AdminUserView {
    constructor() {
        this.userController = new UserController()
        this.userModel= new UserModel()
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
        this.userCatalog = document.querySelector('#userCatalog')
      
        this.renderCatalog1(this.userModel.getAll())
        this.bindRemoveEvent()
        this.bindBlockEvent()
    }


    bindBlockEvent() {
        for (const btnBlock of document.getElementsByClassName('block')) {
            
            btnBlock.addEventListener('click', event => {
                let decide = confirm('Are you sure you want to block?');

                for (let i = 0; i < this.users.length; i++) {
                    const myUser=this.users[i].username;
                    if(myUser==event.target.id){
                        console.log(myUser);
                        const status=this.users[i].status;
                        console.log(status);
                       
                        
    
                        if(decide==true){
                            this.userController.blockUser(event.target.id)
                            this.renderCatalog1(this.userModel.getAll())
                        }else{
                        console.log('ok')
                        }
                    }
                    
                    
                }
               
                
                /* if(decide==true){
                    this.status==='false'
                    
                    console.log(this.status);
                    
                   document.querySelector('td').style.backgroundColor="red"
                }else{
                console.log('ok')
                } */
                
            })
        }
    }

    bindRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName('remove')) {
            
            btnRemove.addEventListener('click', event => {
                let decide = confirm('Are you sure you want to delete?');
                if(decide==true){
                    this.userController.removeUser(event.target.id)
                    this.renderCatalog1(this.userModel.getAll())
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
        this.bindBlockEvent()
    }






}