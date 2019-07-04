let tweets = Vue.component('tweets', {
    template: `
      <div class="bg-white p-4">
        <div v-for="tweet in tweetsList" class="list-group mt-1 shadow-sm p-2 rounded">
          <div class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="float-right">
              <small>{{ tweet.date }}</small>
            </div>
            <p class="mb-1">{{ tweet.message }}</p>
            <small>{{ tweet.name }}</small>
          </div>
        </div>
      </div>
  `,
  props: ['tweetsList'],
  data: function () {
    return {
      tweetsList: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetch('/tweets/').then(response => response.json()).then(data => (this.tweetsList = data))
    },
  },
});
