<template>
  <div>
    <yes-no-question
      v-model="isParentHomeLiving"
      label="האם אתה מתגורר בבית הוריך?"
    />
    <v-text-field
      v-if="!isParentHomeLiving"
      v-model="parentsLastSpoken"
      label="במידה ולא מתי ראית אותם לאחרונה?"
    />
    <form-select
      v-model="parentsCloseness"
      label="מה טיב מערכת היחסית בינך לבין הוריך?"
      :items="parentsClosenessItems"
    />
    <form-select
      v-if="parentsCloseness === 'בקשר עם אחד מההורים בלבד'"
      v-model="singleParentCloseness"
      label="במידה וקיים קשר עם אחד מההורים בלבד"
      :items="singleParentClosenessItems"
    />
    <form-select
      v-model="parentFinancialSupport"
      label="מה מידת התמיכה של הוריך בך מבחינה כלכלית?"
      :items="parentFinancialSupportItems"
    />
  </div>
</template>

<script>
import FormSelect from "./FormSelect.vue";
import YesNoQuestion from "./YesNoQuestion.vue";
export default {
  components: { YesNoQuestion, FormSelect },
  name: "TashFormHomeRelation",
  data: () => ({
    isParentHomeLiving: "",
    parentsLastSpoken: "",
    parentsCloseness: "",
    parentsClosenessItems: [
      "יחסית תקינים",
      "מערכת יחסים רעועה",
      "אין קשר",
      "בקשר עם אחד מההורים בלבד",
    ],
    singleParentCloseness: "",
    singleParentClosenessItems: ["יחסים תקינים", "מערכת יחסים רעועה"],
    parentFinancialSupport: "",
    parentFinancialSupportItems: [
      "תומכים מבחינה כלכלית",
      "תומכים חלקית מבחינה כלכלית",
      "אינם תומכים בי כלל מבחינה כלכלית",
    ],
  }),
};
</script>

<style>
</style>