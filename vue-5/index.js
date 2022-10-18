const app = Vue.createApp({
    data() {
        return {
            buttonAttributes: {
                id: 'this-is-my-button-id',
                disabled: true,
                class: 'hello-world-class'
            },
            spanAttributes: {
                id: 'spanId'
            },
            linkAttributes: {
                href: 'https://www.google.com',
                id: 'link-id'
            },
            hrefMessage: "this is a link",
            message: "this is my message",
            number: 5,
            seen: true
        }
    },
});

app.mount("#app");