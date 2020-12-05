<template>
  <div>
    <yes-no-question
      v-model="isWithoutPhysicalTash"
      label='האם לחייל קיים תיק ת"ש ידני אך הגיע ללא התיק הידני עליו?'
    />
    <div v-if="isWithoutPhysicalTash">נא להחתים אותו</div>
    <form-textarea
      v-model="extraToShare"
      label="האם הנך מעוניין/ת לשתף אותנו בדברים נוספים?"
    />
  </div>
</template>

<script>
import FormTextarea from "./FormTextarea.vue";
import YesNoQuestion from "./YesNoQuestion.vue";
export default {
  components: { YesNoQuestion, FormTextarea },
  name: "TashFormOther",
  data: () => ({
    isWithoutPhysicalTash: "",
    extraToShare: "",
  }),
};
</script>

<style>
</style>