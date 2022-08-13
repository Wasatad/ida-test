<template>
  <div class="item-card">
    <div class="item-card__image">
      <img :src="photo" alt="" />
    </div>
    <div class="item-card__description">
      <h3 class="item-card__title">{{ name }}</h3>
      <div class="item-card__text">
        {{ description }}
      </div>
      <h2 class="item-card__price">{{ price }} руб.</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photo", "name", "description", "price"],
};
</script>

<style lang="scss" scoped>
.item-card {
  width: 100%;
  max-width: 332px;
  background-color: #fff;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    scale: 1.03;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 40px rgba(0, 0, 20, 0.1);
  }

  @media (max-width: 1420px) {
    width: calc(50% - 8px);
    max-width: none;
  }
  @media (max-width: 900px) {
    width: 100%;
  }

  .item-card__image {
    height: 200px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .item-card__description {
    padding: 16px 16px 24px;

    .item-card__title {
      margin-bottom: 16px;
    }
    .item-card__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: $textBlack;
      margin-bottom: 32px;
    }
  }
}
</style>
