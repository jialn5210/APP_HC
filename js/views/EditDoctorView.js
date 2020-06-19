import DoctorController from '../controllers/DoctorController.js'

export default class EditDoctorView {
    constructor() {
        this.doctorController = new DoctorController();


        // DOM References
        this.doctorName = document.getElementById('txtName');
        this.doctorEmail = document.getElementById('txtEmail');
        this.doctorLatitude = document.getElementById('txtLatitude');
        this.doctorLongitude = document.getElementById('txtLongitude');
        this.doctorSpecialty = document.getElementById('sltSpecialty');
        this.doctorPhoto = document.getElementById('txtPhoto');
        this.doctorDescription = document.getElementById('txtDescription');
        this.editBtn = document.querySelector("#btnEdit")
        this.editMessage = document.querySelector("#editDoctorMessage")

         this.fillDoctorInfo() ;
       

    }
     fillDoctorInfo() {
        const currentDoctor = this.doctorController.getCurrentDoctor()
        this.doctorName.innerHTML = currentDoctor.name
        this.doctorEmail.innerHTML = currentDoctor.email
        this.doctorLatitude.innerHTML = currentDoctor.latitude
        this.doctorLongitude.innerHTML = currentDoctor.longitude
        this.doctorSpecialty.innerHTML = currentDoctor.specialty
        this.doctorPhoto.src = currentDoctor.photo
        this.doctorDescription.innerHTML = currentDoctor.description

        this.bindEditDoctor();
        
    }  

     bindEditDoctor() {

        this.editBtn.addEventListener("click", event => {
            try {
               
                    if (this.doctorName.value != "" && this.doctorEmail.value != "" && this.doctorLatitude.value != "" && this.doctorLongitude.value != "" && this.doctorSpecialty.value != "" && this.doctorPhoto.value != "" && this.doctorDescription.value != "")
                     {
                        
                            this.doctorController.EditDoctor(this.doctorName.value, this.doctorEmail.value, this.doctorLatitude.value, this.doctorLongitude.value, this.doctorSpecialty.value, this.doctorPhoto.value, this.doctorDescription.value,this.doctorController)
                            this.displayEditMessage("Doctor edited with success", 'success')
                            setTimeout(() => {
                                location.href = "admin.html";
                            },
                                1000)
                        
                    }
                    else {
                        throw Error("There are empty fields")
                    }
                }
            
            catch (e) {
                this.displayEditMessage(e, "danger")
            }
        
        
        })
    }

    displayEditMessage(message, type) {
        this.editMessage.innerHTML =
          `<div class="alert alert-${type} d-flex justify-content-center" role="alert">${message}</div>`;
      }
 
}