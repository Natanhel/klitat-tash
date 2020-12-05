<template>
  <v-card>
      <div>נא לחתום כאן:</div>
    <div>
      <VueSignaturePad
        width="500px"
        height="200px"
        ref="signaturePad"
        style="z-index: 300"
      />
      <div>
        <v-btn @click="clear">נקה</v-btn>
        <v-btn @click="save">שמור</v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "FormSignaturePad",
  data: () => ({ menu: false }),
  methods: {
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
      this.menu = false;
    },
  },
};
</script>

<style>
</style>