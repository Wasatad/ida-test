<template>
  <main class="app-wrapper">
    <div class="app-container">
      <TheHeader />
      <section class="content">
        <add-form class="add-form"></add-form>
        <sorting-toggle class="show-on-mobile"></sorting-toggle>
        <div class="catalog">
          <item-card
            v-for="(item, id) in items"
            :key="id"
            :photo="item.photo"
            :name="item.name"
            :description="item.description"
            :price="item.price"
          ></item-card>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import AddForm from "../components/AddForm.vue";
import SortingToggle from "../components/SortingToggle.vue";
export default {
  components: { AddForm, SortingToggle },
  data() {
    return {
      items: [
        {
          photo:
            "https://media.wired.com/photos/5b64db3717c26f0496f4d62d/master/w_1920,c_limit/Canon-G7XII-SOURCE-Canon.jpg",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк",
          price: "20 000",
        },
        {
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrAzHEmMn0chpy5uKO6Qk_x11FT1ncWsszQ&usqp=CAU",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
          price: "20 000",
        },
        {
          photo:
            "https://i1.adis.ws/i/canon/cr-n500-ambient_hero_93b9fa06eaf44cbdb7c4e3c3fd76d843?$hero-header-full-16by9-dt-jpg$",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "20 000",
        },
        {
          photo:
            "https://lirp.cdn-website.com/91325b3f/dms3rep/multi/opt/Template-images-canon-camera7-640w.jpg",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "20 000",
        },
        {
          photo:
            "https://media.wired.com/photos/5b64db3717c26f0496f4d62d/master/w_1920,c_limit/Canon-G7XII-SOURCE-Canon.jpg",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "20 000",
        },
      ],
    };
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
</style>
