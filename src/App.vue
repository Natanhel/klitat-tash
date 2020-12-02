<template>

  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <v-app id="container">

      <h1>טופס קליטת ת"ש</h1>
      <tash-form/>
      <!-- <v-form
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
          v-model="familySelect"
          :items="familyItems"
          :rules="[v => !!v || 'נדרש להזין מצב משפחתי']"
          label="מה מצבך המשפחתי?"
          required
        ></v-select>

        <v-select
          v-model="haveKidsSelect"
          :items="haveKidsItems"
          :rules="[v => !!v || 'נדרש להזין']"
          label="האם יש לך ילדים?"
          required
        ></v-select>

        <v-select
          v-model="livingWithSelect"
          :items="livingWithItems"
          :rules="[v => !!v || 'נדרש להזין']"
          label="עם מי את\ה מתגורר\ת?"
          required
        ></v-select>
        
        <v-select
          v-model="parentsStatusSelect"
          :items="parentsStatusItems"
          :rules="[v => !!v || 'נדרש להזין']"
          label="מהי מידת הקשר והיחסים עם הוריך?"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'עליך לאשר על מנת להמשיך!']"
          label="מאשר שכל הנתונים נכונים?"
          required
        ></v-checkbox>

      
      </v-form> -->
    </v-app>
      <!-- <div class="upload"> -->
        
        <!-- <v-file-input 
                id="input-files" v-model="files" show-size counter  chips label="העלאת קבצים"></v-file-input>

        <v-btn
          color="blue"
          class="mr-4"
          @click="uploadFile"
        >
          העלה קובץ
        </v-btn> -->
        <!-- <iframe src="https://appload-files.herokuapp.com/" frameborder="0" style="width: 20rem; height: 10rem"></iframe>
      </div>
      <v-app class="btn-group">        
        <v-btn  
          color="success"
          class="mr-4"
          @click="validate"
        >
          שלח
        </v-btn>
      </v-app> -->
  </div>
</template>

<script>
import TashForm from '@/components/TashForm'
export default {
  name: 'App',
  components:{TashForm},
  data: () => ({
    familySelect: '',
    haveKidsSelect: '',
    livingWithSelect: '',
    parentsStatusSelect: '',

    userToken: '',
    files: null,
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
      'רווק/ה',
      'נשוי/ה',
      'גרוש/ה'
    ],
    haveKidsItems: [
      'כן', 'לא'
    ],
    livingWithItems: [
      'מתוגרר/ת עם ההורים (אחד מהם לפחות)',
      'איני מתגורר/ת עם ההורים'
    ],
    parentsRelationsItems: [
      'בקשר עם שניהם ויחסים תקינים',
      'בקשר וביחסיפ תקינים (רק עם אחד מהם)',
      'בקשר עם שניהם/אחד מהם ומערכת יחסים רעועה',
      'לא בקשר בכלל'
    ],
    parentsStatusItems: [
      'נשואים',
      'גרושים',
      'פרודים',
      'אלמנ/ה',
      'רווק/ה'
    ],
    checkbox: false,
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form
{
  width: 20rem;
}

#app 
{
  padding: 0; margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.v-btn
{
  width: 100px;
}

.btn-group{
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.upload
{
  display: flex;
  flex-direction: row;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} 

@media screen and (max-width: 500px) {
  .upload
  {
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  .v-input
  {
    width: 20rem;
  }
}

div.preview-images > img {
  width: 30%;
}

#container > div
{
  max-height: 73vh;
  min-height: 0%;
}
#app 
#app > div
{
  min-height: 0%;
}
</style>
