declare let models: any;

module.exports.create = {
    handler: function (request, reply) {
        let { text, time, mode } = request.payload
        let result = models.danmu.create({ text, time, mode })
        reply(result)
    }
}

module.exports.info = {
    handler: function (request, reply) {
        let { id } = request.params
        let result = models.danmu.findOne({ where: { id } })
        reply(result)
    }
}
module.exports.list = {
    handler: function (request, reply) {
        let options = {
            limit: 10,
            offset: 0,
            order: [['createdAt', 'desc']]
        }
        let { page_size, page_num } = request.query
        if (page_size && page_size != '') {
            options.limit = page_size;
        }
        if (page_num && page_num != '') {
            options.offset = page_num * options.limit;
        }
        let result = models.danmu.findAndCount(options)
        reply(result)
    }
}

module.exports.update = {
    handler: function (request, reply) {
        let { text, time, mode } = request.payload
        let { id } = request.params
        let result = models.danmu.update({ text, time, mode }, { where: { id }, returning: true })
        reply(result)
    }
}

module.exports.delete = {
    handler: function (request, reply) {
        let { id } = request.params
        let result = models.danmu.destroy({ where: { id } }).then((obj) => {
            reply({ id: id })
        }, (err) => {
            reply(err)
        })
    }
}

module.exports.hello = {
    handler: function (request, reply) {
        reply(
            { result: 'hello for client' }
        )
    }
}
