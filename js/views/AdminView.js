

export default class AdminView {
    constructor() {
        this.user = document.getElementById("seeUsers")
        this.doctors = document.getElementById("seeDoctors")
        this.apps = document.getElementById("seeApps")
        
        //counters
        this.Users()
        this.Doctors()

        //mudar de página
        this.UsersConfig();
        this.DoctorsConfig();
        this.AppConfig();
    }

    Users(){
        let qttUser=JSON.parse(localStorage.getItem('users'))
        document.getElementById('allUsers').innerHTML= qttUser.length;
        
    }

     Doctors(){
        let qttDoctor=JSON.parse(localStorage.getItem('doctors'))
        document.getElementById('allDoctors').innerHTML= qttDoctor.length;
        
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