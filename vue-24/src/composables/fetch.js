import { ref, isRef, unref, watchEffect } from "vue";

export default function useFetch(url) {
    const data = ref(null);
    const error = ref(null);

    function doFetch() {
        // reset state before fetching...
        data.value = null;
        error.value = null;

        // unref is a sugar function for val = isRef(val) ? val.value : val
        // unref() unwraps potential refs
        fetch(unref(url))
            .then((res) => res.json())
            .then((json) => { data.value = json; })
            .catch((err) => { error.value = err; });
    }

    if (isRef(url)) {
        // setup reactive re-fetch if input URL is a ref
        watchEffect(doFetch);
    } else {
        // otherwise, just fetch once
        // and avoice the overhead of a watcher
        doFetch();
    }

    return { data, error };
}