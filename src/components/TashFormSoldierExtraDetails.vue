<template>
  <div>
    <yes-no-question
      v-model="isPrivateJob"
      label="האם הנך עובד בעבודה פרטית מחוץ לשעות הפעילות בצבא?"
    />
    <v-text-field
      v-if="isPrivateJob"
      v-model="privateJobDetails"
      label="ציין/י פרטי מקום עבודה"
    />
    <v-text-field v-model="criminalRecord" label="האם יש לך עבר פלילי?" />
    <yes-no-question
      v-model="isDentalNeeded"
      label="במידה והנך מטופל שיניים, האם אתה זקוק לשתל/כתר?"
    />
    <v-text-field v-if="isDentalNeeded" v-model="dentalNeededDetails" label="פרט/י" />
  </div>
</template>

<script>
import YesNoQuestion from "./YesNoQuestion.vue";
export default {
  name: "TashFormSoldierExtraDetails",
  components: { YesNoQuestion },
  data: () => ({
    isPrivateJob: "",
    privateJobDetails: "",
    criminalRecord: "",
    isDentalNeeded: "",
    dentalNeededDetails: "",
  }),
};
</script>

<style>
</style>