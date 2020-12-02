<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-expansion-panels v-model="openedPanels" multiple>
      <v-expansion-panel v-for="(section, i) in sections" :key="i">
        <v-expansion-panel-header>{{section.header}}</v-expansion-panel-header>
        <v-expansion-panel-content> <component :is="section.component"/> </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-form>
</template>

<script>
export default {
  
  name: "TashForm",
  data: () => ({
    sections: [
      {header:"א. פרטי החייל",component:''},
     {header: "ב. אינדיקציות חייל",component:''},
     {header: "ג. אחים בצבא",component:''},
     {header: 'ד. האם החלת טיפול ת"ש בעבר',component:''},
     {header: "ה. פרטי המשפחה(קרובים מדרגה ראשונה)",component:''},
     {header: "ו. מערכת היחסית בבית",component:''},
     {header: "ז. המצב הכלכלי בבית",component:''},
     {header: "ח. פרטים נוספים על החייל/ת",component:''},
     {header: "ט. מצבם הרפואי של בני המשפחה",component:''},
     {header: "י. חייל נשוי (סעיף זה מיועד עבור חייל נשוי בלבד)",component:''},
     {header: "יא. במידה והינך מוכר כחייל בודד",component:''},
     {header: "יב. אחר",component:''},
    ],
    openedPanels:[0,1,2,4,5,6,7,8]
  }),
};
</script>

<style>
</style>