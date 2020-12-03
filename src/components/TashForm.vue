<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h5>
      חייל יקר! מילוי שאלון זה יאפשר להכיר אותך ולטפל בך באופן הטוב ביותר המשך
      שירותך הצבאי. המידע שתמלא בשאלון לא יפגע בך או בהמשך שירותך בצורה זו או
      אחרת אלא נועד להעניק לך את טיפול הת"ש המיטבי במהלך שירותך. במהלך מילוי
      השאלון תיתקל בשאלות שאינך מחויב להשיב עליהן מטעמי צנעת הפרט, אך מילוי
      סעיפים אלו יוכל לסייע במתן טיפול יעיל מצד גורמי הת"ש עבורך. המידע שתמלא
      מיועד לשימוש סגלי הת"ש בלבד ולא יועבר לגורמים נוספים.
    </h5>
    <v-expansion-panels v-model="openedPanels" multiple>
      <v-expansion-panel v-for="(section, i) in sections" :key="i">
        <v-expansion-panel-header>{{
          section.header
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <component :is="section.component" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-form>
  <!-- הוחלט מעכשיו לעשות הכל מקוסטם - לפתח רק את הקומפוננטות הגנריות החדשות -->
  <!-- הקומפוננטות הגנריות -->
  <!-- תיבת טקסט גדולה של כמה שורות -->
  <!-- טבלא של משפחה -->
</template>

<script>
import TashFormArmySiblings from './TashFormArmySiblings.vue';
import TashFormSoldierDetails from './TashFormSoldierDetails'
import TashFormSoldierIndication from './TashFormSoldierIndication.vue';
export default {
  name: "TashForm",
  data: () => ({
    valid: true,
    sections: [
      { header: "א. פרטי החייל", component: TashFormSoldierDetails },
      { header: "ב. אינדיקציות חייל", component: TashFormSoldierIndication },
      { header: "ג. אחים בצבא", component: TashFormArmySiblings },
      { header: 'ד. האם החלת טיפול ת"ש בעבר', component: "" },
      { header: "ה. פרטי המשפחה(קרובים מדרגה ראשונה)", component: "" },
      { header: "ו. מערכת היחסית בבית", component: "" },
      { header: "ז. המצב הכלכלי בבית", component: "" },
      { header: "ח. פרטים נוספים על החייל/ת", component: "" },
      { header: "ט. מצבם הרפואי של בני המשפחה", component: "" },
      {
        header: "י. חייל נשוי (סעיף זה מיועד עבור חייל נשוי בלבד)",
        component: "",
      },
      { header: "יא. במידה והינך מוכר כחייל בודד", component: "" },
      { header: "יב. אחר", component: "" },
    ],
    openedPanels: [0, 1, 4, 5, 6, 7, 8],
  }),
};
</script>

<style>
</style>