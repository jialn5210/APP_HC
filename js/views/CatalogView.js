import DoctorController from '../controllers/DoctorController.js'

export default class DoctorView {

    constructor() {
        this.doctorController = new DoctorController()
        
        // Catalog
        this.catalog = document.querySelector("#myCatalog")
        this.btnAdd = document.querySelector("#btnAdd")
        this.txtDoctor = document.querySelector("#txtDoctor")
        this.sltSpecialty = document.querySelector("#sltSpecialty")

        this.renderCatalog(this.doctorController.getDoctors())
        this.bindAddAddEvent()
    }

    bindAddAddEvent() {
        this.btnAdd.addEventListener('click', () => {
            location.href='addDoctor.html';
        })
    }

/*     bindAddSeeMoreEvent() {
        for (const btnSee of document.getElementsByClassName("see")) {
            btnSee.addEventListener('click', event => {
                this.doctorController.setCurrentDoctor(event.target.id)  
                location.href='html/band.html';
            })
        }
    } */

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

 /*        this.bindAddSeeMoreEvent() */
    }

    _generateDoctorCard(doctor) {
        let html = `
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="${doctor.photo}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${doctor.name}</h4>
                    <p class="card-text">${doctor.genre}</p>
 /*                    <button id="${doctor.id}" class="btn btn-primary see">See more</button> */
            ``
                </div>
            </div>
        </div>        
        `
        return html
    }

}
