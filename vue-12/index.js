const app = Vue.createApp({
    data() {
        return {
            question: '',
        }
    },
    watch: {
        // whenever question changes, this function will run
        question: {
            handler(newQuestion, oldQuestion) {
                console.log("The value of the 'question' data value has changed.");
                console.log(`The new value: ${newQuestion}`);
                console.log(`The old value: ${oldQuestion}`);
            },
            immediate: true,
        }
    }
});

app.mount("#app");