<template>
  <div>
    <date-menu v-model="marriageDate" label="תאריך נישואין:" />
    <yes-no-question v-model="hasChildren" label="האם יש לך ילדים?" />
    <v-text-field
      v-if="hasChildren"
      v-model="childrenNumber"
      label="מספר הילדים:"
    />
    <yes-no-question
      v-model="isSpouseIsraelian"
      label="האם בת/בן זוגך בעל אזרחות ישראלית?"
    />
    <yes-no-question v-model="isSpousePregnant" label="האם בת זוגך בהריון?" />
    <v-text-field
      v-if="isSpousePregnant"
      v-model="spousePregnantWeek"
      label="שבוע הריון:"
    />
    <yes-no-question
      v-model="isTashmashWorthy"
      label="האם זכאי לתשלומי משפחה?"
    />
    <yes-no-question
      v-model="isRentalAssistant"
      label="האם זקוק לסיוע בשכר דירה?"
    />
    <yes-no-question
      v-model="isMarriedSoldierAgra"
      label="האם קיבלת איגרת לחייל הנשוי?"
    />
    <yes-no-question
      v-model="isExSpouceInIsrael"
      label="במידה והנך גרוש/ה, האם גרושך/ גרושתך גר/ה בישראל?"
    />
    <v-text-field v-model="spouceName" label="שם בת/בן זוגך:" />
    <v-text-field v-model="spouceAge" label="גיל:" />
    <v-text-field v-model="spouceHealth" label="מצב רפואי:" />
    <form-select
      v-model="spouceOccupation"
      :items="spouceOccupationItems"
      label="עיסוק:"
    />
    <v-text-field v-model="spouceIncome" label="סך הכנסות בת/בן זוגך:" />
  </div>
</template>

<script>
import DateMenu from "./DateMenu.vue";
import FormSelect from './FormSelect.vue';
import YesNoQuestion from "./YesNoQuestion.vue";
export default {
  components: { DateMenu, YesNoQuestion, FormSelect },
  name: "TashFormMarried",
  data: () => ({
    marriageDate: "",
    hasChildren: "",
    childrenNumber: "",
    isSpouseIsraelian: "",
    isSpousePregnant: "",
    spousePregnantWeek: "",
    isTashmashWorthy: "",
    isRentalAssistant: "",
    isMarriedSoldierAgra: "",
    isExSpouceInIsrael: "",
    spouceName: "",
    spouceAge: "",
    spouceHealth: "",
    spouceOccupation: "",
    spouceOccupationItems: [
      "מובטל/ת",
      "עובד/ת",
      "עובד/ת ולומד/ת",
      "לומד/ת בלבד",
      "בהריון",
      "שירות לאומי",
      "חייל/ת",
      "אחר",
    ],
    spouceIncome: "",
  }),
};
</script>

<style>
</style>