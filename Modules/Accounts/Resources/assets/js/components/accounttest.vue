<template>
    <div>
        <h1>this is coming from account modules with router</h1>
        <h1>{{ $store.state.name }}</h1>

        <h1>{{ getModuleName }}</h1>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    created() {
        console.log(this.$store);
    },
    computed: {
        ...mapGetters({
            getModuleName: "accountsStore/getModuleName"
        })
    }
};
</script>
