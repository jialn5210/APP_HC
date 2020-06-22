import UserController from '../controllers/UserController.js'

export default class AppsView {
    constructor() {
        this.userController = new UserController()
        
        
    
        this.Reports = localStorage.Reports ? JSON.parse(localStorage.Reports) : [];
        this.appCatalog = document.querySelector('#appCatalog')
        this.renderCatalog()

    }


    renderCatalog() {
    let result = ''
    let loggedUser = sessionStorage.getItem('loggedUser')
    if (this.Reports.length != 0) {
        result = `
        <table id="appstable" class="info"><tr><th>Doctor's name</th><th>Diagnosis</th><th>Prescription</th><th>Rating</th></tr>
        `
    } else {
        result = `<p class="info">Without any appointments registered!</p>`
    }

    for (let i=0; i<this.Reports.length; i++) {
        if(loggedUser==this.Reports[i].User){
            result += `                
            <td>${this.Reports[i].Doctor}</td>
            <td>${this.Reports[i].Diagnosis}</td>
            <td>${this.Reports[i].Prescription}</td>
            <td>${this.Reports[i].Rating} &#9733</td>
            </tr>
            `
        }
       
    }
    result += `</table>`
    this.appCatalog.innerHTML = result
    
    
    }
}