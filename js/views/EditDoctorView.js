import DoctorController from '../controllers/DoctorController.js'

export default class EditDoctorView {
    constructor() {
        this.doctorController = new DoctorController();

        this.doctors = localStorage.doctors ? JSON.parse(localStorage.doctors) : [];
        // DOM References
        this.doctorName = document.getElementById('txtName');
        this.doctorEmail = document.getElementById('txtEmail');
        this.doctorLatitude = document.getElementById('txtLatitude');
        this.doctorLongitude = document.getElementById('txtLongitude');
        this.doctorSpecialty = document.getElementById('sltSpecialty');
        this.doctorPhoto = document.getElementById('txtPhoto');
        this.doctorDescription = document.getElementById('txtDescription');

        this.fillDoctorData()
        
    }
    
    fillDoctorData() {
        const currentDoctor = this.doctorController.getCurrentDoctor()
        this.doctorName.value = currentDoctor.name
        this.doctorEmail.value = currentDoctor.email
        this.doctorLatitude.value = currentDoctor.latitude
        this.doctorLongitude.value = currentDoctor.longitude
        this.doctorSpecialty.value = currentDoctor.specialty
        this.doctorDescription.value = currentDoctor.description
        this.doctorPhoto.src = currentDoctor.photo
    } 

}