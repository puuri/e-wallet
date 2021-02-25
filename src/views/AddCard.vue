<template>
  <div class="add-card">
    <AppTop v-bind:title="'Add New Card'" v-bind:subTitle="'New Card'"/>
    <CardDisplay
      v-bind:number="newNumber"
      v-bind:holder="newHolder"
      v-bind:validMonth="newMonth"
      v-bind:validYear="newYear"
      v-bind:vendor="newVendor"
      v-bind:id="newId"
    />
    <CardForm
      v-model="newNumber"

      v-bind:inputHolder="newHolder"
      v-on:inputHolder="newHolder = $event"

      v-bind:inputMonth="newMonth"
      v-on:inputMonth="newMonth = $event"

      v-bind:inputYear="newYear"
      v-on:inputYear="newYear = $event"

      v-bind:inputVendor="newVendor"
      v-on:inputVendor="newVendor = $event"

      v-on:cardAdded="onCardAdded"
    />
  </div>
</template>

<script>
import AppTop from "@/components/AppTop.vue";
import CardDisplay from "@/components/CardDisplay.vue"
import CardForm from "@/components/CardForm.vue"

export default {
  components: {
    AppTop,
    CardDisplay,
    CardForm
  },
  data: function() {
    return {
      newNumber: "",
      newHolder: "",
      newMonth: "MM",
      newYear: "YY",
      newVendor: "",
      newId: Date.now()
    }
  },
  methods: {
    onCardAdded() {
      this.$root.$data.cardStack.push(
        {
          number: this.newNumber
          , holder: this.newHolder
          , validMonth: this.newMonth
          , validYear: this.newYear
          , vendor: this.newVendor
          , id: this.newId
        }
      )
    }
  }
}
</script>