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
        }
    ]
}