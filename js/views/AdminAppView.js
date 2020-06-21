

export default class AdminAppView {
    constructor() {
        this.appsCatalog = document.querySelector('#appsCatalog')
        this.Reports = localStorage.Reports ? JSON.parse(localStorage.Reports) : [];
     
        this.renderCatalog()

    }


    renderCatalog() {
    let result = ''
    if (this.Reports.length != 0) {
        result = `
        <table class="info"><tr><th>Username</th><th>Doctor's name</th></tr>
        `
    } else {
        result = `<p class="info">Without any appointments registered!</p>`
    }

    for (let i=0; i<this.Reports.length; i++) {
        
        result += `                
        <td>${this.Reports[i].User}</td>
        <td>${this.Reports[i].Doctor}</td>
        </tr>
        `
    }
    result += `</table>`
    this.appsCatalog.innerHTML = result
    
    }
}