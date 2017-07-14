module.exports.hello = {
    handler: function (request, reply) {
        reply(
            { result: 'hello for client' }
        )
    }
}
