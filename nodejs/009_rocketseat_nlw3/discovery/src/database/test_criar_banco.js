const Database = require('./db') //colocar a extensao do db.js eh facultativo
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) =>{
  console.log('test.js-insert-inserir dados na tabela')

  // limpar dados anteriores
  console.log('test.js-delete')
  const deleteOrphanage = await db.run('DELETE FROM orphanages where id >= 1 ;');  
  console.log('deleteOrphanage ',deleteOrphanage)

  const objetoOrphanage1 = {    
    lat :  "-27.222633",
    lng : "-49.6455874",
    name : "Lar das meninas",
    about : "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social. ",
    whatsapp :  "989809876567",
    images : [
      "https://images.unsplash.com/photo-1589623207499-eabd599bef0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1595316441434-e3067270e39a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1593781493149-9cec4faaa7d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1580673787750-2c5ef81571dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1586441133374-ed1cb4007a47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1584445634848-9089cb1cb90b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions :  "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
    opening_hours : "Horário de visitas das 18 até 8h",
    open_on_weekends : "1"
  }
  await saveOrphanage(db,objetoOrphanage1)

  const objetoOrphanage2 = {    
    lat :  "-27.222633",
    lng : "-49.6555874",
    name : "Lar dos meninos",
    about : "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social. ",
    whatsapp :  "989809876567",
    images : [
      "https://images.unsplash.com/photo-1589623207499-eabd599bef0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1595316441434-e3067270e39a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1593781493149-9cec4faaa7d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1580673787750-2c5ef81571dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1586441133374-ed1cb4007a47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1584445634848-9089cb1cb90b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions :  "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
    opening_hours : "Horário de visitas das 18 até 8h",
    open_on_weekends : "0"
  }
  await saveOrphanage(db,objetoOrphanage2)
 

  // consultar dados da tabela
  console.log('test.js-select')
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");  
  console.log('selectedOrphanages ',selectedOrphanages)

  // consultar somente 1 orphanage pelo ID
  console.log('test.js-select')
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id="1"');  
  console.log('orphanage ',orphanage)  
});