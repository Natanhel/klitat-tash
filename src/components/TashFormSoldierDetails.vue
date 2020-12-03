<template>
  <div>
    <v-text-field
      v-model="soldierName"
      :counter="32"
      :rules="nameRules"
      label="שם מלא"
      required
    />
    <v-text-field v-model="pernr" label="מספר אישי" required />
    <date-menu
      v-model="recruitDate"
      label="תאריך גיוס"
      :date-model="new Date().toISOString().substr(0, 10)"
    />
    <v-text-field
      v-model="prevUnit"
      :counter="32"
      :rules="nameRules"
      label="יחידה קודמת"
    />
    <date-menu
      :model="birthDate"
      label="תאריך לידה"
      :date-model="
        new Date(new Date().setFullYear(new Date().getFullYear() - 18))
          .toISOString()
          .substr(0, 10)
      "
    />
    <form-select
      :items="familyStatusItems"
      v-model="familyStatus"
      label="מצב משפחתי"
      required
    />
    <yes-no-question v-model="isImigrate" label="האם עלית לארץ?" />
    <div v-if="isImigrate">
      <!-- עלייה לארץ לאחר גיל 16 כן/לא - לחשב-->
      <date-menu
        v-model="immigrateDate"
        label="תאריך עלייה"
        :date-model="new Date().toISOString().substr(0, 10)"
      />
      <v-text-field v-model="imigrateState" label="ארץ עליה" />
    </div>
    <v-text-field v-model="parentImigrateState" label="ארץ לידת הוריך: אם/אב" />
    <v-text-field v-model="parentName" label="שם אם/אב" />
    <v-text-field v-model="parentNumber" label="מספר אם/אב" />
    <v-text-field
      v-model="address"
      label="כתובת: יישוב רחוב בית דירה כניסה מיקוד"
    />
    <form-select
      :items="livingTypeItems"
      v-model="livingType"
      label="סוג מגורים"
    />
  </div>
</template>

<script>
import DateMenu from "./DateMenu.vue";
import YesNoQuestion from "./YesNoQuestion.vue";
import FormSelect from "./FormSelect.vue";
export default {
  name: "TashFormSoldierDetails",
  components: { DateMenu, YesNoQuestion, FormSelect },
  data: () => ({
    nameRules: [
      (v) => !!v || "נדרש להזין שם",
      (v) => !(v && v.length <= 4) || "על השם להיות ארוך מ-4 תווים",
    ],
    familyStatusItems: ["רווק/ה", "פרוד/ה", "גרוש/ה", "נשוי/אה", "אלמן/ה"],
    livingTypeItems: [
      "החייל משלם שכר דירה",
      "דירה בבעלות החייל עליה משלם משכנתא",
      "דירה בבעלות החייל עליה לא משלם משכנתא",
      "דירה בבעלות הורי החייל",
      "דירה בבעלות הורי בת",
      "בן זוג",
      "בית החייל",
      'דירה אל"ח',
      "אחר",
    ],
    isImigrate: false,
    soldierName: "",
    pernr: "",
    recruitDate: new Date(),
    prevUnit: "",
    birthDate: new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
    familyStatus: "",
    immigrateDate: "",
    imigrateState: "",
    parentImigrateState: "",
    parentName: "",
    parentNumber: "",
    address: "",
    livingType: "",
  }),
};
</script>

<style>
</style>