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
        this.doctors = []
        if(localStorage.getItem("doctors")){
          this.doctors = JSON.parse(localStorage.getItem("doctors"));
      }
       
        for (let i = 0; i < this.doctors.length; i++) {
            this.doctorName = doctors[i].name
            this.doctorEmail = this.doctors[i]
            this.doctorLatitude = this.doctors[i]
            this.doctorLongitude = this.doctors[i]
            this.doctorSpecialty= this.doctors[i]
            this.doctorDescription = this.doctors[i]
            this.doctorPhoto = this.doctors[i]




        }
       
       
    } 

}