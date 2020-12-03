<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="model"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        hint="MM/DD/YYYY format"
      />
    </template>
    <v-date-picker :v-model="dateModel" />
  </v-menu>
</template>

<script>
export default {
  name: "DateMenu",
  props: { model:()=>{return ''}, label:()=>{return ''}, dateModel:()=>{return ''} },
};
</script>

<style>
</style>