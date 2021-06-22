<template>
  <div
    :class="[
      'toast',
      { 'toast--show': active === true },
      { 'toast--hide': active === false },
      type,
    ]"
  >
    <DelSVG v-if="type === 'error'" />
    <DoneSVG v-if="type === 'success'" />
    <span>{{ msg }}</span>
  </div>
</template>

<script>
import eventbus from "@/eventbus";
import DelSVG from "@/assets/svg/del.svg";
import DoneSVG from "@/assets/svg/done.svg";

export default {
  components: {
    DelSVG,
    DoneSVG,
  },
  data() {
    return {
      msg: "",
      type: "",
      active: false,
    };
  },
  methods: {
    activate() {
      this.active = true;
      setTimeout(() => (this.active = false), 3000);
    },
  },
  created() {
    eventbus.whenToastMsgIsCalled((toast) => {
      this.msg = toast.msg;
      this.type = toast.type;
      if (!this.active) {
        this.activate();
      }
    });
  },
};
</script>

<style scoped lang="scss">
$error_color: rgb(216, 0, 0);
$success_color: #89c30d;

.toast {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  transition: all 0.3s;
  position: fixed;
  top: 10px;
  color: rgb(103, 103, 103);
  background-color: #fff;
  width: 250px;
  border-radius: 5px;
  border: 1px solid;
  font-size: 14px;
  font-weight: 400;

  span {
    margin-left: 20px;
  }

  &--hide {
    opacity: 0;
    right: -100%;
  }
  &--show {
    opacity: 1;
    right: 10px;
  }

  svg {
    max-width: 20px;
    max-height: 20px;
  }

  &.error {
    border-color: $error_color;
    color: $error_color;
    svg {
      fill: $error_color;
    }
  }

  &.success {
    border-color: $success_color;
    color: $success_color;
    svg {
      fill: $success_color;
    }
  }
}
</style>
