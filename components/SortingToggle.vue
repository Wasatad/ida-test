<template>
  <div class="sorting-toggle">
    <span>По умолчанию</span>
    <img class="arrow" src="@/assets/img/arrow.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sorting-toggle {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;

  padding: 10px 16px 11px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: $textGrey;

  .arrow {
    padding: 3px 0 0;
    width: 14px;
  }
}
</style>
