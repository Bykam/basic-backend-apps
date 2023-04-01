const Hapi = require('@hapi/hapi')
const route = require('./src/route')

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(route);

  await server.start();
  console.log(`Server sedang berjalan pada port ${server.info.uri}`);
};

init();