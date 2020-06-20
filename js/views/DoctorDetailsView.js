import DoctorController from '../controllers/DoctorController.js'

export default class DoctorDetailsView {
    constructor() {
        this.doctorController = new DoctorController();

        // DOM References
        this.doctorName = document.getElementById('doctorName');
        this.doctorSpecialty = document.getElementById('doctorSpecialty');
        this.doctorPhoto = document.getElementById('doctorPhoto');
        this.doctorDescription = document.getElementById('doctorDescription');
        this.btnBack = document.querySelector("#btnBack")

        //comments
        this.name= document.getElementById('name');
        this.date = document.getElementById('date');
        this.comment = document.getElementById('comment');
        this.btnComment=document.getElementById('btnComment')


        this.fillDoctorData()
        this.bindBackButton()
        this.fillCommentData()
        this.bindCommentButton()
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

    fillCommentData(dataObject){
        if (dataObject !== undefined) {
          let html="<div class='commentBox'><div class='name'><span>"+dataObject.name+"</span><div class='date'><span>"+dataObject.date+"</div><p>"+dataObject.comment+"</p></div></div>";
          $('.container').append(html)
        }


    }

    bindCommentButton(){
        const currentDoctor = this.doctorController.getCurrentDoctor()
        let comment=[];
        
    
            for (let i = 0; i < comment.length; i++) {
                this.fillCommentData(comment[i]);
            }

        this.btnComment.addEventListener('click', () => {
            let addObj={
                "name":this.name.value, 
                "date":this.date.value, 
                "comment":this.comment.value
            };
            console.log(addObj);
            comment.push(addObj);
            this.fillCommentData(addObj);
        })
    }
 
    

    

}
