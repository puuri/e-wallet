<template>
    <div>
        <form>
            <label for="cardnumber">Card Number</label>
            <input
                type="text"
                maxlength="16"
                placeholder="XXXX XXXX XXXX XXXX"
                id="cardnumber"
                name="cardnumber"
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
                v-on:keydown="filterInput"
            >
            <label for="cardholder">Cardholder Name</label>
            <input
                type="text"
                maxlength="30"
                placeholder="Firstname Lastname"
                id="cardholder"
                name="cardholder"
                v-bind:value="inputHolder"
                v-on:input="$emit('inputHolder', $event.target.value)"
            >
            <div class="container">
                <label for="months" id="left">Month
                    <select
                        id="months"
                        name="months"
                        v-bind:value="inputMonth"
                        v-on:change="$emit('inputMonth', $event.target.value)"
                    >
                        <option hidden disabled selected value></option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </label>
                <label for="years" id="right">Year
                    <select
                        id="years"
                        name="years"
                        v-bind:value="inputYear"
                        v-on:change="$emit('inputYear', $event.target.value)"
                    >
                        <option hidden disabled selected value></option>
                        <option value="21">2021</option>
                        <option value="22">2022</option>
                        <option value="23">2023</option>
                        <option value="24">2024</option>
                        <option value="25">2025</option>
                    </select>
                </label>
            </div>
            <label for="vendors">Vendor</label>
            <select
                id="vendors"
                name="vendors"
                v-bind:value="inputVendor"
                v-on:change="$emit('inputVendor', $event.target.value)"
            >
                <option hidden disabled selected value></option>
                <option value="Bitcoin Inc">Bitcoin Inc</option>
                <option value="Block Chain Inc">Blockchain Inc</option>
                <option value="Evil Corp">Evil Corp</option>
                <option value="Ninja Bank">Ninja Bank</option>
            </select>
            <router-link to="/">
                <button v-on:click="onSubmit">Add Card</button>
            </router-link>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        inputHolder: String,
        inputMonth: String,
        inputYear: String,
        inputVendor: String
    },
    methods: {
        filterInput(e){
            e.target.value = e.target.value.replace(/[^0-9]+/g, '');
        },
        onSubmit() {
            this.$emit('cardAdded');
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}
#left {
  float: left;
  width: 50%;
  margin-right: 10px;
}
#right {
  float: right;
  width: 50%;
}
input[type=text], select {
    width: 100%;
    background-color: #fff;
    padding: 12px 20px;
    margin: 4px 0 16px 0;
    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1.5px solid black;
}
input[type=submit] {
    width: 100%;
    background-color: #fff;
    padding: 14px 20px;
    margin: 8px 0;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
}
input[type=submit]:hover {
    background-color: #000;
    color: #fff;
}
form {
    margin: 32px auto 0 auto;
    max-width: 20.25em;
    text-align: left;
}
label {
    font-size: 0.7em;
    font-family: 'PT Mono', monospace;
}
label[for=months], label[for=years] {
    display: inline-block;
}
label[for=vendors] {
    display: block;
}
option {
    font-size: 1.2em;
}
</style>