import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data: function() {
    return {
      activeIndex: 0,
      cardStack: [
        {
          id: 329847283961,
          holder: "Stefan Rehn",
          vendor: "Bitcoin Inc",
          number: "1234567891234567",
          validMonth: "05",
          validYear: "23"
        },
        {
          id: 329847283972,
          holder: "Jan Tauer",
          vendor: "Ninja Bank",
          number: "1234567891234567",
          validMonth: "12",
          validYear: "21"
        },
        {
          id: 329847283983,
          holder: "Andreas Isaksson",
          vendor: "Block Chain Inc",
          number: "1234567891234567",
          validMonth: "04",
          validYear: "22"
        },
        {
          id: 329847283994,
          holder: "Kim Källström",
          vendor: "Evil Corp",
          number: "1234567891234567",
          validMonth: "10",
          validYear: "24"
        }
      ]
    }
  },
  router,
  render: h => h(App)
}).$mount("#app");
