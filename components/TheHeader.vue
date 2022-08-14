<template>
  <header>
    <h1>Добавление товара</h1>
    <sorting-toggle class="hide-on-mobile"></sorting-toggle>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .hide-on-mobile {
    @media (max-width: 600px) {
      display: none;
    }
  }
}
</style>
