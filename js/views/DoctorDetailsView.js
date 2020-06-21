import DoctorController from '../controllers/DoctorController.js'

export default class DoctorDetailsView {
    constructor() {
        this.doctorController = new DoctorController();
        this.Reports = localStorage.Reports ? JSON.parse(localStorage.Reports) : [];

        // DOM References
        this.doctorName = document.getElementById('doctorName');
        this.doctorSpecialty = document.getElementById('doctorSpecialty');
        this.doctorPhoto = document.getElementById('doctorPhoto');
        this.doctorDescription = document.getElementById('doctorDescription');
        this.doctorRating = document.getElementById('rating');
        this.btnBack = document.querySelector("#btnBack")

        this.fillDoctorData()
        this.bindBackButton()
    }

    bindBackButton() {
        this.btnBack.addEventListener('click', () => {
            location.href="catalog.html"
        })
    }

    fillDoctorData() {
        const currentDoctor = this.doctorController.getCurrentDoctor()
        this.doctorName.innerHTML = currentDoctor.name
        this.doctorSpecialty.innerHTML = currentDoctor.specialty
        this.doctorDescription.innerHTML = currentDoctor.description
        this.doctorPhoto.src = currentDoctor.photo
        this.doctorRating.innerHTML = currentDoctor.rating
    } 

   
    

}
