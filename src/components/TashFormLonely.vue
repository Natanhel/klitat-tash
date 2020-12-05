<template>
  <div>
    <yes-no-question
      v-model="isHousingBenefitWorthy"
      label="האם הינך זכאי להטבת דיור?"
    />
    <v-text-field
      v-if="isHousingBenefitWorthy"
      v-model="housingBenefitDetails"
      label="איזו?"
    />
    <yes-no-question
      v-model="isLonelySoldierCard"
      label="האם ברשותך תעודת בודד?"
    />
  </div>
</template>

<script>
import YesNoQuestion from "./YesNoQuestion.vue";
export default {
  components: { YesNoQuestion },
  name: "TashFormLonely",
  data:()=>({
      isHousingBenefitWorthy:'',
      housingBenefitDetails:'',
      isLonelySoldierCard:''
  })
};
</script>

<style>
</style>