<template>
  <v-textarea v-model="value" :label="label" />
</template>

<script>
export default {
  name: "FormTextArea",
  props: { value: { defualt: () => "" }, label: { default: () => "" } },
};
</script>

<style>
</style>