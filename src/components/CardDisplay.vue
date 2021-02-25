<template>
<div class="clearfix">
    <div class="center">
        <div class="full-width">
        <div
            class="card"
            v-bind:class="cardObject"
            v-on:click="clickCard"
        >
            <div class="card-item1">
                <img v-if="this.vendor === 'Bitcoin Inc' || this.vendor === ''" src="../assets/chip-dark.svg">
                <img v-else src="../assets/chip-light.svg">
            </div>
            <p class="card-item2">
            </p>
            <p class="card-item3">
                {{addSpacess}}
            </p>
            <p class="card-item4">
                Cardholmer Name
            </p>
            <p class="card-item5">
                {{holder}}
            </p>
            <p class="card-item6">
                Valid Thru
            </p>
            <p class="card-item7">
                {{validMonth}}/{{validYear}}
            </p>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: this.$root.$data.cardStack.findIndex(idd => idd.id === this.id)
        }
    },
    computed: {
        cardObject () {
            return {
                bitcoin: this.vendor === "Bitcoin Inc",
                blockchain: this.vendor === "Block Chain Inc",
                evil: this.vendor === "Evil Corp",
                ninja: this.vendor === "Ninja Bank",
                light: this.vendor === "Block Chain Inc" || this.vendor === "Evil Corp" || this.vendor === "Ninja Bank",
            }
        },
        addSpacess () {
            return this.number.replace(/(.{4})/g, "$1 ").trim();
        }
    },
    methods: {
        clickCard(event) {
            console.log("newItem först: " + this.newItem)
            console.log(event.target.tagName)
            console.log('this.id:' + this.id)
            console.log(this.index)
            console.log("nyast: " + this.$root.$data.cardStack[this.index].id)
            this.$emit('cardClicked', this.index)
        }
    },
    props: {
        holder: {
            type: String
            ,required: true
        },
        id: {
            type: Number,
            required: true
        },
        number: {
            type: String
            , required: true
        },
        validMonth: {
            type: String
            , required: true
        },
        validYear: {
            type: String
            ,required: true
        },
        vendor: {
            type: String
            , required: true
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.center {
    margin: 0 auto;
}
.full-width {
    width: 100%;
    float: left;
}
.card {
    color: #000;
    background-color: #D5D5D5;
    margin: 0 auto;
    padding: 15px 15px 20px 15px;
    max-width: 20.25em;
    min-height: 12.75em;
    display: grid;
    border-radius: 10px;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: auto auto;
    font-family: 'PT Mono', monospace;
    box-shadow: 0 0 0.5em 0.1em rgba(0,0,0,0.2);
}
.cardstack .card {
    margin-top: -165px;

}
.cardstack .card {
    cursor: pointer;
}
[class*=card-item] {
    display: flex;
    text-align: left;
}
.card-item1 {
    margin: 0;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: 2;
    align-items: flex-start;
}
.card-item2 {
    margin: 0;
    grid-row-start: 1;
    grid-column-start: 2;
    grid-column-end: 3;
    align-items: flex-start;
    justify-content: flex-end;
}
.card-item3 {
    margin: 0.5em 0 1em 0;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 3;
    font-size: 1.6em;
	text-shadow: 1px 1px 2px hsla(0, 0%, 0%, .4), -1px -1px 2px hsla(0, 0%, 100%, .4);
}
.card-item4 {
    margin: 0 0 0.5em 0;
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    font-size: 0.7em;
}
.card-item5 {
    margin: 0;
    grid-row-start: 4;
    grid-column-start: 1;
    grid-column-end: 2;
    justify-content: flex-start;
}
.card-item6 {
    margin: 0 0 0.5em 0;
    justify-content: flex-end;
    grid-row-start: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    font-size: 0.7em;
}
.card-item7 {
    margin: 0;
    justify-content: flex-end;
    grid-row-start: 4;
    grid-column-start: 2;
    grid-column-end: 3;
}
.card-item3, .card-item5, .card-item7 {
	text-shadow: 1px 1px 2px hsla(0, 0%, 0%, .4), -1px -1px 2px hsla(0, 0%, 100%, .4);
}
.bitcoin {
    background-color:#FFB340;
}
.bitcoin .card-item2 {
    background-image: url('../assets/vendor-bitcoin.svg');
    background-repeat: no-repeat;
    background-position: right top;
}
.ninja {
    background-color: #303030;
}
.ninja .card-item2 {
    background-image: url('../assets/vendor-ninja.svg');
    background-repeat: no-repeat;
    background-position: right top;
}
.blockchain {
    background-color: #8252E9;
}
.blockchain .card-item2 {
    background-image: url('../assets/vendor-blockchain.svg');
    background-repeat: no-repeat;
    background-position: right top;
}
.evil {
    background-color: #DF2F4E;
}
.evil .card-item2 {
    background-image: url('../assets/vendor-evil.svg');
    background-repeat: no-repeat;
    background-position: right top;
}
.light {
    color: #fff;
}
</style>