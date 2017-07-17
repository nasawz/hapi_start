import * as Sequelize from 'sequelize'
import * as path from 'path'
import * as fs from 'fs'

let modelsPath = path.join(path.dirname(fs.realpathSync(__filename)), '../modules');

export default {
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
                        name: 'danmu', // identifier
                        models: [`${modelsPath}/**/models/*.js`],  // paths/globs to model files
                        sequelize: new Sequelize('danmu', 'postgres', '', {
                            host: '127.0.0.1',
                            port: '5432',
                            dialect: 'postgres'
                        }), // sequelize instance
                        sync: true, // sync models - default false
                        forceSync: false, // force sync (drops tables) - default false
                    }
                ]
            }
        },
    ]
}