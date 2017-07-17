import * as Hapi from 'hapi'
import manifest from './config/manifest'
import * as Glue from 'glue'

Glue.compose(manifest, { relativeTo: __dirname }, (err, server) => {
    if (err) {
        console.log('server.register err:', err);
    }
    (<any>global).models = server.plugins['hapi-sequelize']['danmu'].models;
    server.start(() => {
        console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
    });
});
