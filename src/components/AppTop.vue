<template>
    <div class="app-top">
        <h1>
            {{title}}
        </h1>
        <h2>
            {{subTitle}}
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
            , required: true
        },
        subTitle: {
            type: String
            , required: true
        }
    }
}
</script>