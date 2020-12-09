<template>
  <v-menu
    ref="menu1"
    v-model="menu"
    transition="scale-transition"
    offset-y
    min-width="290px"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="computedDateFormatted"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        hint="DD/MM/YYYY format"
      />
    </template>
    <v-date-picker v-model="dateModel" no-title @input="menu=false"/>
  </v-menu>
</template>

<script>
export default {
  name: "DateMenu",
  props: {
    value: { default: () => undefined },
    label: { type: String, default: () => "",required:true },
    dateModel: { type: String, default: () => new Date() },
  },
  data: () => ({
    menu: false,
  }),
  computed:{
    computedDateFormatted(){
       return this.formatDate(this.dateModel)
    }
  },
  methods:{
    formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day,month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
  }
};
</script>

<style>
</style>