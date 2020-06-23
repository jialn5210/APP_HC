import UserController from '../controllers/UserController.js'

export default class AchievementsView {
    constructor() {
        this.userController = new UserController()

        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];

        this.Reports = localStorage.Reports ? JSON.parse(localStorage.Reports) : [];
        this.achievements = document.querySelector('#achievements')
        this.medal=document.querySelector('#medal')
        this.medal1=document.querySelector('#medal1')
        this.medal2=document.querySelector('#medal2')
        this.claim=document.querySelector('#claim')
        this.renderCatalog()

    }


    renderCatalog() {
        let result = ''
        let loggedUser = sessionStorage.getItem('loggedUser')
        
        let help = 0
        for (let i = 0; i < this.Reports.length; i++) {

            if (loggedUser == this.Reports[i].User) {
      
                help++
            }            
        }

        if (this.Reports.length != 0) {
            result = `
        <table id="achievTable" class="info "><tr><th class="text-center" colspan="2">Progress</th></tr>
        <td>Completed Appointments</td><td>${help} &#9989</td>
        `
        } else {
            result = `<p class="info">Call doctors to get future promotions!</p>`
        }

        if (help == 1) {
            alert("Congratulations! You unlocked the Bronze Medal!")
        }
        if (help == 5) {
            alert("Congratulations! You unlocked the Silver Medal!")
        }
        if (help == 10) {
            alert("Congratulations! You unlocked the Gold Medal!")
        }
            if(help>=1){              
                
                this.medal.src='../img/bronze.png'
                
                       
        }      
        if (help >= 10 ) {
            
            this.medal1.src='../img/silver.png'
            
        }
       
        if (help >= 10 ) {
            
            this.medal2.src='../img/gold.png'
        }
        result += `</table>`
        this.achievements.innerHTML = result
        this.claim.addEventListener('click', event =>{
            if(help == 10 || help % 10 == 0 && help != 0){
            alert("Free Appointment Claimed With Success!")
        }
            else{
                alert("You Must Complete 10 Appointments Before Claiming!")
            }
        })
        
    }
    
} 