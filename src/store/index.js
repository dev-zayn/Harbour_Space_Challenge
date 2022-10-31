import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    data: [],
  },
  getters: {
    data: (state) => state.data,
  },
  actions: {
    async getData({ commit }) {
      const response = await axios.get(
        "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
      );
      commit("SET_DATA", response.data);
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
  modules: {},
});
