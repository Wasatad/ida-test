<template>
  <form class="add-product">
    <div class="add-product__wrapper">
      <label class="add-product__row">
        <span class="add-product__label add-product__label_required"
          >Наименование товара</span
        >
        <input
          v-model="name"
          class="add-product__input"
          type="text"
          placeholder="Введите наименование товара"
          @input="resetError($event)"
        />
      </label>
      <div class="error-message">Поле является обязательным</div>
    </div>
    <div class="add-product__wrapper">
      <label class="add-product__row">
        <span class="add-product__label">Описание товара</span>
        <textarea
          v-model="description"
          class="add-product__input add-product__input_big"
          placeholder="Введите описание товара"
        ></textarea>
      </label>
    </div>
    <div class="add-product__wrapper">
      <label class="add-product__row">
        <span class="add-product__label add-product__label_required"
          >Ссылка на изображение товара</span
        >
        <input
          v-model="photo"
          class="add-product__input"
          type="text"
          placeholder="Введите ссылку"
          @input="resetError($event)"
        />
      </label>
      <div class="error-message">Поле является обязательным</div>
    </div>
    <div class="add-product__wrapper">
      <label class="add-product__row">
        <span class="add-product__label add-product__label_required"
          >Цена товара</span
        >
        <input
          ref="price"
          class="add-product__input price"
          type="text"
          placeholder="Введите цену"
          onpaste="return false"
          @input="
            resetError($event);
            splitToThousands($event);
          "
        />
      </label>
      <div class="error-message">Поле является обязательным</div>
    </div>
    <button
      :class="isAllDataEntered ? 'active-btn' : 'disabled-btn'"
      @click.prevent="addItem()"
    >
      <span class="btn-text">Добавить товар</span>
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      description: "",
      photo: "",
      price: "",
    };
  },
  computed: {
    isAllDataEntered() {
      if (this.name === "" || this.photo === "" || this.price === "") {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions(["addProduct"]),
    addItem() {
      // Валидация
      const allInputs = document.querySelectorAll(".add-product__input");
      for (let i = 0; i < 4; i++) {
        // Проходим в цикле все инпуты, ищем пустые
        if (!allInputs[i].value) {
          // Проверяем, есть ли в блоке инпута скрытое сообщение об ошибке (обязателен ли он)
          if (
            allInputs[i]
              .closest(".add-product__wrapper")
              .querySelector(".error-message")
          ) {
            // Если есть блок с ошибкой - показываем его
            allInputs[i]
              .closest(".add-product__wrapper")
              .querySelector(".error-message")
              .classList.add("active");

            allInputs[i]
              .closest(".add-product__wrapper")
              .querySelector(".add-product__input")
              .classList.add("error");
          }
        }
      }
      if (this.isAllDataEntered) {
        // Симуляция загрузки данных на сервер, анимация на кнопке
        const btn = document.querySelector(".active-btn");
        btn.classList.add("btn-loading");
        setTimeout(() => {
          btn.classList.remove("btn-loading");

          this.addProduct({
            name: this.name,
            description: this.description,
            photo: this.photo,
            price: this.price,
          });
          this.name = "";
          this.description = "";
          this.photo = "";
          this.price = "";
          this.$refs.price.value = "";
        }, 700);
      }
    },
    resetError($event) {
      // Сбрасываем сообщение об ошибке
      if (
        $event.target
          .closest(".add-product__wrapper")
          .querySelector(".error-message")
      ) {
        $event.target
          .closest(".add-product__wrapper")
          .querySelector(".error-message")
          .classList.remove("active");

        $event.target
          .closest(".add-product__wrapper")
          .querySelector(".add-product__input")
          .classList.remove("error");
      }
    },

    // Разделение инпута стоимости на тысячи
    splitToThousands($event) {
      if (isNaN(+$event.data)) {
        const newVal = $event.target.value.split("");
        newVal.splice(-1);
        $event.target.value = newVal.join("");
      }

      if ($event.data === "0" && $event.target.value.length === 1) {
        $event.target.value = "";
      }

      const inputNumber = +$event.target.value.replace(/\s/g, "");

      if (!$event.target.value) {
        $event.target.value = "";
      } else {
        $event.target.value = inputNumber
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
      this.price = $event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  width: 100%;
  max-width: 332px;

  background-color: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);

  @media (max-width: 600px) {
    max-width: none;
  }

  .add-product__wrapper {
    position: relative;

    .error-message {
      display: none;
      position: absolute;
      left: 0;
      bottom: -17px;
      width: 200px;
      font-weight: 400;
      color: $lightCoral;
      font-size: 12px;
    }
    .error-message.active {
      display: block;
    }

    .add-product__row {
      .add-product__label {
        font-size: 14px;
        color: $textDarkPurple;
        display: inline-block;

        margin-bottom: 4px;
      }

      .add-product__label_required {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 4px;
          right: -6px;
          width: 4px;
          height: 4px;
          background-color: lightCoral;
          border-radius: 100%;
        }
      }
      .add-product__input {
        display: block;
        width: 100%;
        height: 42px;
        padding-left: 16px;
        margin-bottom: 16px;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 4px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

        font-size: 16px;
        color: $textBlack;

        transition: border 0.2s;

        &:hover {
          border: 1px solid rgba(0, 0, 0, 0.2);
        }

        &::placeholder {
          color: $textGrey;
          font-size: 15px;
        }
      }
      .add-product__input.error {
        border: 1px solid $lightCoral;
      }
      .add-product__input_big {
        height: 108px;
        padding: 10px 16px 0 16px;
        resize: none;
      }
    }
  }

  .active-btn {
    position: relative;
    margin-top: 8px;
    @include activeButton;
  }

  .btn-loading .btn-text {
    visibility: hidden;
    opacity: 0;
  }

  .btn-loading::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: btn-loading-spinner 1s ease infinite;
  }

  @keyframes btn-loading-spinner {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
  .disabled-btn {
    margin-top: 8px;
    @include disabledButton;
  }
}
</style>
