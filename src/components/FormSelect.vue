<template>
  <div>
    <v-select
      v-model="value"
      :items="items"
      :rules="[(v) => !!v || 'נדרש להזין']"
      :label="label"
      :required="required"
      @change="changeSelect"
    />
    <v-text-field
      v-if="other"
      v-model="value"
      @change="$emit('input', value)"
    />
  </div>
</template>

<script>
export default {
  name: "FormSelect",
  props: {
    value: {
      default: () => undefined,
    },
    label: {
      type: String,
      default: () => "",
    },
    items: {
      type: Array,
      default: () => [],
    },
    required: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({
    other: false,
  }),
  methods: {
    changeSelect() {
      this.other = this.value === "אחר" ? true : false;
      this.$emit("input", this.value);
    },
  },
};
</script>

<style>
</style>