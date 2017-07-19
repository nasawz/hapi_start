
// declare let models: any;

module.exports.hello = {
    handler: function (request, reply) {

        models.danmu.create({ txt: 'demo' })

        reply(
            { result: 'hello for admin' }
        )
    }
}
