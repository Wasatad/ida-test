<template>
  <div>
    <div :class="messageClass">
      <img
        class="icon"
        :src="
          flashMessage.type === 'add'
            ? require('@/assets/img/success-flash-icon.svg')
            : require('@/assets/img/delete-flash-icon.svg')
        "
        alt=""
      />
      <span class="text">
        {{
          flashMessage.type === "add"
            ? "Товар успешно добавлен!"
            : "Товар удалён"
        }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["flashMessage"]),
    messageClass() {
      if (this.flashMessage.type === "add") {
        return "message-wrapper-add";
      } else {
        return "message-wrapper-delete";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.message-wrapper-add {
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 6px 16px 6px 6px;
  width: auto;
  z-index: 100;

  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  box-shadow: 0px 14px 29px -3px rgba(69, 169, 97, 0.25);

  border-radius: 26px;

  .text {
    font-weight: 600;
    font-size: 16px;
    color: $brightGreen;
  }
}

.message-wrapper-delete {
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 6px 16px 6px 6px;
  width: auto;
  z-index: 100;

  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  box-shadow: 0px 14px 29px -3px rgba(169, 102, 69, 0.25);

  border-radius: 26px;

  .text {
    font-weight: 600;
    font-size: 16px;
    color: $lightCoral;
  }
}
</style>
