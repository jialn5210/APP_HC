import UserView from './views/UserView.js'


class App {
    constructor() {
        this.routes = {
          
            'index': [
                UserView   
            ],
            'hc': [
               UserView            
            ],
           
        
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

        const users = [
            {
                id: 1,
                username: 'user',
                password: 'user'
                
            }
        ];
     
        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}

new App();
