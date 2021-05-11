<template>
  <div class="home">
    <Search @queryChanged="changedQuery" />
    <CharacterList :characters="filteredList"/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import CharacterList from '@/components/characters/CharacterList.vue';

export default {
  name: 'Home',
  data() {
    return {
      characters: [],
      query: ''
    }
  },
  async mounted() {
    for(let i = 0; i <= 100; i+=100) {
        const data = await this.$axios.get(`/v1/public/characters?limit=100&offset=${i}`);
        this.characters = this.characters.concat(data.data.data.results);
    }
  },
  computed: {
    filteredList() {
      return this.characters.filter(char => {
        return char.name.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },
  components: {
    Search,
    CharacterList
  },
  methods: {
    changedQuery(q) {
      this.query = q;
    },
  }
}
</script>
