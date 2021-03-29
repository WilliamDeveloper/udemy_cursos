const Database = require('./db') //colocar a extensao do db.js eh facultativo
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) =>{
  

  // consultar dados da tabela
  console.log('test.js-select')
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");  
  console.log('selectedOrphanages ',selectedOrphanages)
  
});