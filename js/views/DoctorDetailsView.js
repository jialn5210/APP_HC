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
        
        

        this.fillDoctorData()
        
    }

   

    fillDoctorData() {
        const currentDoctor = this.doctorController.getCurrentDoctor()
        this.doctorName.innerHTML = "Name: " + currentDoctor.name
        this.doctorSpecialty.innerHTML ="Specialty: " + currentDoctor.specialty
        this.doctorDescription.innerHTML ="Description: " + currentDoctor.description
        this.doctorPhoto.src = currentDoctor.photo
        
    } 

   
    

}
