const app = Vue.createApp({
    data() {
        return {
            myObject: {
                title: 'How to lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            }
        }
    }
});

app.mount('#app');