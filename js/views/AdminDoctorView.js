import DoctorController from '../controllers/DoctorController.js'

export default class AdminDoctorView {
    constructor() {
        this.doctorController = new DoctorController()

        this.btnAdd = document.querySelector('#btnAdd')
       
        this.doctorCatalog = document.querySelector('#doctorCatalog')
        
   
        this.renderCatalog(this.doctorController.getDoctors())

        this.bindRemoveEvent()
    }



    bindRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName('remove')) {
            
            btnRemove.addEventListener('click', event => {
                this.doctorController.removeDoctor(event.target.id)
                this.renderCatalog(this.doctorController.getDoctors())
            })
        }
    }

  

    renderCatalog(doctors = []) {
        let result = ''
        if (doctors.length != 0) {
            result = `
            <table><tr><th>Name</th><th>E-mail</th><th>Specialty</th><th></th></tr>
            `
        } else {
            result = `<p>Without any doctors registered!</p>`
        }

        for (const doctor of doctors) {
            
            result += `                
            <td>${doctor.name}</td>
            <td>${doctor.email}</td>
            <td>${doctor.specialty}</td>
            <td><button id='${doctor.name}' class='remove'>REMOVE</button></td>
            </tr>
            `
        }
        result += `</table>`
        this.doctorCatalog.innerHTML = result
        this.bindRemoveEvent()
    }

    
}