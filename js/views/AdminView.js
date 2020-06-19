

export default class AdminView {
    constructor() {

         this.numberOfUsers = localStorage.getItem('users').length
        console.log(localStorage.getItem('users').length) 
        this.user = document.getElementById("seeUsers")
        this.doctors = document.getElementById("seeDoctors")
        this.apps = document.getElementById("seeApps")
 this.Users()

        this.UsersConfig();
        this.DoctorsConfig();
        this.AppConfig();
    }

 Users(){
    document.getElementById('allUsers').innerHTML= localStorage.getItem('users').length; //valor errado

 }

    UsersConfig() {
        this.user.addEventListener("click", () => {
            setTimeout(() => {

                location.assign('../html/adminUsers.html')

            },
                1000);

        });
    }
    DoctorsConfig() {
        this.doctors.addEventListener("click", () => {
            setTimeout(() => {

                location.assign('../html/adminDoctors.html')

            },
                1000);

        });
    }
    AppConfig() {
        this.apps.addEventListener("click", () => {
            setTimeout(() => {

                location.assign('../html/adminApp.html')

            },
                1000);

        });
    }
}