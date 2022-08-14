import Vuex from "vuex";
import { uid } from "uid";

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [
        {
          id: 1,
          photo:
            "https://camerajabber.com/wp-content/uploads/2016/08/Canon_5D_Mark_IV_Review_Hands_on_camera_jabber057.jpg",
          name: "Canon EOS 5D Mark IV",
          description:
            "С того момента как свет попадает в объектив, EOS 5D Mark IV сохраняет все характеристики, цвета и детали. В очередной раз Canon поражает уровнем детализации изображения, благодаря использованию нового сенсора, обеспечивающего непревзойденную четкость снимков.",
          price: "269 990",
        },
        {
          id: 2,
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/9/9c/Pentax_KP_%28silver%29_front-left_2017_CP%2B.jpg",
          name: "Pentax KP Body Silver",
          description:
            "Цифровая зеркальная камера PENTAX KP надежно и бережно сохранит для вас красоту неповторимых и захватывающих моментов, которые каждый день дарит нам окружающий мир. В компактном и тонком корпусе скрываются ультрасовременные технологии включая видоискатель с 100% покрытием кадра.",
          price: "112 990",
        },
        {
          id: 3,
          photo:
            "https://leica-camera.com/sites/default/files/2021-08/USP-Build-to-last_-Ambientshot-1512x1008_teaser-2632x1756.jpeg",
          name: "LEICA S3",
          description:
            "Модель S3 оснащена матрицей Leica ProFormat нового поколения с расширением 64 мегапикселя. По своим размерам 30 х 45 мм она соответствует соотношению классических 35 мм, одновременно обладая увеличенной на 56 % площадью светочувствительной поверхности.",
          price: "1 581 000",
        },
      ],
      flashMessage: { visible: false, type: "add" },
      sortingRule: "",
    },
    mutations: {
      addProduct(state, product) {
        state.products.unshift({ ...product, id: uid() });
      },
      deleteProduct(state, id) {
        state.products = state.products.filter((product) => {
          return product.id !== id;
        });
      },
      prefetchProducts(state, payload) {
        state.products = payload;
      },
      toggleFlashMessage(state, payload) {
        state.flashMessage.type = payload;
        state.flashMessage.visible = !state.flashMessage.visible;
      },
      setSortingRule(state, payload) {
        state.sortingRule = payload;
      },
    },
    actions: {
      addProduct(context, product) {
        context.commit("addProduct", product);
        const productsAsString = JSON.stringify(context.state.products);
        localStorage.setItem("products", productsAsString);

        setTimeout(() => {
          context.commit("toggleFlashMessage", "add");
          setTimeout(() => {
            context.commit("toggleFlashMessage");
          }, 2400);
        }, 700);
      },
      deleteProduct(context, id) {
        context.commit("deleteProduct", id);
        const productsAsString = JSON.stringify(context.state.products);
        localStorage.setItem("products", productsAsString);
        setTimeout(() => {
          context.commit("toggleFlashMessage", "delete");
          setTimeout(() => {
            context.commit("toggleFlashMessage");
          }, 2400);
        }, 700);
      },
    },
    getters: {
      sortedProducts(state) {
        if (state.sortingRule === "from-low") {
          return [...state.products].sort(function (a, b) {
            return +a.price.replace(/\s/g, "") - +b.price.replace(/\s/g, "");
          });
        } else if (state.sortingRule === "from-high") {
          return [...state.products].sort(function (a, b) {
            return +b.price.replace(/\s/g, "") - +a.price.replace(/\s/g, "");
          });
        } else if (state.sortingRule === "by-name") {
          return [...state.products].sort(function (a, b) {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
        } else {
          return state.products;
        }
      },
    },
  });
};

export default createStore;
