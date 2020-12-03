<template>
  <div>
    <yes-no-question v-model="isKibutzMember" label="האם הנך חבר קיבוץ?" />
    <yes-no-question
      v-if="isKibutzMember"
      v-model="isKibutzMufrat"
      label="האם הקיבוץ מופרט?"
    />
    <yes-no-question
      v-for="(indication, index) in indications"
      :key="index"
      v-model="indication.model"
      :label="indication.label"
    />
  </div>
</template>

<script>
import YesNoQuestion from "./YesNoQuestion.vue";
export default {
  name: "TashFormSoldierIndication",
  components: { YesNoQuestion },
  data: () => ({
    isKibutzMember: false,
    isKibutzMufrat: false,
    indications: [
      {
        label: "האם יש תחבורה ציבורית ליישובך?",
        name: "isSettlementTransposed",
        model: false,
      },
      {
        label: "בן/בת למשפחה שכולה/נפגעת פעולות איבה?",
        name: "isShakulFamily",
        model: false,
      },
      { label: "בן יחיד לאחד מהוריך?", name: "isSingleChild", model: false },
      { label: "מנהל אורח חיים טבעוני?", name: "isVegan", model: false },
      { label: "בן העדה הקראית/שמרונית?", name: "isShomroni", model: false },
      { label: "בן לקהילת העבריים מדימונה?", name: "isIvri", model: false },
      { label: "משתייך לקהילת בית-אל?", name: "isBitEl", model: false },
    ],
  }),
};
</script>

<style>
</style>