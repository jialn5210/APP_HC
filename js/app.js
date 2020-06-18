import UserView from './views/UserView.js'
import CatalogView from './views/CatalogView.js'
import DoctorAddView from './views/DoctorAddView.js'
import AdminDoctorView from './views/AdminDoctorView.js'
import DoctorDetailsView from './views/DoctorDetailsView.js'
import loginUserView from './views/loginUserView.js'
import AdminUserView from './views/AdminUserView.js'
import AdminView from './views/AdminView.js'
import EditDoctorView from './views/EditDoctorView.js'
import MapView from './views/MapView.js'

class App {
    constructor() {
        this.routes = {

            'index': [
                UserView
            ],
            'hc': [
                loginUserView
            ],
            'addDoctor': [
                DoctorAddView
            ],
            'catalog':[
                CatalogView,
                loginUserView 
                
            ],
            'adminDoctors': [
                AdminDoctorView,
                loginUserView 
            ],
            'doctorDetails': [
                DoctorDetailsView
            ],
            'adminUsers': [
                
                AdminUserView,
                loginUserView 
                
            ],
            'adminApp': [
                
                
                loginUserView 
                
            ],
            'admin': [
                AdminView,
                loginUserView 
                
            ],
            'editDoctor': [
                EditDoctorView
            ],
            'map':[
                MapView
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
                name:'Michael Doe',
                email:'michaeldoe@gmail.com',
                latitude:'41.188272',
                longitude:'-8.587833',
                specialty:'Emergency',
                description:"Master's degree in medicine with 10 years of experience",
                photo:'https://iclinic-mkt.s3.amazonaws.com/ghost-images/images/2018/01/blog-como-ser-um-medico-bem-sucedido-5-atitudes-fundamentais.jpg',
                status: 'true'
            },

            {
                id: 2,
                name:'John Doe',
                email:'johndoe@gmail.com',
                latitude:'41.162853',
                longitude:'-8.573749',
                specialty:'Pediatrics',
                description:"Master's degree in medicine with 10 years of experience",
                photo:'https://www.abrale.org.br/revista-online/wp-content/uploads/2016/12/imagem-medico.jpg',
                status: 'true'
            },

            {
                id: 3,
                name:'Sara Doe',
                email:'saradoe@gmail.com',
                latitude:'41.164301',
                longitude:'-8.618667',
                specialty:'Geriatrics',
                description:"Master's degree in medicine with 10 years of experience",
                photo:'https://s.calendarr.com/upload/datas/me/di/medico_c.jpg',
                status: 'true'
            }
        ];

        const users = [
            {
                id: 1,
                username: 'user',
                password: 'user',
                photo:'https://f0.pngfuel.com/png/636/141/computer-icons-user-s-included-png-clip-art.png',
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
