const Hapi = require('hapi');
const Path = require('path');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public'),
    },
  },
});

const init = async () => {
  await server.register(require('inert'));

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      },
    },
  });

  await server.start();
  console.log(`Server Running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  if (err) console.log(err);

  process.exit(1);
});

init();
