"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_product_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  mounted: function mounted() {
    // $(document).trigger('change')
    this.getProducts();
    this.getColors();
    this.getSizes();
  },
  data: function data() {
    return {
      products: [],
      colors: [],
      sizes: [],
      currentProduct: [],
      num: null
    };
  },
  methods: {
    setProduct: function setProduct(product) {
      this.currentProduct = product;
      this.num = 1;
    },
    getProducts: function getProducts() {
      var _this = this;
      this.axios.get('/api/products').then(function (res) {
        _this.products = res.data.data;
      })["finally"](function (v) {
        $(document).trigger('change');
      });
    },
    getColors: function getColors() {
      var _this2 = this;
      this.axios.get('/api/colors').then(function (res) {
        _this2.colors = res.data.data;
      })["finally"](function (v) {
        $(document).trigger('change');
      });
    },
    getSizes: function getSizes() {
      var _this3 = this;
      this.axios.get('/api/sizes').then(function (res) {
        _this3.sizes = res.data.data;
      })["finally"](function (v) {
        $(document).trigger('change');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg0 p-t-23 p-b-130"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"p-b-10\"><h3 class=\"ltext-103 cl5\"> Product Overview </h3></div><div class=\"flex-w flex-sb-m p-b-52\"><div class=\"flex-w flex-l-m filter-tope-group m-tb-10\"><button class=\"stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1\" data-filter=\"*\"> All Products </button><button class=\"stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5\" data-filter=\".men\"> Men </button><button class=\"stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5\" data-filter=\".bag\"> Bag </button><button class=\"stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5\" data-filter=\".shoes\"> Shoes </button><button class=\"stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5\" data-filter=\".watches\"> Watches </button></div><div class=\"flex-w flex-c-m m-tb-10\"><div class=\"flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter\"><i class=\"icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list\"></i><i class=\"icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none\"></i> Фильтр </div><div class=\"flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search\"><i class=\"icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search\"></i><i class=\"icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none\"></i> Поиск </div></div><!-- Search product --><div class=\"dis-none panel-search w-full p-t-10 p-b-15\"><div class=\"bor8 dis-flex p-l-15\"><button class=\"size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04\"><i class=\"zmdi zmdi-search\"></i></button><input class=\"mtext-107 cl2 size-114 plh2 p-r-15\" type=\"text\" name=\"search-product\" placeholder=\"Search\"></div></div><!-- Filter --><div class=\"dis-none panel-filter w-full p-t-10\"><div class=\"wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm\"><div class=\"filter-col1 p-r-15 p-b-27\"><div class=\"mtext-102 cl2 p-b-15\"> Сортировать по </div><ul><li class=\"p-b-6\"><a href=\"#\" class=\"filter-link stext-106 trans-04\"> По умолчанию </a></li><li class=\"p-b-6\"><a href=\"#\" class=\"filter-link stext-106 trans-04\"> Популярные </a></li><li class=\"p-b-6\"><a href=\"#\" class=\"filter-link stext-106 trans-04\"> Средний рейтинг </a></li><li class=\"p-b-6\"><a href=\"#\" class=\"filter-link stext-106 trans-04 filter-link-active\"> Новинки </a></li><li class=\"p-b-6\"><a href=\"#\" class=\"filter-link stext-106 trans-04\"> Цена: по возрастанию </a></li><li class=\"p-b-6\"><a href=\"#\" class=\"filter-link stext-106 trans-04\"> Цена: по убыванию </a></li></ul></div><div class=\"filter-col2 p-r-15 p-b-27\"><div class=\"mtext-102 cl2 p-b-15\"> Цена </div><input type=\"number\"><input type=\"number\"></div><div class=\"filter-col3 p-r-15 p-b-27\"><div class=\"mtext-102 cl2 p-b-15\"> Color </div><ul><li class=\"p-b-6\"><span class=\"fs-15 lh-12 m-r-6\" style=\"color:#222;\"><i class=\"zmdi zmdi-circle\"></i></span><a href=\"#\" class=\"filter-link stext-106 trans-04\"> Black </a></li><li class=\"p-b-6\"><span class=\"fs-15 lh-12 m-r-6\" style=\"color:#4272d7;\"><i class=\"zmdi zmdi-circle\"></i></span><a href=\"#\" class=\"filter-link stext-106 trans-04 filter-link-active\"> Blue </a></li><li class=\"p-b-6\"><span class=\"fs-15 lh-12 m-r-6\" style=\"color:#b3b3b3;\"><i class=\"zmdi zmdi-circle\"></i></span><a href=\"#\" class=\"filter-link stext-106 trans-04\"> Grey </a></li><li class=\"p-b-6\"><span class=\"fs-15 lh-12 m-r-6\" style=\"color:#00ad5f;\"><i class=\"zmdi zmdi-circle\"></i></span><a href=\"#\" class=\"filter-link stext-106 trans-04\"> Green </a></li><li class=\"p-b-6\"><span class=\"fs-15 lh-12 m-r-6\" style=\"color:#fa4251;\"><i class=\"zmdi zmdi-circle\"></i></span><a href=\"#\" class=\"filter-link stext-106 trans-04\"> Red </a></li><li class=\"p-b-6\"><span class=\"fs-15 lh-12 m-r-6\" style=\"color:#aaa;\"><i class=\"zmdi zmdi-circle-o\"></i></span><a href=\"#\" class=\"filter-link stext-106 trans-04\"> White </a></li></ul></div><div class=\"filter-col4 p-b-27\"><div class=\"mtext-102 cl2 p-b-15\"> Tags </div><div class=\"flex-w p-t-4 m-r--5\"><a href=\"#\" class=\"flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5\"> Fashion </a><a href=\"#\" class=\"flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5\"> Lifestyle </a><a href=\"#\" class=\"flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5\"> Denim </a><a href=\"#\" class=\"flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5\"> Streetstyle </a><a href=\"#\" class=\"flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5\"> Crafts </a></div></div></div></div></div>", 2);
var _hoisted_5 = {
  "class": "row isotope-grid",
  style: {
    "height": "auto"
  }
};
var _hoisted_6 = {
  "class": "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men d-flex align-items-stretch"
};
var _hoisted_7 = {
  "class": "block2"
};
var _hoisted_8 = {
  "class": "block2-pic hov-img0"
};
var _hoisted_9 = ["src"];
var _hoisted_10 = ["onClick"];
var _hoisted_11 = {
  "class": "block2-txt flex-w flex-t p-t-14"
};
var _hoisted_12 = {
  "class": "block2-txt-child1 flex-col-l"
};
var _hoisted_13 = {
  href: "product-detail.html",
  "class": "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
};
var _hoisted_14 = {
  "class": "stext-105 cl3"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "block2-txt-child2 flex-r p-t-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "btn-addwish-b2 dis-block pos-relative js-addwish-b2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "icon-heart1 dis-block trans-04",
  src: "/assets/images/icons/icon-heart-01.png",
  alt: "ICON"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "icon-heart2 dis-block trans-04 ab-t-l",
  src: "/assets/images/icons/icon-heart-02.png",
  alt: "ICON"
})])], -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "wrap-modal1 js-modal1 p-t-60 p-b-20"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "overlay-modal1 js-hide-modal1"
}, null, -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "container"
};
var _hoisted_19 = {
  "class": "bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "how-pos3 hov3 trans-04 js-hide-modal1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/images/icons/icon-close.png",
  alt: "CLOSE"
})], -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "row"
};
var _hoisted_22 = {
  "class": "col-md-6 col-lg-7 p-b-30"
};
var _hoisted_23 = {
  "class": "p-l-25 p-r-30 p-lr-0-lg"
};
var _hoisted_24 = {
  "class": "wrap-slick3 flex-sb flex-w"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "wrap-slick3-dots"
}, null, -1 /* HOISTED */);
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "wrap-slick3-arrows flex-sb-m flex-w"
}, null, -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "slick3 gallery-lb"
};
var _hoisted_28 = ["data-thumb"];
var _hoisted_29 = {
  "class": "wrap-pic-w pos-relative"
};
var _hoisted_30 = ["src"];
var _hoisted_31 = ["href"];
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-expand"
}, null, -1 /* HOISTED */);
var _hoisted_33 = [_hoisted_32];
var _hoisted_34 = {
  "class": "col-md-6 col-lg-5 p-b-30"
};
var _hoisted_35 = {
  "class": "p-r-50 p-t-5 p-lr-0-lg"
};
var _hoisted_36 = {
  "class": "mtext-105 cl2 js-name-detail p-b-14"
};
var _hoisted_37 = {
  "class": "mtext-106 cl2"
};
var _hoisted_38 = {
  "class": "stext-102 cl3 p-t-23"
};
var _hoisted_39 = {
  "class": "p-t-33"
};
var _hoisted_40 = {
  "class": "flex-w flex-r-m p-b-10"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-203 flex-c-m respon6"
}, " Размер ", -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "size-204 respon6-next"
};
var _hoisted_43 = {
  "class": "rs1-select2 bor8 bg0"
};
var _hoisted_44 = {
  "class": "js-select2",
  name: "time"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Выберите размер", -1 /* HOISTED */);
var _hoisted_46 = ["value"];
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropDownSelect2"
}, null, -1 /* HOISTED */);
var _hoisted_48 = {
  "class": "flex-w flex-r-m p-b-10"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-203 flex-c-m respon6"
}, " Цвет ", -1 /* HOISTED */);
var _hoisted_50 = {
  "class": "size-204 respon6-next"
};
var _hoisted_51 = {
  "class": "rs1-select2 bor8 bg0"
};
var _hoisted_52 = {
  "class": "js-select2",
  name: "time"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Выберите цвет", -1 /* HOISTED */);
var _hoisted_54 = ["value"];
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropDownSelect2"
}, null, -1 /* HOISTED */);
var _hoisted_56 = {
  "class": "flex-w flex-r-m p-b-10"
};
var _hoisted_57 = {
  "class": "size-204 flex-w flex-m respon6-next"
};
var _hoisted_58 = {
  "class": "wrap-num-product flex-w m-r-20 m-tb-10"
};
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fs-16 zmdi zmdi-minus"
})], -1 /* HOISTED */);
var _hoisted_60 = ["value"];
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fs-16 zmdi zmdi-plus"
})], -1 /* HOISTED */);
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
}, " Add to cart ", -1 /* HOISTED */);
var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex-w flex-m p-l-100 p-t-40 respon7\"><div class=\"flex-m bor9 p-r-10 m-r-11\"><a href=\"#\" class=\"fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100\" data-tooltip=\"Add to Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a></div><a href=\"#\" class=\"fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100\" data-tooltip=\"Facebook\"><i class=\"fa fa-facebook\"></i></a><a href=\"#\" class=\"fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100\" data-tooltip=\"Twitter\"><i class=\"fa fa-twitter\"></i></a><a href=\"#\" class=\"fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100\" data-tooltip=\"Google Plus\"><i class=\"fa fa-google-plus\"></i></a></div>", 1);
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-c-m flex-w w-full p-t-38"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
}, " 1 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "flex-c-m how-pagination1 trans-04 m-all-7"
}, " 2 ")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Каталог товаров "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Block2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: product.imageUrl,
      alt: "IMG-PRODUCT",
      style: {
        "height": "300px",
        "width": "270px"
      }
    }, null, 8 /* PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      "class": "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
      onClick: function onClick($event) {
        return $options.setProduct(product);
      }
    }, " Посмотреть ", 8 /* PROPS */, _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + " руб. ", 1 /* TEXT */)]), _hoisted_15]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "item-slick3",
      "data-thumb": $data.currentProduct.imageUrl
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: $data.currentProduct.imageUrl,
      alt: "IMG-PRODUCT"
    }, null, 8 /* PROPS */, _hoisted_30), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04",
      href: $data.currentProduct.imageUrl
    }, _hoisted_33, 8 /* PROPS */, _hoisted_31)])], 8 /* PROPS */, _hoisted_28)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currentProduct.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currentProduct.price) + " руб. ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currentProduct.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_44, [_hoisted_45, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.sizes, function (size) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
        value: size.code
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(size.name), 9 /* TEXT, PROPS */, _hoisted_46);
    }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_47])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_52, [_hoisted_53, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.colors, function (color) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
        value: color.code
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(color.name), 9 /* TEXT, PROPS */, _hoisted_54);
    }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_55])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "mtext-104 cl3 txt-center num-product",
      type: "number",
      name: "num-product",
      value: $data.num
    }, null, 8 /* PROPS */, _hoisted_60), _hoisted_61]), _hoisted_62])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), _hoisted_63])])])])])])])]);
  }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Pagination "), _hoisted_64])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/views/product/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/product/Index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=06cfffba */ "./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/views/product/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_renatramazanov_dev_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_renatramazanov_dev_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/product/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/product/Index.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/product/Index.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba":
/*!****************************************************************************!*\
  !*** ./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=06cfffba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba");


/***/ })

}]);