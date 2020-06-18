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
        this.name= document.getElementById('txtName');
        this.date = document.getElementById('txtDate');
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

    fillCommentData(){
        let html="<div class='commentBox'><div class='name'><span>"+ this.comment['name']+"</span><div class='date'><span>"+this.comment['date']+"</div><p>"+this.comment['comment']+"</p></div></div>";
        $('.container').append(html)

    }
    
    bindCommentButton(){
        let comment=[
                {"name":"maria", 
                "date":"10 Apr, 2016", 
                "comment":"this is a comment"}
            ];
    
            for (let i = 0; i < comment.length; i++) {
                this.fillCommentData(comment[i]);
            }

        this.btnComment.addEventListener('click', () => {
            this.addObj={
                "name":$('#name').val(), 
                "date":$('#date').val(), 
                "comment":$('#comment').val()
            };
            console.log(this.addObj);
            comment.push(this.addObj);
            this.fillCommentData(this.addObj);
        })

    }

    

}
