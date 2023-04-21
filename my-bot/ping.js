const client = require('./index')

module.exports = {
    name: `ping`,
    run(message) {
        message.reply({
            content: `${client.ws.ping}ms`
        })
    }
}