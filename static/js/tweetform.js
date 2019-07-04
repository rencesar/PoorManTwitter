let errorsComponent = Vue.component('error-message', {
  template: `
    <p class="text-danger" style="font-size: 13px; margin: 5px">{{ getFirstErrorMessage() }}</p>
  `,
  props: {
    errors: {
      type: Array,
      default: []
    }
  },
  methods: {
    getFirstErrorMessage() {
      if(this.errors.length){
        return this.errors[0]
      }
      return ''
    }
  },
});


let tweetForm = Vue.component('tweet-form', {
  template: `
    <form @submit="checkingForm">
      <div class="mb-1">
        <label for="usernameInput">Your name:</label>
        <error-message v-bind:errors="errors.name"></error-message>
        <input v-model="name" id="usernameInput" type="text" class="form-control" placeholder="Name" maxlength="50" required>
      </div>
      <div class="mb-3">
        <label for="messageInput">Message:</label>
        <error-message v-bind:errors="errors.message"></error-message>
        <input v-model="message" id="messageInput" type="text" class="form-control" placeholder="Message" maxlength="50" required>
      </div>
      <button type="submit" class="btn btn-success" >Submit</button>
    </form>
  `,
  data () {
    return {
      name: '',
      message: '',
      errors: {name:[], message: []},
    }
  },
  methods: {
    async tweeting() {
      let response = await this.$http.post('/tweets/', {message: this.message, name: this.name}).then(
        response => {
          this.message = '';
          this.name = '';
          this.$emit('twitted');
        }, response => {
          this.handlingFailResponse();
        }
      );
    },

    checkingForm(e) {
      this.errors = {name:[], message: []};

      if (!this.name) {
        this.errors.name.push("Name required.");
      }
      if (!this.message) {
        this.errors.message.push("Message required.");
      }

      if(!!this.hasErrors()){
        return false
      }
      this.tweeting();
      e.preventDefault();
    },

    async handlingFailResponse(response){
      let data = await response.json();
      Object.entries(data).map(([field, error]) => {
        this.errors[field] = this.errors[field].concat(error)
      });
    },
    hasErrors() {
      return this.errors.message.length || this.errors.name.length
    }
  },
  components: {
    errorsComponent
  }
});