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

          this.fillDoctorInfo() ; 
         this.bindEditDoctor();

    }
      fillDoctorInfo() {
        const currentDoc = this.doctorController.getCurrentDoctor()
        this.docName.value = currentDoc.name
        this.docEmail.value = currentDoc.email
        this.docLatitude.value = currentDoc.latitude
        this.docLongitude.value = currentDoc.longitude
        this.docSpecialty.value = currentDoc.specialty
        this.docPhoto.value = currentDoc.photo
        this.docDescription.value = currentDoc.description

    }   

     bindEditDoctor() {

        this.editBtn.addEventListener("click", event => {
            event.preventDefault();
            try {
               
                    if (this.docName.value != "" && this.docEmail.value != "" && this.docLatitude.value != "" && this.docLongitude.value != "" && this.docSpecialty.value != "" && this.docPhoto.value != "" && this.docDescription.value != "")
                     {
                        
                            this.doctorController.editDoctor(this.docName.value, this.docEmail.value, this.docLatitude.value, this.docLongitude.value, this.docSpecialty.value, this.docPhoto.value, this.docDescription.value)
                            this.displayEditMessage( 'success')
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

    displayEditMessage(type) {
        this.editMessage.innerHTML =
          `<div class="alert alert-${type} d-flex justify-content-center"</div>`;
      }
 
}