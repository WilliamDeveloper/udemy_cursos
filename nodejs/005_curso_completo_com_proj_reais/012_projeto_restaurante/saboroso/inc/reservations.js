module.exports ={
    render(req,res){
        let params = {
            title: `Reservas - Restaurante Saboroso`,
            background : 'images/img_bg_2.jpg',
            h1: 'Reserve uma Mesa!'
        }
        res.render('reservations', params )
    }
}