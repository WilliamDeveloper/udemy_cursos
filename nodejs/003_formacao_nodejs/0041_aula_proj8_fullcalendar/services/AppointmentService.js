const appointment = require('../models/Appointment')

const mongoose = require('mongoose')

const Appointment = mongoose.model('Appointment', appointment)
const AppointmentFactory = require('../factories/AppointmentFactory')

class AppointmentService{
    async Create({ name, email, description, cpf, date, time }){
        var newAppointment = new Appointment({
            name, email, description, cpf, date, time, finished:false, notified:false
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
            let appointmentsRaw =  await Appointment.find({'finished' : false})

            let appointments = []
            appointmentsRaw.forEach(appointment =>{
                if(appointment.date != undefined){
                    appointments.push( AppointmentFactory.Build({simpleAppointment: appointment}) )
                }
            })
            return appointments
        }


    }

    async GetById({id}){

        try{
            let result = await Appointment.findOne({_id:id})
            return result
        }catch (e) {
            console.log(e)
        }

    }

    async Finish({id}){
        let dadosUpdate = {
            finished:true
        }

        try {
            await Appointment.findByIdAndUpdate(id,dadosUpdate)
        }catch (e) {
            console.log(e)
        }
    }

    async Search({termoBuscaQuery}){
        try {
            let listaConsultas = await Appointment
                .find().or([
                    {email:termoBuscaQuery},
                    {cpf:termoBuscaQuery},
                ])
            return listaConsultas
        }catch (e) {
            console.log(e)
            return []
        }

    }

    async SendNotification(){
        let consultas = await this.GetAll({showFinished:false})
        console.log(consultas)
    }

}

module.exports = new AppointmentService()