<template>
    <div class="cardstack">
        <div v-for="card in cardStack" v-bind:key="card.id">
            <CardDisplay v-bind="card" v-on:cardClicked="passThrough"/>
        </div>
    </div>
</template>

<script>
import CardDisplay from '@/components/CardDisplay.vue'
export default {
    components: {
        CardDisplay
    },
    computed: {
        cardStack() {
            return this.$root.$data.cardStack;
        }
    },
    methods: {
        passThrough(index) {
            console.log(index);
            this.$emit('passThrough', index)
        }
    },
    props: {
        h: Number
    }
}
</script>

<style scoped>

</style>