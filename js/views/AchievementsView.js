import UserController from '../controllers/UserController.js'

export default class AchievementsView {
    constructor() {
        this.userController = new UserController()
        
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
    
        this.Reports = localStorage.Reports ? JSON.parse(localStorage.Reports) : [];
        this.achievements= document.querySelector('#achievements')
        this.renderCatalog()

    }


   renderCatalog() {
    let result = ''
    let loggedUser = sessionStorage.getItem('loggedUser')
    if (this.Reports.length != 0) {
        result = `
        <table id="appstable" class="info"><tr><th>Achievements</th></tr>
        `
    } else {
        result = `<p class="info">Call doctors to get future promotions!</p>`
    }
    let help=1
    for (let i=0; i<this.Reports.length; i++) {
        
        if(loggedUser==this.Reports[i].User){
           
            result += `                
            <td>${help}º appointement &#9989</td>
            </tr>
            `
            help ++

            
        
        }
        

        console.log(help);
        
       
    }

    result += `</table>`
    this.achievements.innerHTML = result
    
    
    }
} 