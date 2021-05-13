<template>
  <div class="home">
    <Search @queryChanged="changedQuery" title="comics" />
    <List title="comics" :characters="filteredList"/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import List from '@/components/List.vue';

export default {
  name: 'Comics',
  data() {
    return {
      comics: [],
      query: ''
    }
  },
  async mounted() {
    for(let i = 0; i <= 100; i+=100) {
        const data = await this.$axios.get(`/v1/public/comics?limit=100&offset=${i}`);
        this.comics = this.comics.concat(data.data.data.results);
    }
  },
  computed: {
    filteredList() {
      return this.comics.filter(char => {
        return char.title.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },
  components: {
    Search,
    List
  },
  methods: {
    changedQuery(q) {
      this.query = q;
    },
  }
}
</script>
