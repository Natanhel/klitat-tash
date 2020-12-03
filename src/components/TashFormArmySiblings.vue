<template>
  <div>
    <yes-no-question
      v-model="isArmySibling"
      label='האם אחד מאחיך משרת בצה"ל?'
    />
    <div v-if="isArmySibling">
      <v-text-field label="שם האח/ות" v-model="siblingName" />
      <v-text-field label="מספר אישי של האח/ות" v-model="siblingPernr" />
      <v-text-field label="איפה הוא/היא משרת/ת" v-model="siblingService" />
      <yes-no-question
        v-model="isSiblingBenefit"
        label="האם זכאי להטבות כלשהן: תשלומי משפחה/בודד/הקלות בתנאי שירות"
      />
    </div>
  </div>
</template>

<script>
import YesNoQuestion from "./YesNoQuestion.vue";
export default {
  components: { YesNoQuestion },
  name: "TashFormArmySiblings",
  data: () => ({
    isArmySibling: false,
    siblingName: "",
    siblingPernr: "",
    siblingService: "",
    isSiblingBenefit: false,
  }),
};
</script>

<style>
</style>