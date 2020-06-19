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
                this.doctorController.removeDoctor(event.target.id)
                this.renderCatalog(this.doctorController.getDoctors())
            })
        }
    }

    bindEditEvent(){
        for (const btnEdit of document.getElementsByClassName('edit')) {
            
            btnEdit.addEventListener('click', event => {
                this.doctorController.setCurrentDoctor(event.target.id)
                
                location.href="editDoctor.html"


               /*  let selDoc= this.doctorController.getCurrentDoctor()  
                this.doctorEditModal.innerHTML =`<div class="modal-dialog" role="document">
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
                          placeholder="Name" value="${selDoc.name}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="email" class="form-control col-lg-6 mt-2 modalField" id="txtDoctorEmailEdit"
                          placeholder="Email" value="${selDoc.email}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="number" class="form-control col-lg-6 mt-2 modalField" id="txtLatitudeEdit"
                          placeholder="Latitude" value="${selDoc.latitude}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="number" class="form-control col-lg-6 mt-2 modalField" id="txtLongitudeEdit"
                          placeholder="Longitude" value="${selDoc.longitude}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <select type="select" class="form-control col-lg-2 mt-2 mr-1 modalField" id="sltSpecialtyEdit">
                          <option value="">---</option>
                          <option value="General medicine">General medicine</option>
                          <option value="Geriatrics">Geriatrics</option>
                          <option value="Pediatrics">Pediatrics</option>
                          <option value="Emergency">Emergency</option>
                        </select>
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="url" class="form-control col-lg-2 mt-2 mr-1 modalField" id="txtPhotoEdit"
                          placeholder="photo url" value="${selDoc.photo}">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input type="text" class="form-control col-lg-2 mt-2 mr-1 modalField" id="txtDescriptionEdit"
                          placeholder="Description" value="${selDoc.description}">
                      </div>
                
          
                      <div class="d-flex justify-content-center mb-3">
                        <button type="button" class="btn btn-secondary navButton mr-1 col-lg-3 "
                          data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary navButton col-lg-3" id="btnEdit"
                          data-target="html/activities.html">Update</button>
          
                      </div>
                      <div id="mdlUpdateMessage" class="col-lg-12 d-flex justify-content-center">
          
                      </div>
          
                    </div>
                  </div>
                </div>
              </div>
          ` */
                
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
            <td><button id='${doctor.name}' class='btn btn-outline-primary m-2 edit'>EDIT</button></td>
            </tr>
            `
        }
        result += `</table>`
        this.doctorCatalog.innerHTML = result
        this.bindRemoveEvent()
        this.bindEditEvent()
    }

    
}