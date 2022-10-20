const app = Vue.createApp({
    data() {
        return {
            toggle: undefined,
            dynamicTrueValue: undefined,
            dynamicFalseValue: undefined,
            msg: ''
        }
    }
});

app.mount("#app");