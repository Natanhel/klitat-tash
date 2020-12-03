<template>
  <div>
    <v-select
      v-model="model"
      :items="items"
      :rules="[(v) => !!v || 'נדרש להזין']"
      :label="label"
      :required="required"
      @change="other = model === 'אחר' ? true : false"
    />
    <v-text-field v-if="other" v-model="model" />
  </div>
</template>

<script>
export default {
  name: "FormSelect",
  props: {
    model: () => {
      return "";
    },
    label: () => {
      return "";
    },
    items: () => {
      return [];
    },
    required: () => {
      return false;
    },
  },
  data: () => ({
    other: false,
  }),
};
</script>

<style>
</style>