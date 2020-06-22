import UserView from './views/UserView.js'
import CatalogView from './views/CatalogView.js'
import DoctorAddView from './views/DoctorAddView.js'
import AdminDoctorView from './views/AdminDoctorView.js'
import DoctorDetailsView from './views/DoctorDetailsView.js'
import LoginUserView from './views/loginUserView.js'
import AdminUserView from './views/AdminUserView.js'
import AdminView from './views/AdminView.js'
import ProfileView from './views/ProfileView.js'
import AdminAppView from './views/AdminAppView.js'
import AppsView from './views/AppsView.js'
import AchievementsView from './views/AchievementsView.js'


class App {
    constructor() {
        this.routes = {

            'index': [
                UserView,
                ProfileView
            ],
            'hc': [
                LoginUserView,
                ProfileView
            ],
            'addDoctor': [
                DoctorAddView
            ],
            'catalog':[
                CatalogView,
                LoginUserView 
                
            ],
            'adminDoctors': [
                AdminDoctorView,
                LoginUserView 
            ],
            'doctorDetails': [
                DoctorDetailsView
            ],
            'adminUsers': [
                AdminUserView,
                LoginUserView 
            ],
            'adminApp': [
                AdminAppView,
                LoginUserView 
            ],
            'admin': [
                AdminView,
                LoginUserView 
            ],
            'profile':[
                ProfileView,
                LoginUserView 
            ],
            'appointments':[
                AppsView,
                LoginUserView 
            ],
            'achievements':[
                AchievementsView
            ]

            
        };

        // import dummy data for testing purposes
        this._importDataFixtures();

        // instantiate the views mapped in the routes object
        this._instantiateViews();
    }

    _instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];

        const views = this._getViews(route);

        for (const view of views) {
            new view();
        }
    }
    _getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }

    _importDataFixtures() {
        const doctors = [
            {
                id: 1,
                name:'Miguel Santos',
                email:'miguelsantos@gmail.com',
                latitude:'41.188272',
                longitude:'-8.587833',
                specialty:'Emergency',
                description:"Master's degree in medicine with 10 years of experience",
                photo:'https://iclinic-mkt.s3.amazonaws.com/ghost-images/images/2018/01/blog-como-ser-um-medico-bem-sucedido-5-atitudes-fundamentais.jpg',
                status: 'true',
                rating:''
            },

            {
                id: 2,
                name:'João Ferreira',
                email:'joaoferreira@gmail.com',
                latitude:'41.162853',
                longitude:'-8.573749',
                specialty:'Pediatrics',
                description:"Master's degree in medicine with 10 years of experience",
                photo:'https://www.abrale.org.br/revista-online/wp-content/uploads/2016/12/imagem-medico.jpg',
                status: 'true',
                rating:''
            },

            {
                id: 3,
                name:'Sara Costa',
                email:'saracosta@gmail.com',
                latitude:'41.164301',
                longitude:'-8.618667',
                specialty:'Geriatrics',
                description:"Master's degree in medicine with 15 years of experience.",
                photo:'https://s.calendarr.com/upload/datas/me/di/medico_c.jpg',
                status: 'true',
                rating:''
            },

            {
                id: 4,
                name:'Mónica Silva',
                email:'monicasilva@gmail.com',
                latitude:'41.168701',
                longitude:'-8.590734',
                specialty:'General Medicine',
                description:"Master's degree in medicine with 7 years of experience.",
                photo:'https://telemedicinamorsch.com.br/wp-content/uploads/2018/05/carreira-medica.jpg',
                status: 'true',
                rating:''
            },

            {
                id: 5,
                name:'Paula Coimbra',
                email:'paulacoimbra@gmail.com',
                latitude:'41.168168',
                longitude:'-8.628499',
                specialty:'Geriatrics',
                description:"Master's degree in medicine with 4 years of experience.",
                photo:'https://heci.com.br/wp-content/uploads/2016/11/O6TRVV0-540x280.jpg?i=8337',
                status: 'true',
                rating:''
            },

            {
                id: 6,
                name:'Maria Fonseca',
                email:'mariafonseca@gmail.com',
                latitude:'41.170733',
                longitude:'-8.612417',
                specialty:'Geriatrics',
                description:"Master's degree in medicine with 5 years of experience.",
                photo:'https://veja.abril.com.br/wp-content/uploads/2016/12/istock-508387030.jpg',
                status: 'true',
                rating:''
            },

            {
                id: 7,
                name:'Patricia Matos',
                email:'patriciamatos@gmail.com',
                latitude:'41.145987',
                longitude:'-8.571133',
                specialty:'General Medicine',
                description:"Master's degree in medicine with 10 years of experience.",
                photo:'https://www.alphals.org/wp-content/uploads/2019/01/solucoes-medicas-detalhes.jpg',
                status: 'true',
                rating:''
            },

            {
                id: 8,
                name:'Filipe Almeida',
                email:'filipealmeida@gmail.com',
                latitude:'41.153482',
                longitude:'-8.619565',
                specialty:'Pediatrics',
                description:"Master's degree in medicine with 3 years of experience.",
                photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOlQqzKwckvdEyJDD4xt_aS8lJqF7ozmUajDymHs2Hnky_PNlF&usqp=CAU',
                status: 'true',
                rating:''
            } 

        ];

        const users = [
            {
                id: 1,
                username: 'user',
                password: 'user',
                photo:'https://f.pngfuel.com/png/636/141/computer-icons-user-s-included-png-clip-art.png',
                type:'user',
                status: 'true'
            },
            {
                id: 2,
                username: 'admin',
                password: 'admin',
                photo:'https://p7.hiclipart.com/preview/701/653/267/computer-icons-system-administrator-clip-art-administrator-icon.jpg',
                type: 'admin',
                status: 'true'
            }
        ];

        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }

        if (!localStorage.doctors) {
            localStorage.setItem('doctors', JSON.stringify(doctors));
        }
    }
}




new App();
