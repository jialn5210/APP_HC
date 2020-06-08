import DoctorController from '../controllers/DoctorController.js'

export default class DoctorDetailsView {
    constructor() {
        this.doctorController = new DoctorController();

        // DOM References
        this.doctorName = document.getElementById('txtName');
        this.doctorSpecialty = document.getElementById('sltSpecialty');
        this.doctorPhoto = document.getElementById('txtPhoto');
        this.doctorDescription = document.getElementById('txtDescription');
        this.btnBack = document.querySelector("#btnBack")

        this.fillDoctorData()
        this.bindBackButton()
    }

    bindBackButton() {
        this.btnBack.addEventListener('click', () => {
            history.back();
        })
    }

    fillDoctorData() {
        const currentDoctor = this.doctorController.getCurrentDoctor()
        this.doctorName.innerHTML = currentDoctor.name
        this.doctorSpecialty.innerHTML = currentDoctor.specialty
        this.doctorDescription.innerHTML = currentDoctor.description
        this.doctorPhoto.src = currentDoctor.photo
    } 

}
