<template>
  <div>
    <div>נא לחתום כאן:</div>
    <div>
      <VueSignaturePad
        id="signature"
        height="200px"
        ref="signaturePad"
      />
      <div>
        <v-btn @click="clear">נקה</v-btn>
        <v-btn @click="save">שמור</v-btn>
      </div>
    </div>
  </div>
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

<style scoped>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, purple, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>