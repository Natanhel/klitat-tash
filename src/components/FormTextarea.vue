<template>
  <v-textarea :value="value" :label="label" @change="$emit('input', value)" />
</template>

<script>
export default {
  name: "FormTextArea",
  props: {
    value: { defualt: () => "", required: true },
    label: { default: () => "" },
  },
};
</script>

<style>
</style>