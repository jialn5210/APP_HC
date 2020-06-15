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
        const doctors= this.doctorController.getDoctors()
        this.doctorName.innerHTML = doctors[1].value
        this.doctorEmail.innerHTML =  doctors[2]
        this.doctorLatitude.innerHTML =  doctors[3]
        this.doctorLongitude.innerHTML = doctors[4]
        this.doctorSpecialty.innerHTML =  doctors[5]
        this.doctorDescription.innerHTML =  doctors[6]
        this.doctorPhoto.src = doctors[7]
    } 

}