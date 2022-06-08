async function getUser(req, res, next) {
    const { name } = req.query;
    console.log(name);
    res.json(getRequestData(req));
}

async function saveUser(req, res, next) {
    const { name } = req.query;
    console.log(name);
    res.json(getRequestData(req));
}

async function updateUser(req, res, next) {
    const { name } = req.query;
    console.log(name);
    res.json(getRequestData(req));
}

async function deleteUser(req, res, next) {
    const { name } = req.query;
    console.log(name);
    res.json(getRequestData(req));
}

const getRequestData = req => ({
    method: req.method,
    path: req.path,
    headers: req.headers,
    host: req.hostname,
    baseUrl: req.baseUrl,
    ip: req.ip,
    message: `Handling ${req.method} request`
});

export const UserController = {
    getUser,
    saveUser,
    updateUser,
    deleteUser,
};