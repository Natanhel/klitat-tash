const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");


let routes = app => {
  router.get("/", homeController.getHome);

  router.post("/upload", uploadController.uploadFile);

  router.get('/serve/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
  
      if (!user || !user.avatar) {
        return new Error()
      }
  
      res.set('Content-Type', 'image/png')
      res.send(user.avatar)
    } catch (e) {
      res.status(404),send()
    }
  })

  return app.use("/", router);
};

module.exports = routes;