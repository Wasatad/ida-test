<template>
  <main class="app-wrapper">
    <transition name="flash">
      <flash-message v-if="flashMessage.visible"></flash-message>
    </transition>
    <div class="app-container">
      <TheHeader />
      <section class="content">
        <add-form class="add-form"></add-form>
        <sorting-toggle class="show-on-mobile"></sorting-toggle>

        <transition-group class="catalog" name="list" tag="div">
          <item-card
            v-for="product in sortedProducts"
            :key="product.id"
            :photo="product.photo"
            :name="product.name"
            :description="product.description"
            :price="product.price"
          ></item-card>
        </transition-group>
      </section>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import AddForm from "../components/AddForm.vue";
import FlashMessage from "../components/FlashMessage.vue";
import SortingToggle from "../components/SortingToggle.vue";

export default {
  components: { AddForm, SortingToggle, FlashMessage },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sortedProducts"]),
    ...mapState(["flashMessage"]),
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  padding: 32px 15px 0;
  .app-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1376px;
    .content {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px;
      @media (max-width: 600px) {
        flex-direction: column;
      }

      .show-on-mobile {
        @media (min-width: 600px) {
          display: none;
        }
      }

      .add-form {
        flex-shrink: 0;
        @media (max-width: 700px) {
          width: 50%;
        }
        @media (max-width: 600px) {
          width: 100%;
          margin-bottom: 20px;
        }
      }

      .catalog {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
      }
    }
  }
}

.flash-enter-active {
  transition: all 0.3s ease;
}
.flash-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.flash-enter,
.flash-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-move {
  transition: transform 0.5s;
}
</style>
