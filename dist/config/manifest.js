"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const path = require("path");
const fs = require("fs");
let modelsPath = path.join(path.dirname(fs.realpathSync(__filename)), '../modules');
exports.default = {
    server: {
        debug: {
            request: [
                'error',
                'received'
            ]
        }
    },
    connections: [
        {
            host: '127.0.0.1',
            port: 8062,
            labels: [
                'api'
            ],
            state: {
                strictHeader: false
            },
            routes: {
                cors: true
            }
        }
    ],
    registrations: [
        {
            plugin: {
                register: 'blipp',
                options: {}
            }
        },
        {
            plugin: "./modules/danmu",
            options: {
                "select": "api"
            }
        },
        {
            plugin: {
                register: 'hapi-sequelize',
                options: [
                    {
                        name: 'danmu',
                        models: [`${modelsPath}/**/models/*.js`],
                        sequelize: new Sequelize('danmu', 'postgres', '', {
                            host: '127.0.0.1',
                            port: '5432',
                            dialect: 'postgres'
                        }),
                        sync: true,
                        forceSync: false,
                    }
                ]
            }
        },
    ]
};
