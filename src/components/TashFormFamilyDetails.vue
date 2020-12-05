<template>
  <div>
    דגש - במידה והנך מתגורר/ת עם קרוב שאינו מדרגה ראשונה יש לציין בטבלה
    <v-container class="grey lighten-5">
      <v-row>
        <v-card
          v-for="(partner, index) in partners"
          :key="index"
          class="relative-card"
        >
          <v-col cols="12">
            <v-text-field v-model="partner.partnerCloseness" label="קרבה" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="partner.partnerName" label="שם מלא" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="partner.partnerSex" label="מין" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="partner.partnerAge" label="גיל" />
          </v-col>
          <v-col cols="12">
            <form-select
              :items="partnerStatusItems"
              v-model="partner.partnerStatus"
              label="מצב משפחתי"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="partner.partnerAddress" label="כתובת" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="partner.partnerPhone" label="טלפון" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="partner.partnerOccupation" label="עיסוק" />
          </v-col>
        </v-card>
      </v-row>
      <v-btn icon @click="addPartner"><v-icon>mdi-plus</v-icon></v-btn>
    </v-container>
    <v-text-field
      label="מס' חדרי שינה בבית(לא כולל סלון):"
      v-model="homeRooms"
    />
    <v-text-field
      label="מס' נפשות המתגוררות בבית:"
      v-model="homePeopleNumber"
    />
  </div>
</template>

<script>
import FormSelect from "./FormSelect.vue";
export default {
  components: { FormSelect },
  name: "TashFormFamilyDetails",
  data: () => ({
    homeRooms: "",
    homePeopleNumber: "",
    partnerStatusItems: ["רווק/ה", "פרוד/ה", "גרוש/ה", "נשוי/אה", "אלמן/ה"],
    partners: [
      {
        partnerCloseness: "אב/אם",
        partnerName: "",
        parnerSex: "",
        parnerAge: "",
        partnerStatus: "",
        partnerAddress: "",
        partnerPhone: "",
        partnerOccupation: "",
      },
      {
        partnerCloseness: "אח/ות",
        partnerName: "",
        parnerSex: "",
        parnerAge: "",
        partnerStatus: "",
        partnerAddress: "",
        partnerPhone: "",
        partnerOccupation: "",
      },
      {
        partnerCloseness: "",
        partnerName: "",
        parnerSex: "",
        parnerAge: "",
        partnerStatus: "",
        partnerAddress: "",
        partnerPhone: "",
        partnerOccupation: "",
      },
    ],
  }),
  methods: {
    addPartner() {
      this.partners.push({
        partnerCloseness: "",
        partnerName: "",
        parnerSex: "",
        parnerAge: "",
        partnerStatus: "",
        partnerAddress: "",
        partnerPhone: "",
        partnerOccupation: "",
      });
    },
  },
};
</script>

<style scoped>
.relative-card {
  margin-bottom: 10px;
}
</style>