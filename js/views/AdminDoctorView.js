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
                const currentDoc = this.doctorController.getCurrentDoctor()
                /* location.href="editDoctor.html"  */

                this.doctorEditModal.innerHTML=` <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
          
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
          
                  </div>
                  <div class="modal-body">
                    <div id="frm">
                      <div class="form-group d-flex justify-content-center">
                        <h5 class="modal-title d-flex justify-content-center " id="exampleModalLabel">Edit Doctor</h5>
                      </div>
          
                      <div class="form-group d-flex justify-content-center">
                        <input type="text" class="form-control col-lg-6 mt-2 modalField" id="txtDoctorNameEdit"
                          placeholder="Name"  value="${currentDoc.name}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="email" class="form-control col-lg-6 mt-2 modalField" id="txtDoctorEmailEdit"
                          placeholder="Email" value="${currentDoc.email}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="number" class="form-control col-lg-6 mt-2 modalField" id="txtLatitudeEdit"
                          placeholder="Latitude" value="${currentDoc.latitude}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="number" class="form-control col-lg-6 mt-2 modalField" id="txtLongitudeEdit"
                          placeholder="Longitude" value="${currentDoc.longitude}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <select type="select" class="form-control col-lg-6 mt-2 modalField" id="sltSpecialtyEdit">
                          <option >${currentDoc.specialty}</option>
                          <option value="General medicine">General medicine</option>
                          <option value="Geriatrics">Geriatrics</option>
                          <option value="Pediatrics">Pediatrics</option>
                          <option value="Emergency">Emergency</option>
                        </select>
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="url" class="form-control col-lg-6 mt-2 modalField" id="txtPhotoEdit"
                          placeholder="photo url" value="${currentDoc.photo}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="text" class="form-control col-lg-6 mt-2 modalField" id="txtDescriptionEdit"
                          placeholder="Description" value="${currentDoc.description}">
                      </div>
                
          
                      <div class="d-flex justify-content-center mb-3">
                        <button type="button" class="btn btn-secondary navButton mr-1 col-lg-3 "
                          data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary navButton col-lg-3" id="EditBtn"
                          >Update</button>
          
                      </div>
                      <div id="mdlUpdateMessage" class="col-lg-12 d-flex justify-content-center">
          
                      </div>
          
                    </div>
                  </div>
                </div>
              </div>
          `
          
          this.bindEditDoctor()
            })
        }

    }
    bindEditDoctor() {
        this.editBtn = document.querySelector("#EditBtn");
        this.editMessage = document.querySelector("#mdlUpdateMessage");
        this.docName = document.getElementById('txtDoctorNameEdit');
        this.docEmail = document.getElementById('txtDoctorEmailEdit');
        this.docLatitude = document.getElementById('txtLatitudeEdit');
        this.docLongitude = document.getElementById('txtLongitudeEdit');
        this.docSpecialty = document.getElementById('sltSpecialtyEdit');
        this.docPhoto = document.getElementById('txtPhotoEdit');
        this.docDescription = document.getElementById('txtDescriptionEdit');

        this.editBtn.addEventListener("click", event => {
            
            try {
               
                    if (this.docName.value != "" && this.docEmail.value != "" && this.docLatitude.value != "" && this.docLongitude.value != "" && this.docSpecialty.value != "" && this.docPhoto.value != "" && this.docDescription.value != "")
                     {
                         if (confirm("Are you sure you want to edit?")) { 
                            this.doctorController.editDoctor(this.docName.value, this.docEmail.value, this.docLatitude.value, this.docLongitude.value, this.docSpecialty.value, this.docPhoto.value, this.docDescription.value,"true","")
                            this.displayEditMessage("Doctor edited with success", 'success')
                            setTimeout(() => {
                                location.href = "admin.html";
                            },
                                1000)
                         } 
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
            <td><button id='${doctor.id}' class='btn btn-outline-primary m-2 edit'data-toggle="modal" data-target="#DoctorEditmodal">EDIT</button></td>
            </tr>
            `
        }
        result += `</table>`
        this.doctorCatalog.innerHTML = result
        this.bindRemoveEvent()
        this.bindEditEvent()
        
        
    }

    
}