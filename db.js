const Sequelize = require('sequelize')
const sequelize = new Sequelize('locadora_vei', 'root', '1234567', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("A vida é boa para quem não desiste! Conectado com sucesso.")
}).catch(function(erro){
    console.log("Falha ao se conectar."+erro)
})

