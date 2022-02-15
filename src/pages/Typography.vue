<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator></q-separator>

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

    <q-separator></q-separator>

    <p class="text-body1">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit esse, amet
      perspiciatis accusantium iste excepturi, sequi, praesentium tempore porro
      molestias dicta. Temporibus similique natus officia repudiandae? Ut ex
      ullam doloribus.
    </p>
    <p class="text-body2">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit esse, amet
      perspiciatis accusantium iste excepturi, sequi, praesentium tempore porro
      molestias dicta. Temporibus similique natus officia repudiandae? Ut ex
      ullam doloribus.
    </p>

    <q-separator></q-separator>

    <span class="text-weight-thin">Lorem ipsum dolor sit.</span>
    <span class="text-weight-light">Lorem ipsum dolor sit.</span>
    <span class="text-weight-regular">Lorem ipsum dolor sit.</span>
    <span class="text-weight-medium">Lorem ipsum dolor sit.</span>
    <span class="text-weight-bold">Lorem ipsum dolor sit.</span>
    <span class="text-weight-bolder">Lorem ipsum dolor sit.</span>

    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Cerrar menú lateral' : 'Abrir menú lateral'"
      class="q-mt-md"
      @click="toggleSideMenu"
    ></q-btn>
  </q-page>
</template>

<script>
import useUI from "../composables/useUI";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Typography",

  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    return {
      sideMenuOpen,
      toggleSideMenu,
    };
  },
});
</script>
