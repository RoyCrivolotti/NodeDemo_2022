import express from 'express';
import 'dotenv/config';

import registerMiddlewares from '../../internal/infra/configuration/middlewares/index.mjs';
import { router } from '../../internal/infra/configuration/router.mjs';

// Creating app
const app = express();

// Override listen method
app.listen = app.listen.bind(app, process.env.PORT, process.env.HOSTNAME, () =>
    console.log(`Listening on ${process.env.PORT}`)
);

app.listen();

// Registering all middlewared
registerMiddlewares(app);

// Route handling
app.all("/", (_, res) => res.redirect("/api"));
app.use('/api', router);

app.use('/*', (req, res, next) => {
    res.send('Hello world!');
});
