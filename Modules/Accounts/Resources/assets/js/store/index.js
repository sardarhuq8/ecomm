export default {
    namespaced: true,
    state: {
        accountModule: "Account module"
    },
    getters: {
        getModuleName(state) {
            return state.accountModule;
        }
    }
};
