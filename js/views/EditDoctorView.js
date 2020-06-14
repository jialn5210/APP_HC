import DoctorController from '../controllers/DoctorController.js'

export default class EditDoctorView {
    constructor() {
        this.doctorController = new DoctorController();

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
        this.doctorName.innerHTML = currentDoctor.name
        this.doctorEmail.innerHTML = currentDoctor.email
        this.doctorLatitude.innerHTML = currentDoctor.latitude
        this.doctorLongitude.innerHTML = currentDoctor.longitude
        this.doctorSpecialty.innerHTML = currentDoctor.specialty
        this.doctorDescription.innerHTML = currentDoctor.description
        this.doctorPhoto.src = currentDoctor.photo
    } 

}