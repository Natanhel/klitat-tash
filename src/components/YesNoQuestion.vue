<template>
  <div>
    <p class="text-center">{{label}}</p>
    <v-btn-toggle rounded>
      <v-btn @click="$emit('yes')"> כן </v-btn>
      <v-btn @click="$emit('no')"> לא </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: "YesNoQuestion",
  props: {
    label: () => {
      return "";
    },
  },
};
</script>

<style>
</style>