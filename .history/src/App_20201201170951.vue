<template>
  <div id="app">
    <v-app>

      <h1>קךיטת ת"ש</h1>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="32"
          :rules="nameRules"
          label="שם מלא"
          required
        ></v-text-field>
        
        <v-text-field
          v-model="pernr"
          :counter="7"
          :rules="pernrRules"
          label="מספר אישי"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'נדרש להזין פלוגה ומחלקה']"
          label="פלוגה ומחלקה"
          required
        ></v-select>

        <v-select
          v-model="select"
          :items="familyItems"
          :rules="[v => !!v || 'נדרש להזין מצב משפחתי']"
          label="מה מצבך המשפחתי?"
          required
        ></v-select>

        <v-select
          v-model="select"
          :items="haveKidsItems"
          :rules="[v => !!v || 'נדרש להזין']"
          label="האם יש לך ילדים?"
          required
        ></v-select>

        <v-select
          v-model="select"
          :items="livingWithItems"
          :rules="[v => !!v || 'נדרש להזין']"
          label="עם מי את\ה מתגורר\ת?"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'עליך לאשר על מנת להמשיך!']"
          label="מאשר שכל הנתונים נכונים?"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          בדוק
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          אפס טופס
        </v-btn>

        <v-btn
          color="warning"
          @click="resetValidation"
        >
          אפס בדיקה
        </v-btn>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  mounted(){
    // login
    const data = JSON.stringify({"password":"passward","email":"natanhelp@gmail.com"});

    const config = {
      method: 'post',
      url: 'https://nat-task-manager.herokuapp.com/users/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      })
  },
  
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'נדרש להזין שם',
      v => !(v && v.length <= 4) || 'על השם להיות ארוך מ-4 תווים',
    ],
    pernr: '',
    pernrRules: [
      v => !!v || 'נדרש להזין מספר אישי',
      v => !(v.length !== 7) || 'על המספר להיות בדיוק 7 תווים'
    ],
    select: null,
    items: [
      'ו1',
      'ו2',
      'ו3',
      'ו4',
      'ו5',
    ],
    familyItems: [
      'רווק\\ה',
      'נשוי\\ה',
      'גרוש\\ה'
    ],
    haveKidsItems: [
      'כן', 'לא'
    ],
    livingWithItems: [
      'מתוגרר\\ת עם ההורים (אחד מהם לפחות)',
      'איני מתגורר\\ת עם ההורים'
    ],
    checkbox: false,
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

form
{
  width: 300px;
}

#app 
{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
