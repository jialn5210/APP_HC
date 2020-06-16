import DoctorModel from '../models/DoctorModel.js'

export default class DoctorController {
    constructor() {
        this.doctorModel = new DoctorModel()
    }

    addDoctor(name,email ,latitude,longitude ,specialty , photo, description,status) {
        if (!this.doctorModel.getAll().some(doctor => doctor.name === name)) {
            this.doctorModel.create(
                name,
                email,
                latitude,
                longitude,
                specialty,
                photo,
                description,
                status
            );
        } else {
            throw Error(`The doctor "${name}" already exists!`);
        }
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


    getDoctors(filterName='', filterSpecialty='') {

      

        const doctors = this.doctorModel.getAll()
        
        if (filterName==='' && filterSpecialty==='') {
            return doctors
        }

        let filteredDoctors = []

        for (const doctor of doctors) {
            let filterDoctorName = false, filterDoctorSpecialty = false

            if((doctor.name.includes(filterName) && filterName!='') || filterName==='') {
                filterDoctorName = true
            }

            if((doctor.specialty===filterSpecialty && filterSpecialty!='') || filterSpecialty==='') {
                filterDoctorSpecialty = true
            }

            // Alimentar filteredDoctors
            if(filterDoctorName && filterDoctorSpecialty) {
                filteredDoctors.push(doctor)
            }
        }

        return filteredDoctors
    }
}
