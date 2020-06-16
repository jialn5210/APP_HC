import DoctorController from '../controllers/DoctorController.js'

export default class DoctorView {

    constructor() {
        this.doctorController = new DoctorController()
        
        // Catalog
        this.catalog = document.querySelector("#myCatalog")
        this.btnFilter = document.querySelector("#btnFilter")
        this.btnSort = document.querySelector("#btnSort")
        this.spec =document.querySelector("#slt")
        this.txtDoctor = document.querySelector("#txtDoctor")
        this.sltSpecialty = document.querySelector("#sltSpecialty")

        this.renderCatalog(this.doctorController.getDoctors())
        
        this.bindAddFilterEvent()
      
        
    }
  
    bindAddFilterEvent() {
        this.btnFilter.addEventListener('click', () => {            
            this.renderCatalog(this.doctorController.getDoctors(this.txtDoctor.value, this.sltSpecialty.value))
        })
    }

   


    bindAddSeeMoreEvent() {
        for (const btnSee of document.getElementsByClassName("see")) {
            btnSee.addEventListener('click', event => {
                this.doctorController.setCurrentDoctor(event.target.id)  
                location.href='doctorDetails.html';
            })
        }
    }

    renderCatalog(doctors = []) {
        let result = ''
        let i=0
        for (const doctor of doctors) {
            if(i % 3 === 0) { result+=`<div class="row">` }
            result += this._generateDoctorCard(doctor)
            i++
            if(i % 3 ===0) {result+=`</div>`}            
        }

        this.catalog.innerHTML = result
       

        
        this.bindAddSeeMoreEvent()
    }

    _generateDoctorCard(doctor) {
        let html = `
        
        <div class="col-sm-4 card ">
            <div class="card-all">
                <img class="card-img" src="${doctor.photo}" alt="">
                <div class="card-body">
                    <h4 class="card-title text-center">${doctor.name}</h4>
                    
                    <button id="${doctor.id}" class="  see">See more</button>           
                </div>
            </div>
        </div>
                 
        `
        return html
    }

   
}
