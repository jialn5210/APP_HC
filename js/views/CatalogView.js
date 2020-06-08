import DoctorController from '../controllers/DoctorController.js'

export default class DoctorView {

    constructor() {
        this.doctorController = new DoctorController()
        
        // Catalog
        this.catalog = document.querySelector("#myCatalog")
        this.btnFilter = document.querySelector("#btnFilter")
        this.btnSort = document.querySelector("#btnSort")
        
        this.txtDoctor = document.querySelector("#txtDoctor")
        this.sltSpecialty = document.querySelector("#sltSpecialty")

        this.renderCatalog(this.doctorController.getDoctors())
        this.bindAddFilterEvent()
        this.bindAddSortEvent()
        
    }

    bindAddFilterEvent() {
        this.btnFilter.addEventListener('click', () => {            
            this.renderCatalog(this.doctorController.getDoctors(this.txtDoctor.value, this.sltSpecialty.value))
        })
    }

    bindAddSortEvent() {
        this.btnSort.addEventListener('click', () => {
            this.renderCatalog(this.doctorController.getDoctors(this.txtDoctor.value, this.sltSpecialty.value, true))
        })
    }



    bindAddSeeMoreEvent() {
        for (const btnSee of document.getElementsByClassName("see")) {
            btnSee.addEventListener('click', event => {
                this.doctorController.setCurrentDoctor(event.target.id)  
                location.href='html/band.html';
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
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="${doctor.photo}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${doctor.name}</h4>
                    <p class="card-text">${doctor.specialty}</p>
                    <button id="${doctor.id}" class="btn btn-primary see">See more</button>           
                </div>
            </div>
        </div>        
        `
        return html
    }

   
}
