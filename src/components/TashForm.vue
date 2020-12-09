<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card>
      חייל יקר! מילוי שאלון זה יאפשר להכיר אותך ולטפל בך באופן הטוב ביותר המשך
      שירותך הצבאי. המידע שתמלא בשאלון לא יפגע בך או בהמשך שירותך בצורה זו או
      אחרת אלא נועד להעניק לך את טיפול הת"ש המיטבי במהלך שירותך. במהלך מילוי
      השאלון תיתקל בשאלות שאינך מחויב להשיב עליהן מטעמי צנעת הפרט, אך מילוי
      סעיפים אלו יוכל לסייע במתן טיפול יעיל מצד גורמי הת"ש עבורך. המידע שתמלא
      מיועד לשימוש סגלי הת"ש בלבד ולא יועבר לגורמים נוספים.
    </v-card>
    <v-expansion-panels v-model="openedPanels" multiple>
      <v-expansion-panel v-for="(section, i) in sections" :key="i">
        <v-expansion-panel-header>{{
          section.header
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <component :is="section.component" @toggle-indication='toggleIndication'/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <form-signature-pad />
    <tash-form-benefit-selection :showIndication="showIndication" />
    <div>שיהיה בהצלחה! אנו עומדים לשירותך בכל עת, משרד הת"ש</div>
    <v-btn color="success" class="mr-4" @click="validate"> שלח </v-btn>
  </v-form>
  <!-- הוחלט מעכשיו לעשות הכל מקוסטם - לפתח רק את הקומפוננטות הגנריות החדשות -->
  <!-- הקומפוננטות הגנריות -->
  <!-- טבלא של משפחה -->
</template>

<script>
import FormSignaturePad from "./FormSignaturePad.vue";
import TashFormArmySiblings from "./TashFormArmySiblings.vue";
import TashFormBenefitSelection from './TashFormBenefitSelection.vue';
import TashFormFamilyDetails from "./TashFormFamilyDetails.vue";
import TashFormFamilyHealth from "./TashFormFamilyHealth.vue";
import TashFormFinancialHomeStatus from "./TashFormFinancialHomeStatus.vue";
import TashFormHomeRelation from "./TashFormHomeRelation.vue";
import TashFormLonely from "./TashFormLonely.vue";
import TashFormMarried from "./TashFormMarried.vue";
import TashFormOther from "./TashFormOther.vue";
import TashFormPreviousTash from "./TashFormPreviousTash.vue";
import TashFormRefuse from "./TashFormRefuse.vue";
import TashFormSoldierDetails from "./TashFormSoldierDetails";
import TashFormSoldierExtraDetails from "./TashFormSoldierExtraDetails.vue";
import TashFormSoldierIndication from "./TashFormSoldierIndication.vue";
export default {
  name: "TashForm",
  components: { FormSignaturePad, TashFormBenefitSelection },
  data: () => ({
    valid: true,
    sections: [
      { header: "א. פרטי החייל", component: TashFormSoldierDetails },
      { header: "ב. אינדיקציות חייל", component: TashFormSoldierIndication },
      { header: "ג. אחים בצבא", component: TashFormArmySiblings },
      { header: 'ד. האם החלת טיפול ת"ש בעבר', component: TashFormPreviousTash },
      {
        header: "ה. פרטי המשפחה(קרובים מדרגה ראשונה)",
        component: TashFormFamilyDetails,
      },
      { header: "ו. מערכת היחסית בבית", component: TashFormHomeRelation },
      { header: "ז. המצב הכלכלי בבית", component: TashFormFinancialHomeStatus },
      {
        header: "ח. פרטים נוספים על החייל/ת",
        component: TashFormSoldierExtraDetails,
      },
      {
        header: "ט. מצבם הרפואי של בני המשפחה",
        component: TashFormFamilyHealth,
      },
      {
        header: "י. חייל נשוי (סעיף זה מיועד עבור חייל נשוי בלבד)",
        component: TashFormMarried,
      },
      { header: "יא. במידה והינך מוכר כחייל בודד", component: TashFormLonely },
      { header: "יב. אחר", component: TashFormOther },
      { header: "ויתור על בקשות", component: TashFormRefuse },
    ],
    openedPanels: [0, 1, 4, 5, 6, 7, 8, 11],
    showIndication: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    toggleIndication(){
      this.showIndication = !this.showIndication
    }
  },
};
</script>

<style>
</style>