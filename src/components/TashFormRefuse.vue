<template>
  <div>
    <v-text-field v-model="benfitRefused" label="אני חותם ויתור לבקשת" />
    <form-textarea v-model="benfitRefuseReason" label="מהסיבות הבאות:" />
  </div>
</template>

<script>
import FormTextarea from "./FormTextarea.vue";
export default {
  components: { FormTextarea },
  name: "TashFormRefuse",
  data: () => ({
    benfitRefused: "",
    benfitRefuseReason: "",
  }),
};
</script>

<style>
</style>