<template>
  <nuxt />
</template>

<script>
export default {};
</script>

<style lang="scss">
html {
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: "source-sans-pro", sans-serif;
}

* {
  box-sizing: border-box;
}

h1 {
  font-weight: 600;
  font-style: normal;
  font-size: 28px;
  color: $textBlack;
}

h2 {
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  color: $textBlack;
}

h3 {
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
  color: $textBlack;
}

//Сбрасываем CSS
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  background-color: #faf9f7;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
  display: block;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}

textarea:focus,
input:focus {
  outline: none;
}

textarea {
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
