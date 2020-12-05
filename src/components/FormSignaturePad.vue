<template>
  <div>
    <div>נא לחתום כאן:</div>
    <div>
      <VueSignaturePad
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

<style>
</style>