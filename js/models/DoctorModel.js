export default class DoctorModel {
    constructor() {
        this.doctors = localStorage.doctors ? JSON.parse(localStorage.doctors) : [];
    }

    getAll() {
        return this.doctors;
    }
    
    create(name,email ,location ,specialty , photo, description) {
        const doctor = {
            id: this.doctors.length > 0 ? this.doctors[this.doctors.length - 1].id + 1 : 1,
            name: name,
            email:email,
            location: location,
            specialty:specialty,
            photo: photo,
            description: description,
        }
        this.doctors.push(doctor);
        this._persist();
    }

    setCurrentDoctor(id) {
        localStorage.setItem("doctor", id); 
    }

    getCurrentDoctor() {
        return this.doctors.find(doctor => doctor.id === +localStorage.doctor)
    }

    _persist() {
        localStorage.setItem('doctors', JSON.stringify(this.doctors));
    }
}
