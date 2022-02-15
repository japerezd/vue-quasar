import { useStore } from "vuex";
import { computed } from "vue";

const useUI = () => {
  const store = useStore();

  return {
    // sideMenuOpen: computed(() => store.getters["ui/getSideMenuOpen"]),
    sideMenuOpen: computed({
      get() {
        return store.getters["ui/getSideMenuOpen"];
      },

      set(val) {
        store.commit("ui/toggleSideMenu");
      },
    }),
    toggleSideMenu() {
      store.commit("ui/toggleSideMenu");
    },
  };
};

export default useUI;
