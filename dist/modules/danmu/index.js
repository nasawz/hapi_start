"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Plugo = require("plugo");
exports.register = (plugin, options, next) => {
    Plugo.expose({ name: 'handlers', path: __dirname + '/handlers' }, plugin, function () {
        let handlers = plugin.plugins.danmu.handlers;
        plugin.route([
            // ===client 客户端===
            // 创建弹幕
            { method: 'POST', path: '/danmu', config: handlers.Client.hello },
            // 获取一个弹幕信息
            { method: 'GET', path: '/danmu/{id}', config: handlers.Client.hello },
            // 跟新一个弹幕信息
            { method: 'PUT', path: '/danmu/{id}', config: handlers.Client.hello },
            // 删除一个弹幕信息
            { method: 'DELETE', path: '/danmu/{id}', config: handlers.Client.hello },
            // ===admin 管理端===
            { method: 'GET', path: '/danmu/admin', config: handlers.Admin.hello },
        ]);
        next();
    });
};
exports.register.attributes = {
    name: 'danmu'
};
