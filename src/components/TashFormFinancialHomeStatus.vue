<template>
  <div>
    <form-select
      v-model="homeEquipmentShortage"
      :items="homeEquipmentShortageItemes"
      label="האם קיים בביתך מחסור של ציוד בסיסי?"
    />
    <yes-no-question v-model="isDebt" label="האם הינך מצוי בחובות?" />
    <div v-if="isDebt">
      <v-text-field v-model="debtAmout" label="מהו הסכום?" />
      <v-text-field v-model="debtReason" label="מהו מקור החוב?" />
    </div>
    <yes-no-question
      v-model="isFamilySocialSecurity"
      label="האם אחד מבני משפחתך(קרוב מדרגה ראשונה) זכאי לקצבה מהמוסד לביטוח לאומי?"
    />
    <v-text-field
      v-if="isFamilySocialSecurity"
      v-model="familySocialSecurityDetails"
      label="ציין/י את בן המשפחה, סוג וסכום הקצבה"
    />
    <form-select
      v-model="parentsSalary"
      :items="parentsSalaryItems"
      label="במידה וההורים עובדים, מהו גובה משכורתם (הכנסה של שני ההורים ביחד)"
    />
    <yes-no-question
      v-model="isFamilyOtherIncome"
      label="האם יש הכנסות נוספות למשפחתך?"
    />
    <form-select
      v-if="isFamilyOtherIncome"
      v-model="familyOtherIncome"
      :items="familyOtherIncomeItems"
      label="פרט/י מהו מקור ההכנסה הנוסף"
    />
    <v-text-field
      v-model="familyBrutoIncome"
      label="מהו סך ההכנסות ברוטו של המשפחה?"
    />
    <yes-no-question
      v-model="isFamilyOwnCar"
      label="האם יש רכב בבעלות משפחתך?"
    />
    <div v-if="isFamilyOwnCar">
      <v-text-field
        v-model="familyCarsNumber"
        label="ציין כמה רכבים בבעלות משפחתך"
      />
      <form-select
        v-model="permanentCarUse"
        label="האם קיים שימוש קבוע ברכב?"
        :items="permanentCarUseItems"
      />
      <form-select
        v-model="carPurpose"
        label="למה משמש הרכב?"
        :items="carPurposeItems"
      />
    </div>
    <yes-no-question
      v-model="isFamilyWelfared"
      label="האם המשפחה מטופלת על ידי גורמי רווחה?"
    />
    <v-text-field
      v-if="isFamilyWelfared"
      v-model="familyWelfaredDetails"
      label="ציין פרטי גורם הרווחה"
    />
    <yes-no-question
      v-model="isParentsInDebt"
      label="האם הוריך מצויים בחובות?"
    />
    <div v-if="isParentsInDebt">
      <v-text-field v-model="parentsDebtAmount" label="מה הוא הסכום" />
      <v-text-field v-model="parentsDebtReason" label="מה מקור החוב" />
    </div>
  </div>
</template>

<script>
import FormSelect from "./FormSelect.vue";
import YesNoQuestion from "./YesNoQuestion.vue";
export default {
  components: { FormSelect, YesNoQuestion },
  name: "TashFormFinancialHomeStatus",
  data: () => ({
    homeEquipmentShortage: "",
    homeEquipmentShortageItemes: [
      "מזון",
      "ריהוט",
      "מוצרי חשמל",
      "מוצרי הגיינה",
      "אחר",
    ],
    isDebt: "",
    debtReason: "",
    debtAmout: "",
    isFamilySocialSecurity: "",
    familySocialSecurityDetails: "",
    parentsSalary: "",
    parentsSalaryItems: [
      "מתחת לשכר מינימום",
      'שכר מינימום(4,825ש"ח)',
      'גבוה משכר מינימום אך מתחת ל-5,500 ש"ח',
      'גבוה מ-5,500 ש"ח',
    ],
    isFamilyOtherIncome: "",
    familyOtherIncome: "",
    familyOtherIncomeItems: [
      "קצבה בהליך תביעה",
      "פנסיה",
      "אבטלה",
      "מזונות",
      "סיוע מבני משפחה",
      "כולל",
      "דירה",
      "אחר",
    ],
    familyBrutoIncome: "",
    familyCarsNumber: "",
    isFamilyOwnCar: "",
    permanentCarUse: "",
    permanentCarUseItems: ["שלוש פעמים בשבוע", "הוצאות על דלק על סך 400"],
    carPurpose: "",
    carPurposeItems: ["פרטי", "צורכי עבודה", "ניידות(נכות)", "אחר"],
    isFamilyWelfared: "",
    familyWelfaredDetails: "",
    isParentsInDebt: "",
    parentsDebtAmount: "",
    parentsDebtReason: "",
  }),
};
</script>

<style>
</style>