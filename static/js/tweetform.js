let tweetForm = Vue.component('tweet-form', {
    template: `
        <form>
            <div class="mb-1">
                <label for="usernameInput">Your name:</label>
                <input v-model="username" id="usernameInput" type="text" class="form-control" placeholder="Name" maxlength="50">
            </div>
            <div class="mb-3">
                <label for="messageInput">Message:</label>
                <input v-model="message" id="messageInput" type="text" class="form-control" placeholder="Message" maxlength="50">
            </div>
    
            <button type="button" class="btn btn-primary" v-on:click="tweeting">Primary</button>
        </form>
    `,
    data () {
      return {
        username: '',
        message: '',
      }
    },
    methods: {
      tweeting() {
        fetch('/tweets/', {
            method: 'POST',
            body: JSON.stringify({message: this.message, name: this.username}),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            this.message = '';
            this.username = '';
        })
      }
    },
});