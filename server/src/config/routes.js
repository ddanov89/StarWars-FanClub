const { catalogRouter } = require("../controllers/catalog");
const { movieRouter } = require("../controllers/movie");
const { userRouter } = require("../controllers/user");

function configRoutes(app) {
    app.use(catalogRouter);
    app.use(userRouter);
    app.use(movieRouter);

    app.use('*', (req, res) => {
        res.status(404).end();
    });
}

module.exports = { configRoutes };