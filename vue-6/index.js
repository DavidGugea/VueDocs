const app = Vue.createApp({
    data() {
        return {
            buttonAttributes: {
                disabled: false,
                style: 'color: grey; background: white; margin: 20px; text-align: center; padding: 15px; font-family: Verdana; border: 3px black solid; border-radius: 15px'
            },
            message: 'hello world'
        }
    }
});

app.mount('#app');