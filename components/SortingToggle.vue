<template>
  <div @click="toggleOptions" class="sorting-toggle">
    <span>{{ activeOption }}</span>
    <img
      :class="[isToggleOpended ? 'opened' : '', 'sorting-toggle__arrow']"
      src="@/assets/img/arrow.svg"
      alt=""
    />
    <div v-if="isToggleOpended" class="sorting-toggle__sorting-options">
      <ul class="sorting-toggle__sorting-option">
        <li @click="switchSorting('by-date')">По дате</li>
        <li @click="switchSorting('from-low')">Сначала недорогие</li>
        <li @click="switchSorting('from-high')">Сначала дорогие</li>
        <li @click="switchSorting('by-name')">По наименованию</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isToggleOpended: false,
      activeOption: "По дате",
    };
  },
  methods: {
    ...mapMutations(["setSortingRule"]),
    toggleOptions() {
      this.isToggleOpended = !this.isToggleOpended;
    },
    switchSorting(rule) {
      if (rule === "by-date") {
        this.activeOption = "По дате";
      } else if (rule === "from-low") {
        this.activeOption = "Сначала недорогие";
      } else if (rule === "from-high") {
        this.activeOption = "Сначала дорогие";
      } else if (rule === "by-name") {
        this.activeOption = "По наименованию";
      }
      this.setSortingRule(rule);
    },
  },
};
</script>

<style lang="scss" scoped>
.sorting-toggle {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  width: 160px;
  padding: 9px 16px 10px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  color: $textGrey;
  cursor: pointer;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .sorting-toggle__arrow {
    padding: 3px 0 0;
    width: 14px;
  }
  .sorting-toggle__arrow.opened {
    transform: scale(-1);
  }

  .sorting-toggle__sorting-options {
    position: absolute;
    z-index: 1;
    width: 160px;
    border-radius: inherit;
    box-shadow: inherit;

    left: 0;
    top: 50px;
    background-color: #fff;
    overflow: hidden;
    // padding: 7px 10px;

    li {
      padding: 6px 12px;
      color: $textBlack;
      font-size: 12px;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>
