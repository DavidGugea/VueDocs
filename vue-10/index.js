const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },

    methods: {
        buttonHandler() {
            this.count += 1;
        }
    }
});

app.mount("#app");