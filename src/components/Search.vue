<template>
    <div class="search">
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Search for your favorite {{ title }}</h1>
                </div>
                <div class="flex items-end">
                    <div class="relative mt-4 mr-3">
                        <input id="search" v-model="query" @change="queryChanged" name="search" class="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: "",
        }
    },
    props: [
        'title'
    ],
    methods: {
        queryChanged() {
            this.$emit('queryChanged', this.query);
        }
    }
}
</script>