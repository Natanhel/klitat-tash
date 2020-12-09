<template>
  <v-checkbox
    v-show="showIndication"
    v-model="wantsTashmash"
    label='הוא זכאי לפתוח בקשת תשמ"ש האם רוצה?'
  />
</template>

<script>
export default {
  name: "TashFormBenefitSelection",
  props: { showIndication: { type: Boolean, default: () => false } },
  data:()=>({
      wantsTashmash:false
  })
};
</script>

<style>
</style>