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
        const currentDoctor = {
          id: 1,
          name:'Michael Doe',
          email:'michaeldoe@gmail.com',
          latitude:'41.188272',
          longitude:'-8.587833',
          specialty:'Emergency',
          description:"Master's degree in medicine with 10 years of experience",
          photo:'https://iclinic-mkt.s3.amazonaws.com/ghost-images/images/2018/01/blog-como-ser-um-medico-bem-sucedido-5-atitudes-fundamentais.jpg',
          status: 'true'
      };

        console.log(currentDoctor);
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
        let comment=[
                {"name":"maria", 
                "date":"10 Apr, 2016", 
                "comment":"this is a comment"}
            ];
    
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
