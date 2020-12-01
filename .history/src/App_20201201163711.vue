<template>
  <div id="app">
    Hello World
  </div>
</template>

<script>
import ax from '@/components/ax.vue';


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    // login
    const data = JSON.stringify({"password":"passward","email":"natanhelp@gmail.com"});

    const config = {
      method: 'post',
      url: 'https://nat-task-manager.herokuapp.com/users/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
