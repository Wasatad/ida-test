<template>
  <form class="add-product">
    <label class="add-product__row">
      <span class="add-product__label add-product__label_required"
        >Наименование товара</span
      >
      <input
        class="add-product__input"
        type="text"
        placeholder="Введите наименование товара"
    /></label>
    <label class="add-product__row">
      <span class="add-product__label">Описание товара</span>
      <textarea
        class="add-product__input add-product__input_big"
        placeholder="Введите описание товара"
      ></textarea>
    </label>
    <label class="add-product__row">
      <span class="add-product__label add-product__label_required"
        >Ссылка на изображение товара</span
      >
      <input
        class="add-product__input"
        type="text"
        placeholder="Введите ссылку"
    /></label>
    <label class="add-product__row">
      <span class="add-product__label add-product__label_required"
        >Цена товара</span
      >
      <input
        class="add-product__input"
        type="number"
        placeholder="Введите цену"
    /></label>
    <!-- <button class="active-btn">Добавить товар</button> -->
    <button class="disabled-btn" @click.prevent="addItem()">
      Добавить товар
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.add-product {
  width: 100%;
  max-width: 332px;
  // width: 332px;

  background-color: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);

  @media (max-width: 600px) {
    max-width: none;
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
      width: 100%;
      height: 42px;
      padding-left: 16px;
      margin-bottom: 16px;
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
    .add-product__input_big {
      height: 108px;
      padding: 10px 16px;
      resize: none;
    }
  }

  .active-btn {
    margin-top: 8px;
    @include activeButton;
  }
  .disabled-btn {
    margin-top: 8px;
    @include disabledButton;
  }
}
</style>
