<template>
  <v-card>
    <v-text-field v-model="benfitRefused" label="אני חותם ויתור לבקשת" />
    <form-textarea v-model="benfitRefuseReason" label="מהסיבות הבאות:" />
    <form-signature-pad />
  </v-card>
</template>

<script>
import FormSignaturePad from "./FormSignaturePad.vue";
import FormTextarea from "./FormTextarea.vue";
export default {
  components: { FormSignaturePad, FormTextarea },
  name: "TashFormRefuse",
  data: () => ({
    TashFormRefuse: "",
    benfitRefuseReason: "",
  }),
};
</script>

<style>
</style>