const appointment = require('../models/Appointment')

const mongoose = require('mongoose')

const Appointment = mongoose.model('Appointment', appointment)

class AppointmentService{
    async Create({ name, email, description, cpf, date, time }){
        var newAppointment = new Appointment({
            name, email, description, cpf, date, time, finished:false
        })

        try {
            await  newAppointment.save()
            return {success: true}
        }catch (e) {
            console.log(e)
            return {success: false, error:e}
        }

    }

    async GetAll({showFinished}){
        if(showFinished){
            return await Appointment.find()
        }else{
            return await Appointment.find({'finished' : false})
        }

    }
}

module.exports = new AppointmentService()