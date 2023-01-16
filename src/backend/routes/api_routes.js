const AppController = require("../controllers/App/AppController");

module.exports = (router) => {
  router.post("/add-space", AppController.addSpace);
  router.get("/get-spaces", AppController.getSpaces);
};
