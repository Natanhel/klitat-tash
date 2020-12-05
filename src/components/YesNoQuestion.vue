<template>
  <div>
    <p class="label">{{ label }}</p>
    <v-btn-toggle rounded>
      <v-btn @change="$emit('input', true)"> כן </v-btn>
      <v-btn @change="$emit('input', false)"> לא </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: "YesNoQuestion",
  props: {
    value: {
      default: () => false,
    },
    label: {
      type: String,
      default: () => "",
      required: true,
    },
  },
};
</script>

<style scoped>
.label {
  margin-bottom: 0;
  padding-top:20px;
}
</style>