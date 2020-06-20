import DoctorController from '../controllers/DoctorController.js'

export default class AdminDoctorView {
    constructor() {
        this.doctorController = new DoctorController()
       
        this.doctorCatalog = document.querySelector('#doctorCatalog')
        this.doctorEditModal = document.querySelector("#DoctorEditmodal")
   
        this.renderCatalog(this.doctorController.getDoctors())
        
    }

    bindRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName('remove')) {
            
            btnRemove.addEventListener('click', event => {
              let decide = confirm('Are you sure you want to delete?');
              if(decide==true){
                this.doctorController.removeDoctor(event.target.id)
                this.renderCatalog(this.doctorController.getDoctors())
              }else{
              console.log('ok')
              }
                
            })
        }
    }

    bindEditEvent(){
        for (const btnEdit of document.getElementsByClassName('edit')) {
            
            btnEdit.addEventListener('click', event => {
                this.doctorController.setCurrentDoctor(event.target.id)
                
                location.href="editDoctor.html"
            })
        }

    }
  

    renderCatalog(doctors = []) {
        let result = ''
        if (doctors.length != 0) {
            result = `
            <table class="info"><tr><th>Name</th><th>E-mail</th><th>Specialty</th><th></th><th></th></tr>
            `
        } else {
            result = `<p class="info">Without any doctors registered!</p>`
        }

        for (const doctor of doctors) {
            
            result += `                
            <td>${doctor.name}</td>
            <td>${doctor.email}</td>
            <td>${doctor.specialty}</td>
            <td><button id='${doctor.name}' class='btn btn-outline-primary m-2 remove'>REMOVE</button></td>
            <td><button id='${doctor.id}' class='btn btn-outline-primary m-2 edit'>EDIT</button></td>
            </tr>
            `
        }
        result += `</table>`
        this.doctorCatalog.innerHTML = result
        this.bindRemoveEvent()
        this.bindEditEvent()
    }

    
}