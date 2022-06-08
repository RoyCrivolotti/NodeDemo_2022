import defaultMW from './default.mjs';

// Register middlewares
export default function registerMiddlewares(server) {
    defaultMW(server);
};
