"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_main_PlayerIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/main/PlayerIndex.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/main/PlayerIndex.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  mounted: function mounted() {
    $(document).trigger('change');
    this.getColors();
    this.getSizes();
    this.getPrintStyles();
    this.getClotheTypes();
    // this.getPlayerProduct()
  },
  data: function data() {
    return {
      colors: [],
      sizes: [],
      printStyles: [],
      clotheTypes: [],
      curClotheType: 1,
      curPrintStyle: 1,
      curSize: 1,
      curColor: 1,
      product: [],
      num: 1
    };
  },
  methods: {
    setCount: function setCount() {
      this.num = 1;
    },
    // setClotheType(clotheType) {
    //     this.curClotheType = clotheType
    // },
    setColor: function setColor(color) {
      this.curColor = color;
    },
    setSize: function setSize(size) {
      this.curSize = size;
    },
    setPrintStyle: function setPrintStyle(printStyle) {
      this.curPrintStyle = printStyle;
    },
    // getPlayerProduct() {
    //     this.axios.get('/api/product', {
    //         params: {
    //             clotheType: this.curClotheType
    //         }
    //     })
    //         .then(res => {
    //             this.product = res.data.data
    //         })
    //         .finally(v => {
    //             $(document).trigger('change')
    //         })
    // },
    getColors: function getColors() {
      var _this = this;
      this.axios.get('/api/colors').then(function (res) {
        _this.colors = res.data.data;
      })["finally"](function (v) {
        $(document).trigger('change');
      });
    },
    getSizes: function getSizes() {
      var _this2 = this;
      this.axios.get('/api/sizes').then(function (res) {
        _this2.sizes = res.data.data;
      })["finally"](function (v) {
        $(document).trigger('change');
      });
    },
    getPrintStyles: function getPrintStyles() {
      var _this3 = this;
      this.axios.get('/api/print_styles').then(function (res) {
        _this3.printStyles = res.data.data;
      })["finally"](function (v) {
        $(document).trigger('change');
      });
    },
    getClotheTypes: function getClotheTypes() {
      var _this4 = this;
      this.axios.get('/api/clothe_types').then(function (res) {
        _this4.clotheTypes = res.data.data;
      })["finally"](function (v) {
        $(document).trigger('change');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/main/PlayerIndex.vue?vue&type=template&id=4c98e27a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/main/PlayerIndex.vue?vue&type=template&id=4c98e27a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "sec-product-detail bg0 p-t-65 p-b-60"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-md-6 col-lg-5 p-b-30"
};
var _hoisted_5 = {
  "class": "p-r-50 p-t-5 p-lr-0-lg"
};
var _hoisted_6 = {
  "class": "p-t-33"
};
var _hoisted_7 = {
  "class": "flex-w flex-r-m p-b-10"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-203 flex-c-m respon6"
}, " Тип одежды ", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "size-204 respon6-next"
};
var _hoisted_10 = {
  "class": "rs1-select2 bg0",
  id: "radioset"
};
var _hoisted_11 = ["id", "value"];
var _hoisted_12 = ["for"];
var _hoisted_13 = {
  "class": "flex-w flex-r-m p-b-10"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-203 flex-c-m respon6"
}, " Стиль принта ", -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "size-204 respon6-next"
};
var _hoisted_16 = {
  "class": "rs1-select2 bor8 bg0"
};
var _hoisted_17 = {
  "class": "js-select2",
  name: "time"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Выберите стиль принта", -1 /* HOISTED */);
var _hoisted_19 = ["value", "onClick"];
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropDownSelect2"
}, null, -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "flex-w flex-r-m p-b-10"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-203 flex-c-m respon6"
}, " Размер ", -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "size-204 respon6-next"
};
var _hoisted_24 = {
  "class": "rs1-select2 bor8 bg0"
};
var _hoisted_25 = {
  "class": "js-select2",
  name: "time"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Выберите размер", -1 /* HOISTED */);
var _hoisted_27 = ["value", "onClick"];
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropDownSelect2"
}, null, -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "flex-w flex-r-m p-b-10"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-203 flex-c-m respon6"
}, " Цвет ", -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "size-204 respon6-next"
};
var _hoisted_32 = {
  "class": "rs1-select2 bor8 bg0"
};
var _hoisted_33 = {
  "class": "js-select2",
  name: "time"
};
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Выберите цвет", -1 /* HOISTED */);
var _hoisted_35 = ["value", "onClick"];
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropDownSelect2"
}, null, -1 /* HOISTED */);
var _hoisted_37 = {
  "class": "flex-w flex-r-m p-b-10"
};
var _hoisted_38 = {
  "class": "size-204 flex-w flex-m respon6-next"
};
var _hoisted_39 = {
  "class": "wrap-num-product flex-w m-r-20 m-tb-10"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fs-16 zmdi zmdi-minus"
})], -1 /* HOISTED */);
var _hoisted_41 = ["value"];
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fs-16 zmdi zmdi-plus"
})], -1 /* HOISTED */);
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
}, " Добавить в корзину ", -1 /* HOISTED */);
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex-w flex-m p-l-100 p-t-40 respon7\"><div class=\"flex-m bor9 p-r-10 m-r-11\"><a href=\"#\" class=\"fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100\" data-tooltip=\"Add to Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a></div><a href=\"#\" class=\"fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100\" data-tooltip=\"Facebook\"><i class=\"fa fa-facebook\"></i></a><a href=\"#\" class=\"fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100\" data-tooltip=\"Twitter\"><i class=\"fa fa-twitter\"></i></a><a href=\"#\" class=\"fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100\" data-tooltip=\"Google Plus\"><i class=\"fa fa-google-plus\"></i></a></div>", 1);
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-6 col-lg-7 p-b-30\"><div class=\"p-l-25 p-r-30 p-lr-0-lg\"><div class=\"wrap-slick3 flex-sb flex-w\"><div class=\"wrap-slick3-dots\"></div><div class=\"wrap-slick3-arrows flex-sb-m flex-w\"></div><div class=\"slick3 gallery-lb\"><div class=\"item-slick3\" data-thumb=\"/assets/images/model/manuel-animated-001.jpg\"><div class=\"wrap-pic-w pos-relative\"><img src=\"/assets/images/model/manuel-animated-001.jpg\" alt=\"IMG-PRODUCT\"><a class=\"flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04\" href=\"/assets/images/model/manuel-animated-001.jpg\"><i class=\"fa fa-expand\"></i></a></div></div><div class=\"item-slick3\" data-thumb=\"/assets/images/model/manuel-animated-002.jpg\"><div class=\"wrap-pic-w pos-relative\"><img src=\"/assets/images/model/manuel-animated-002.jpg\" alt=\"IMG-PRODUCT\"><a class=\"flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04\" href=\"/assets/images/model/manuel-animated-002.jpg\"><i class=\"fa fa-expand\"></i></a></div></div><div class=\"item-slick3\" data-thumb=\"/assets/images/model/manuel-animated-003.jpg\"><div class=\"wrap-pic-w pos-relative\"><img src=\"/assets/images/model/manuel-animated-003.jpg\" alt=\"IMG-PRODUCT\"><a class=\"flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04\" href=\"/assets/images/model/manuel-animated-003.jpg\"><i class=\"fa fa-expand\"></i></a></div></div></div></div></div></div>", 1);
var _hoisted_46 = {
  "class": "bor10 m-t-50 p-t-43 p-b-40"
};
var _hoisted_47 = {
  "class": "tab01"
};
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item p-b-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  "data-toggle": "tab",
  href: "#description",
  role: "tab"
}, "Description")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item p-b-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  "data-toggle": "tab",
  href: "#information",
  role: "tab"
}, "Additional information")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item p-b-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  "data-toggle": "tab",
  href: "#reviews",
  role: "tab"
}, "Reviews (1)")])], -1 /* HOISTED */);
var _hoisted_49 = {
  "class": "tab-content p-t-43"
};
var _hoisted_50 = {
  "class": "tab-pane fade show active",
  id: "description",
  role: "tabpanel"
};
var _hoisted_51 = {
  "class": "how-pos2 p-lr-15-md"
};
var _hoisted_52 = {
  "class": "stext-102 cl6"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "information",
  role: "tabpanel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-10 col-md-8 col-lg-6 m-lr-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "p-lr-28 p-lr-15-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "flex-w flex-t p-b-7"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl3 size-205"
}, " Weight "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl6 size-206"
}, " 0.79 kg ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "flex-w flex-t p-b-7"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl3 size-205"
}, " Dimensions "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl6 size-206"
}, " 110 x 33 x 100 cm ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "flex-w flex-t p-b-7"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl3 size-205"
}, " Materials "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl6 size-206"
}, " 60% cotton ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "flex-w flex-t p-b-7"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl3 size-205"
}, " Color "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl6 size-206"
}, " Black, Blue, Grey, Green, Red, White ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "flex-w flex-t p-b-7"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl3 size-205"
}, " Size "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl6 size-206"
}, " XL, L, M, S ")])])])])], -1 /* HOISTED */);
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "reviews",
  role: "tabpanel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-10 col-md-8 col-lg-6 m-lr-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-b-30 m-lr-15-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Review "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-w flex-t p-b-68"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "images/avatar-01.jpg",
  alt: "AVATAR"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-207"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-w flex-sb-m p-b-17"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "mtext-107 cl2 p-r-20"
}, " Ariana Grande "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fs-18 cl11"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "zmdi zmdi-star"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "zmdi zmdi-star"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "zmdi zmdi-star"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "zmdi zmdi-star"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "zmdi zmdi-star-half"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "stext-102 cl6"
}, " Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add review "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  "class": "w-full"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mtext-108 cl2 p-b-7"
}, " Add a review "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "stext-102 cl6"
}, " Your email address will not be published. Required fields are marked * "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-w flex-m p-t-50 p-b-23"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-102 cl3 m-r-16"
}, " Your Rating "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "wrap-rating fs-18 cl11 pointer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "item-rating pointer zmdi zmdi-star-outline"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "item-rating pointer zmdi zmdi-star-outline"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "item-rating pointer zmdi zmdi-star-outline"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "item-rating pointer zmdi zmdi-star-outline"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "item-rating pointer zmdi zmdi-star-outline"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "dis-none",
  type: "number",
  name: "rating"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row p-b-25"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12 p-b-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "stext-102 cl3",
  "for": "review"
}, "Your review"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  "class": "size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10",
  id: "review",
  name: "review"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-6 p-b-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "stext-102 cl3",
  "for": "name"
}, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "size-111 bor8 stext-102 cl2 p-lr-20",
  id: "name",
  type: "text",
  name: "name"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-6 p-b-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "stext-102 cl3",
  "for": "email"
}, "Email"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "size-111 bor8 stext-102 cl2 p-lr-20",
  id: "email",
  type: "text",
  name: "email"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10"
}, " Submit ")])])])])], -1 /* HOISTED */);
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-107 cl6 p-lr-25"
}, " SKU: JAK-01 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "stext-107 cl6 p-lr-25"
}, " Categories: Jacket, Men ")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  <div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Detail "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.clotheTypes, function (clotheType) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "radio",
      id: clotheType.name,
      value: clotheType.code,
      name: "radio",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $data.curClotheType = $event;
      })
    }, null, 8 /* PROPS */, _hoisted_11), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.curClotheType]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": clotheType.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(clotheType.name), 9 /* TEXT, PROPS */, _hoisted_12)]);
  }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <span>Выбрано: {{ curClotheType }}</span>")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_17, [_hoisted_18, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.printStyles, function (printStyle) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: printStyle.code,
      onClick: function onClick($event) {
        return $options.setPrintStyle(printStyle.code);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(printStyle.name), 9 /* TEXT, PROPS */, _hoisted_19);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_20])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_25, [_hoisted_26, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.sizes, function (size) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: size.code,
      onClick: function onClick($event) {
        return $options.setSize(size.code);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(size.name), 9 /* TEXT, PROPS */, _hoisted_27);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_28])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_33, [_hoisted_34, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.colors, function (color) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: color.code,
      onClick: function onClick($event) {
        return $options.setColor(color.code);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(color.name), 9 /* TEXT, PROPS */, _hoisted_35);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_36])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "mtext-104 cl3 txt-center num-product",
    type: "number",
    name: "num-product",
    value: $data.num
  }, null, 8 /* PROPS */, _hoisted_41), _hoisted_42]), _hoisted_43])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), _hoisted_44])]), _hoisted_45]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tab01 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nav tabs "), _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tab panes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" - "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.title), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" - "), _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" - "), _hoisted_54])])])]), _hoisted_55]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  </div>")], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/views/main/PlayerIndex.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/main/PlayerIndex.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlayerIndex_vue_vue_type_template_id_4c98e27a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerIndex.vue?vue&type=template&id=4c98e27a */ "./resources/js/views/main/PlayerIndex.vue?vue&type=template&id=4c98e27a");
/* harmony import */ var _PlayerIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerIndex.vue?vue&type=script&lang=js */ "./resources/js/views/main/PlayerIndex.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_renatramazanov_dev_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_renatramazanov_dev_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlayerIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlayerIndex_vue_vue_type_template_id_4c98e27a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/main/PlayerIndex.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/main/PlayerIndex.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/views/main/PlayerIndex.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlayerIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlayerIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlayerIndex.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/main/PlayerIndex.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/main/PlayerIndex.vue?vue&type=template&id=4c98e27a":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/main/PlayerIndex.vue?vue&type=template&id=4c98e27a ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlayerIndex_vue_vue_type_template_id_4c98e27a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlayerIndex_vue_vue_type_template_id_4c98e27a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlayerIndex.vue?vue&type=template&id=4c98e27a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/main/PlayerIndex.vue?vue&type=template&id=4c98e27a");


/***/ })

}]);