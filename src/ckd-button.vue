<template>
  <a
    v-if="isLink()"
    class="ckd-button"
    :class="{ disabled: disabled }"
    :href="href"
    role="button">
    <slot />
  </a>
  <button
    v-else
    class="ckd-button"
    :class="{ disabled: disabled }"
    role="button">
    <slot />
  </button>
</template>


<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    }
  },
  methods: {
    isLink: function(){
      return !!this.href;
    }
  },
  data: function(){
    return {
      disabled: false
    };
  }
};
</script>


<style lang="scss">
input[type="submit"],
input[type="reset"],
input[type="button"],
a[role="button"],
button {
  box-sizing: border-box;
  cursor: pointer;
}

input[type="submit"],
input[type="reset"],
input[type="button"],
button {
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  appearance: button;
  user-select: none;
}

input::-moz-focus-inner,
button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

[role="button"] {
  color: inherit;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  white-space: pre;
  user-select: none;
}
</style>
