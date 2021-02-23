const appointment = require('../models/Appointment')

const mongoose = require('mongoose')

const Appointment = mongoose.model('Appointment', appointment)
const AppointmentFactory = require('../factories/AppointmentFactory')

const nodemailer = require('nodemailer')

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

        let transporter = nodemailer.createTransport({
            host:'smtp.mailtrap.io',
            port:2525,
            auth:{
                user:'91c27e9b047e90',
                pass: '18e73f165757ff',
            }
        })

        let consultas = await this.GetAll({showFinished:false})
        console.log(consultas)
        consultas.forEach(async (consulta) =>{
            let date = consulta.start.getTime()
            let oneHourInMilis = 1000 * 60 * 60
            let gap = date - Date.now()
            if(gap <= oneHourInMilis){
                console.log('->', consulta.title)
                console.log('-> mande a notificcacao ', date, consulta.start)
                if(!consulta.notified){

                    await Appointment
                        .findByIdAndUpdate(consulta.id, {notified:true})

                    transporter.sendMail({
                        from: "William Pacheco<william.pacheco@gui.com>",
                        to: consulta.email,
                        subject: 'sua consulta vai acontecer em breve',
                        text:'conteudo qualquer!!!! sua consulta vai acontecer em breve'
                    }).then((resp)=>{
                        console.log(resp)
                    }).catch(e=>{
                        console.log(e)
                    })
                }

            }
        })
    }

}

module.exports = new AppointmentService()