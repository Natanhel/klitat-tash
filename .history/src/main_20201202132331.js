import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

const express = require("express");
const app = express();
const initRoutes = require("./routes/web");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 4000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
