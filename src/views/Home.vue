<template>
  <div class="home">
    <AppTop v-bind:title="'E-Wallet'" v-bind:subTitle="'Active Card'"/>
    <CardDisplay v-bind="activeCard" class="margin"/>
    <CardStack 
      v-bind:passThrough="newIndex"
      v-on:passThrough="newIndex = $event"
    />
    <router-link to="/addcard"><button>Add new card</button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import CardDisplay from "@/components/CardDisplay.vue";
import CardStack from "@/components/CardStack.vue";
import AppTop from "@/components/AppTop.vue";

export default {
  name: "Home",
  components: {
    CardDisplay,
    CardStack,
    AppTop
  },
  data() {
    return {
      newIndex: ""
    }
  },
  computed: {
    activeCard() {
      console.log("newIndex sist: " + this.newIndex)
      console.log(this.$root.$data.cardStack)
      if (this.newIndex === "") {
        return this.$root.$data.cardStack[0]
      }
      else {
        return this.$root.$data.cardStack[this.newIndex]
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&family=Source+Sans+Pro:wght@400;700&display=swap');
body {
  font-family: 'Source Sans Pro', sans-serif;
}
.margin {
  margin-bottom: 195px;
}
h1 {
  font-family: 'Source Sans Pro';
  color: #000;
  font-weight: bold;
}
h2 {
  font-family: 'PT Mono', monospace;
  font-size: smaller;
  margin-bottom: 0.3em;
}
button {
    width: 100%;
    font-size: 1.2em;
    font-weight: bold;
    background-color: #fff;
    padding: 20px 20px;
    margin-top: 20px;
    border: 2px black solid;
    border-radius: 8px;
    max-width: 20.25rem;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'PT Mono', monospace;
}
button:hover {
    background-color: #000;
    color: #fff;
}
</style>