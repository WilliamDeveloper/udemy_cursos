module.exports ={
    render(req,res,error){
        let params = {
            title: `Reservas - Restaurante Saboroso`,
            background : 'images/img_bg_2.jpg',
            h1: 'Reserve uma Mesa!',
            error
        }
        res.render('reservations', params )
    }
}