var models = require('./models')
var config = require('./config')

const forceSync = config.database.forceSync

module.exports =  function(passport) {
  models.sequelize.sync({ force: forceSync })
    .then(() => {
      console.log('database initialize is done!')
    })
}

