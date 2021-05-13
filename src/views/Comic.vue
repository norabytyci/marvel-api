<template>
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="character.thumbnail.path + '.' + character.thumbnail.extension">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ character.name || character.title }}</h1>
        <p class="leading-relaxed">{{ character.description }}</p>
          <router-link to="/" class="inline-block mt-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Go Back</router-link>
      </div>
    </div>
  </div>
</section>
</template>

<script>
    export default {
        data() {
            return {
                character: {
                    thumbnail: {}
                }
            }
        },
        async mounted() {
            const id = this.$route.params.id;
            const data = await this.$axios.get(`/v1/public/comics/${id}`);
            this.character = data.data.data.results[0];
        }
    }
</script>
