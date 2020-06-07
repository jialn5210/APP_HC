import DoctorModel from '../models/DoctorModel.js'

export default class DoctorController {
    constructor() {
        this.doctorModel = new DoctorModel()
    }

    addDoctor(name,email ,location ,specialty , photo, description) {
        if (!this.doctorModel.getAll().some(doctor => doctor.name === name)) {
            this.doctorModel.create(
                name,
                email,
                location,
                specialty,
                photo,
                description
            );
        } else {
            throw Error(`The doctor "${name}" already exists!`);
        }
    }

    getDoctors() {
        return this.doctorModel.getAll()
    }

    removeDoctor(name) {
        this.doctorModel.remove(name)
    }

    setCurrentDoctor(id) {
        this.doctorModel.setCurrentDoctor(id)
    }

    getCurrentDoctor() {
        return this.doctorModel.getCurrentDoctor()
    }
}