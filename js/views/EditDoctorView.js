import DoctorController from '../controllers/DoctorController.js'

export default class EditDoctorView {
    constructor() {
        this.doctorController = new DoctorController();


        // DOM References
        this.docName = document.getElementById('txtName');
        this.docEmail = document.getElementById('txtEmail');
        this.docLatitude = document.getElementById('txtLatitude');
        this.docLongitude = document.getElementById('txtLongitude');
        this.docSpecialty = document.getElementById('sltSpecialty');
        this.docPhoto = document.getElementById('txtPhoto');
        this.docDescription = document.getElementById('txtDescription');
        this.editBtn = document.querySelector("#btnEdit")
        this.editMessage = document.querySelector("#editDoctorMessage")

         /* this.fillDoctorInfo() ; */
         this.bindEditDoctor();

    }
      fillDoctorInfo() {
        const currentDoc = this.doctorController.getCurrentDoctor()
        this.docName.innerHTML = currentDoc.name
        this.docEmail.innerHTML = currentDoc.email
        this.docLatitude.innerHTML = currentDoc.latitude
        this.docLongitude.innerHTML = currentDoc.longitude
        this.docSpecialty.innerHTML = currentDoc.specialty
        this.docPhoto.src = currentDoc.photo
        this.docDescription.innerHTML = currentDoc.description

        
        
    }   

     bindEditDoctor() {

        this.editBtn.addEventListener("click", event => {
            event.preventDefault();
            try {
               
                    if (this.docName.value != "" && this.docEmail.value != "" && this.docLatitude.value != "" && this.docLongitude.value != "" && this.docSpecialty.value != "" && this.docPhoto.value != "" && this.docDescription.value != "")
                     {
                        
                            this.doctorController.editDoctor(this.docName.value, this.docEmail.value, this.docLatitude.value, this.docLongitude.value, this.docSpecialty.value, this.docPhoto.value, this.docDescription.value)
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