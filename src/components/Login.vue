<template>
  <div class="login" style="width: 700px">
    <div id="okta-signin-container" style="width: 700px">></div>
  </div>
  <div>
    <article>
      <img
        id="img"
        src="../assets/report.svg"
        alt="mulher-roxa"
        style="width: 1200px; margin-left: 700px; margin-top: -780px"
      />
    </article>
  </div>
</template>

<script>
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import { oktaSignIn } from "../okta";

export default {
  name: "Login",
  mounted: function () {
    this.$nextTick(function () {
      oktaSignIn.showSignInAndRedirect({ el: "#okta-signin-container" });
    });
  },
  unmounted() {
    // Remove the widget from the DOM on path change
    oktaSignIn.remove();
  },
};
</script>

<style scoped></style>
