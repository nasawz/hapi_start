import * as Hapi from 'hapi'
import manifest from './config/manifest'
import * as Glue from 'glue'

Glue.compose(manifest, { relativeTo: __dirname }, (err, server) => {
    if (err) {
        console.log('server.register err:', err);
    }
    server.start(() => {
        console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
    });
});
