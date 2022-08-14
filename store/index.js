import Vuex from "vuex";
import { uid } from "uid";

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [
        {
          id: 1,
          photo:
            "https://media.wired.com/photos/5b64db3717c26f0496f4d62d/master/w_1920,c_limit/Canon-G7XII-SOURCE-Canon.jpg",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк",
          price: "20 000",
        },
        {
          id: 2,
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrAzHEmMn0chpy5uKO6Qk_x11FT1ncWsszQ&usqp=CAU",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
          price: "20 000",
        },
        {
          id: 3,
          photo:
            "https://i1.adis.ws/i/canon/cr-n500-ambient_hero_93b9fa06eaf44cbdb7c4e3c3fd76d843?$hero-header-full-16by9-dt-jpg$",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "20 000",
        },
        {
          id: 4,
          photo:
            "https://lirp.cdn-website.com/91325b3f/dms3rep/multi/opt/Template-images-canon-camera7-640w.jpg",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "20 000",
        },
        {
          id: 5,
          photo:
            "https://media.wired.com/photos/5b64db3717c26f0496f4d62d/master/w_1920,c_limit/Canon-G7XII-SOURCE-Canon.jpg",
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "20 000",
        },
      ],
      flashMessage: { visible: false, type: "add" },
    },
    mutations: {
      addProduct(state, product) {
        state.products.unshift({ ...product, id: uid() });
      },
      toggleFlashMessage(state, payload) {
        state.flashMessage.type = payload;
        state.flashMessage.visible = !state.flashMessage.visible;
      },
    },
    actions: {
      addProduct(context, product) {
        context.commit("addProduct", product);

        setTimeout(() => {
          context.commit("toggleFlashMessage", "add");
          setTimeout(() => {
            context.commit("toggleFlashMessage");
          }, 2400);
        }, 700);
      },
    },
    getters: {
      sortedProducts(state) {
        return state.products;
      },
    },
  });
};

export default createStore;
