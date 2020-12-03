<template>
  <div>
    <p class="text-center">{{ label }}</p>
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
      required:true
    },
  },
};
</script>

<style>
</style>