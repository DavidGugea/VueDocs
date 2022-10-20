const app = Vue.createApp({
    data() {
        return {
            paragraphProperties: {
                style: 'color: grey; padding: 10px; border-radius: 20px; border: 2px grey solid; width: 100px'
            },
            listItems: [
                { name: 'name1', price: 1 },
                { name: 'name2', price: 2 },
            ],
        }
    },
});

app.mount("#app");