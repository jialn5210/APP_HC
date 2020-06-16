




export default class AdminView {
    constructor() {





        this.user = document.getElementById("seeUsers")
        this.doctors = document.getElementById("seeDoctors")
        this.apps = document.getElementById("seeApps")


        this.UsersConfig();
        this.DoctorsConfig();
        this.AppConfig();
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