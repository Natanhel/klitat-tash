<template>
  <div id="app">
    <v-app>

      <h1>טופס קליטת ת"ש</h1>

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

      <div class="upload">
        
        <v-file-input v-model="files" show-size counter  chips label="העלאת קבצים"></v-file-input>

        <v-btn
          color="blue"
          class="mr-4"
          @click="uploadFile"
        >
          העלה קובץ
        </v-btn>
      </div>
      <div class="btn-group">        
        <v-btn  
          color="success"
          class="mr-4"
          @click="validate"
        >
          שלח
        </v-btn>
      </div>
      
      </v-form>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  mounted(){
    this.loginUser()
  },
  
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
    loginUser(){
      
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
        this.userToken = response.data.token
      })
      .catch((error) => {
        console.log(error);
      })
    },
    validate () {
      this.$refs.form.validate()
    },
    async uploadFile() {
      
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.files);

        /*
          Make the request to the POST /single-file URL
        */
      const BASE_URL = 'http://localhost:3001';

      const url = `${BASE_URL}/photos/upload`;
      return axios.post(url, formData)
          // get data
          .then(x => x.data)
          // add url field
          .then(x => x.map(img => Object.assign({},
              img, { url: `${BASE_URL}/images/${img.id}` })))
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
}

.upload
{
  display: flex;
  flex-direction: row;
  width: 20rem;
} 

@media screen and (max-width: 500px) {
  .upload
  {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .v-input
  {
    width: 20rem;
  }
}
</style>
