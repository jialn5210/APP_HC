import UserController from '../controllers/UserController.js'

export default class ProfileView {
    constructor() {
        this.userController = new UserController();

        //DOM references
        this.userName = document.getElementById('txtName');
        this.userEmail = document.getElementById('txtEmail');
        this.userAge = document.getElementById('txtAge');
        this.userAdress = document.getElementById('txtAdress');
        this.userPhoto = document.getElementById('txtPhoto');

        this.editBtn = document.querySelector("#btnEdit");
        this.editMessage = document.querySelector("#editProfileMessage");

        this.fillProfileInfo() ; 
        this.bindEditProfile();

    }

    fillProfileInfo()  {
        const userLogged = this.userController.checkLoginStatus()
        this.userName.value = userLogged.username
        this.userEmail.value = userLogged.email
        this.userAge.value = userLogged.age
        this.userAdress.value = userLogged.adress
        this.userPhoto.value = userLogged.photo
    }
    
    bindEditProfile() {
        this.editBtn.addEventListener("click", event => {
            event.preventDefault();
            try {
                    if (this.userName.value != "" && this.userEmail.value != "" && this.userAge.value != "" && this.userAdress.value != "" && this.userPhoto.value != "")
                     {
                            this.userController.editProfile(this.userName.value, this.userEmail.value, this.userAge.value, this.userAdress.value, this.userPhoto.value)
                            this.displayEditMessage("Profile edited with success", 'success')
                            setTimeout(() => {
                                location.href = "profile.html";
                            },
                                1000)
                    }
                    else {
                        throw Error("There are empty fields")
                    }
                }
            catch (e) {
                this.displayEditMessage(e, "danger")
            }
        })
    }

    displayEditMessage(message, type) {
        this.editMessage.innerHTML =
          `<div class="alert alert-${type} d-flex justify-content-center" role="alert">${message}</div>`;
      }
 
















}

