<template>
  <form-textarea v-model="previousTash" :label="previousTashLabel" />
</template>

<script>
import FormTextarea from "./FormTextarea.vue";
export default {
  components: { FormTextarea },
  name: "TashFormPreviousTash",
  data: () => ({
    previousTash: "",
    previousTashLabel:
      "ציין/י אילו בקשות ובאיזה שלב טיפול הן",
  }),
};
</script>

<style>
</style>