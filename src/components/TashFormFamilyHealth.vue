<template>
  <div>
    <yes-no-question
      v-model="isFamilyHealthIssue"
      label="האם אחד מבני משפחת סובל מבעיה רפואית?"
    />
    <div v-if="isFamilyHealthIssue">
      <v-text-field v-model="familyHealthIssueCloseness" label="מה הקרבה?" />
      <form-select
        v-model="familyHealthIssueState"
        label="מצב בריאותי:"
        :items="familyHealthIssueStateItems"
      />
      <form-textarea
        v-model="familyHealthIssueDetails"
        label="כיצד בעייתו מפריעה על תפקודו? ומה מידת הסיוע שלך"
      />
    </div>
    <form-select
      v-model="familyIncapable"
      label="האם אחד מקרוביך מדרגת ראשונה?"
      :items="familyIncapableItems"
    />
    <div v-if="familyIncapable">
      <v-text-field v-model="familyIncapableCloseness" label="מה הקרבה?" />
      <date-menu v-model="familyIncapableDeathYear" label="שנת פטירה:" :dateModel="familyIncapableDeathYear"/>
    </div>
  </div>
</template>

<script>
import DateMenu from "./DateMenu.vue";
import FormSelect from "./FormSelect.vue";
import FormTextarea from "./FormTextarea.vue";
import YesNoQuestion from "./YesNoQuestion.vue";
export default {
  components: { YesNoQuestion, FormSelect, FormTextarea, DateMenu },
  name: "TashFormFamilyHealth",
  data: () => ({
    isFamilyHealthIssue: "",
    familyHealthIssueCloseness: "",
    familyHealthIssueState: "",
    familyHealthIssueStateItems: [
      "תקין",
      "סיעודי",
      "חולה סופני",
      "נפשי",
      "מאושפז וכל אחזקתו על חשבון המדינה",
      "אחר",
    ],
    familyHealthIssueDetails: "",
    familyIncapable: "",
    familyIncapableItems: [
      "נפטר בארץ",
      'נפטר בחו"ל',
      "כלוא",
      "מאושפז במוסד פסיכיאטרי",
      "אחר",
    ],
    familyIncapableCloseness: "",
    familyIncapableDeathYear: "",
  }),
};
</script>

<style>
</style>