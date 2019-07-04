let tweets = Vue.component('tweets', {
  template: `
    <div class="bg-white p-4">
      <div class="row mt-1 p-2">
        <div class="col-lg-8 col-md-6 col-4" style="align-self: center;">Filter by</div>
        <div class="col-lg-2 col-md-3 col-4">
          <input name="orderBy" type="radio" class="form-check-input" id="nameOrderBy" v-model="orderBy" value="name">
          <label class="form-check-label" for="nameOrderBy">Name</label>
        </div>
        <div class="col-lg-2 col-md-3 col-4">
          <input name="orderBy" type="radio" class="form-check-input" id="dateOrderBy" v-model="orderBy" value="-date">
          <label class="form-check-label" for="dateOrderBy">Date</label>
        </div>
      </div>
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
      orderBy: '-date',
      tweetsList: []
    }
  },
  mounted () {
    this.fetchData();
  },
  watch: {
    orderBy: function () {
      this.fetchData();
    },
  },
  methods: {
    fetchData() {
      this.$http.get('/tweets/', {params: {order_by: this.orderBy}})
        .then(response => response.json()
          .then(data => (this.tweetsList = data))
        )
    },
  },
});
