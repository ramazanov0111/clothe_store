<template>
    <!--  <div>-->

    <!-- Product Detail -->
    <section class="sec-product-detail bg0 p-t-65 p-b-60">
        <div class="container">
            <div class="row">

                <div class="col-md-6 col-lg-5 p-b-30">
                    <div class="p-r-50 p-t-5 p-lr-0-lg">

                        <div class="card-body">
                            <!--                            <div class="form-group">-->
                            <!--                                <label for="file">Выберите файл</label>-->
                            <!--                                <div class="input-group" style="border: 1px solid #182238;">-->
                            <!--                                    &lt;!&ndash;                                    <i class="fa fa-file" aria-hidden="true"></i>&ndash;&gt;-->
                            <!--                                    <i class="fa fa-regular fa-image" aria-hidden="true"></i>-->
                            <!--                                    <input type="file" class="custom-file-input" id="file" name="file" @change="handleFileSelect()">-->
                            <!--                                </div>-->
                            <!--                                <div class="row">-->
                            <!--                                    <span id="output"></span>-->
                            <!--                                </div>-->
                            <!--                            </div>-->

                            <!--                        <div class="flex-w flex-m p-l-100 p-t-40 respon7">-->
                            <div class="form-group">
                                <h4 class="m-tb-5">Prompt</h4>
                                <textarea class="size-110 bor8 stext-102 cl2 p-lr-20 m-tb-10 prompt"
                                          id="prompt" name="prompt"></textarea>
                                <button @click.prevent="generateImg()"
                                        class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                    Генерировать
                                </button>
                            </div>
                            <!--                        <div class="flex-w flex-m p-l-100 p-t-40 respon7">-->
                            <div v-if="generatedImg" class="form-group">
                                <div class="size-110 bor8 stext-102 cl2 p-lr-20">
                                    <img class="generatedImg" src="" alt="IMG-PRODUCT" id="result">
                                </div>
                            </div>
                        </div>
                        <!--  -->
                        <div class="p-t-33">

                            <div class="flex-w flex-r-m p-b-10">
                                <div class="size-203 flex-c-m respon6">
                                    Тип одежды
                                </div>

                                <div class="size-204 respon6-next">
                                    <div v-for="clotheType in clotheTypes" class="rs1-select2 bg0" id="radioset">
                                        <input type="radio" :id="clotheType.name" :value="clotheType.code" name="radio"
                                               @click="getPlayerProduct(clotheType.code)">
                                        <!--                                               v-model="curClotheType">-->
                                        <label :for="clotheType.name">{{ clotheType.name }}</label>
                                    </div>
                                </div>
                            </div>

                            <div class="flex-w flex-r-m p-b-10">
                                <div class="size-203 flex-c-m respon6">
                                    Размер
                                </div>

                                <div class="size-204 respon6-next">
                                    <div class="rs1-select2 bor8 bg0">
                                        <select class="js-select2" name="time">
                                            <option>Выберите размер</option>
                                            <option v-for="size in sizes" :value="size.code"
                                                    @click="setSize(size.code)">
                                                {{ size.name }}
                                            </option>
                                        </select>
                                        <div class="dropDownSelect2"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex-w flex-r-m p-b-10">
                                <div class="size-203 flex-c-m respon6">
                                    Стиль принта
                                </div>

                                <div class="size-204 respon6-next">
                                    <div class="rs1-select2 bor8 bg0">
                                        <select class="js-select2" name="time">
                                            <option>Выберите стиль принта</option>
                                            <option v-for="printStyle in printStyles" :value="printStyle.code"
                                                    @click="setPrintStyle(printStyle.code)">
                                                {{ printStyle.name }}
                                            </option>
                                        </select>
                                        <div class="dropDownSelect2"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex-w flex-r-m p-b-10">
                                <div class="size-203 flex-c-m respon6">
                                    Цвет
                                </div>

                                <div class="size-204 respon6-next">
                                    <div class="rs1-select2 bor8 bg0">
                                        <select class="js-select2" name="time">
                                            <option>Выберите цвет</option>
                                            <option v-for="color in colors" :value="color.code"
                                                    @click="setColor(color.code)">
                                                {{ color.name }}
                                            </option>
                                        </select>
                                        <div class="dropDownSelect2"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex-w flex-r-m p-b-10">
                                <div class="size-204 flex-w flex-m respon6-next">
                                    <div class="wrap-num-product flex-w m-r-20 m-tb-10">

                                        <div class="number" data-step="1" data-min="1" data-max="100">
                                            <input class="number-text" type="text" name="count" value="1">
                                            <a href="#" class="number-minus">−</a>
                                            <a href="#" class="number-plus">+</a>
                                        </div>

                                    </div>

                                    <button @click.prevent="addToCart(product, false)"
                                            class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-md-6 col-lg-7 p-b-30">
                    <div class="p-l-25 p-r-30 p-lr-0-lg">
                        <canvas id="WebGL-output">
                        </canvas>
                    </div>
                </div>
            </div>

            <div class="bor10 m-t-50 p-t-43 p-b-40">
                <!-- Tab01 -->
                <div class="tab01">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item p-b-10">
                            <a class="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                        </li>

                        <li class="nav-item p-b-10">
                            <a class="nav-link" data-toggle="tab" href="#information" role="tab">Additional
                                information</a>
                        </li>

                        <li class="nav-item p-b-10">
                            <a class="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (1)</a>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content p-t-43">
                        <!-- - -->
                        <div class="tab-pane fade show active" id="description" role="tabpanel">
                            <div class="how-pos2 p-lr-15-md">
                                <p class="stext-102 cl6">
                                    {{ product.title }}
                                </p>
                            </div>
                        </div>

                        <!-- - -->
                        <div class="tab-pane fade" id="information" role="tabpanel">
                            <div class="row">
                                <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                    <ul class="p-lr-28 p-lr-15-sm">
                                        <li class="flex-w flex-t p-b-7">
											<span class="stext-102 cl3 size-205">
												Weight
											</span>

                                            <span class="stext-102 cl6 size-206">
												0.79 kg
											</span>
                                        </li>

                                        <li class="flex-w flex-t p-b-7">
											<span class="stext-102 cl3 size-205">
												Dimensions
											</span>

                                            <span class="stext-102 cl6 size-206">
												110 x 33 x 100 cm
											</span>
                                        </li>

                                        <li class="flex-w flex-t p-b-7">
											<span class="stext-102 cl3 size-205">
												Materials
											</span>

                                            <span class="stext-102 cl6 size-206">
												60% cotton
											</span>
                                        </li>

                                        <li class="flex-w flex-t p-b-7">
											<span class="stext-102 cl3 size-205">
												Color
											</span>

                                            <span class="stext-102 cl6 size-206">
												Black, Blue, Grey, Green, Red, White
											</span>
                                        </li>

                                        <li class="flex-w flex-t p-b-7">
											<span class="stext-102 cl3 size-205">
												Size
											</span>

                                            <span class="stext-102 cl6 size-206">
												XL, L, M, S
											</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- - -->
                        <div class="tab-pane fade" id="reviews" role="tabpanel">
                            <div class="row">
                                <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                    <div class="p-b-30 m-lr-15-sm">
                                        <!-- Review -->
                                        <div class="flex-w flex-t p-b-68">
                                            <div class="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                                <img src="images/avatar-01.jpg" alt="AVATAR">
                                            </div>

                                            <div class="size-207">
                                                <div class="flex-w flex-sb-m p-b-17">
													<span class="mtext-107 cl2 p-r-20">
														Ariana Grande
													</span>

                                                    <span class="fs-18 cl11">
														<i class="zmdi zmdi-star"></i>
														<i class="zmdi zmdi-star"></i>
														<i class="zmdi zmdi-star"></i>
														<i class="zmdi zmdi-star"></i>
														<i class="zmdi zmdi-star-half"></i>
													</span>
                                                </div>

                                                <p class="stext-102 cl6">
                                                    Quod autem in homine praestantissimum atque optimum est, id
                                                    deseruit. Apud ceteros autem philosophos
                                                </p>
                                            </div>
                                        </div>

                                        <!-- Add review -->
                                        <form class="w-full">
                                            <h5 class="mtext-108 cl2 p-b-7">
                                                Add a review
                                            </h5>

                                            <p class="stext-102 cl6">
                                                Your email address will not be published. Required fields are marked *
                                            </p>

                                            <div class="flex-w flex-m p-t-50 p-b-23">
												<span class="stext-102 cl3 m-r-16">
													Your Rating
												</span>

                                                <span class="wrap-rating fs-18 cl11 pointer">
													<i class="item-rating pointer zmdi zmdi-star-outline"></i>
													<i class="item-rating pointer zmdi zmdi-star-outline"></i>
													<i class="item-rating pointer zmdi zmdi-star-outline"></i>
													<i class="item-rating pointer zmdi zmdi-star-outline"></i>
													<i class="item-rating pointer zmdi zmdi-star-outline"></i>
													<input class="dis-none" type="number" name="rating">
												</span>
                                            </div>

                                            <div class="row p-b-25">
                                                <div class="col-12 p-b-5">
                                                    <label class="stext-102 cl3" for="review">Your review</label>
                                                    <textarea class="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10"
                                                              id="review" name="review"></textarea>
                                                </div>

                                                <div class="col-sm-6 p-b-5">
                                                    <label class="stext-102 cl3" for="name">Name</label>
                                                    <input class="size-111 bor8 stext-102 cl2 p-lr-20" id="name"
                                                           type="text" name="name">
                                                </div>

                                                <div class="col-sm-6 p-b-5">
                                                    <label class="stext-102 cl3" for="email">Email</label>
                                                    <input class="size-111 bor8 stext-102 cl2 p-lr-20" id="email"
                                                           type="text" name="email">
                                                </div>
                                            </div>

                                            <button
                                                class="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
			<span class="stext-107 cl6 p-lr-25">
				SKU: JAK-01
			</span>

            <span class="stext-107 cl6 p-lr-25">
				Categories: Jacket, Men
			</span>
        </div>
    </section>

    <!--  </div>-->
</template>

<script>
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

export default {
    name: "PlayerIndex",
    mounted() {
        // $(document).trigger('init')
        this.getColors()
        this.getSizes()
        this.getPrintStyles()
        this.getClotheTypes()
        this.getPlayerProduct()
    },
    data() {
        return {
            colors: [],
            sizes: [],
            printStyles: [],
            clotheTypes: [],

            curClotheType: null,
            curPrintStyle: 1,
            curSize: null,
            curColor: null,

            product: [],
            generatedImg: null,
        }
    },
    methods: {

        async generateImg() {
            let prompt = $('#prompt').val();

            await this.axios.get('/api/generate', {
                params: {
                    prompt: prompt,
                }
            })
                .then(res => {
                    this.generatedImg = res.data.output[0]
                })
                .finally(v => {
                    $(document).trigger('changed')
                })

            // console.log($('.generatedImg'), this.generatedImg);

            $('.generatedImg').attr("src", this.generatedImg);
        },
        getPlayerProduct(clotheType) {
            this.axios.get('/api/player_product', {
                params: {
                    clotheType: clotheType
                }
            })
                .then(res => {
                    // console.log(res);
                    this.product = res.data.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })

            for (let i = 0; i < this.clotheTypes.length; i += 1) {
                if (this.clotheTypes[i].code === clotheType) {
                    this.curClotheType = this.clotheTypes[i]
                    // this.curClotheType.name = this.clotheTypes[i].name
                    // this.curClotheType.code = this.clotheTypes[i].code
                    break;
                }
            }

            this.setModel();
        },

        setColor(color) {
            this.curColor = color
        },
        setSize(size) {
            this.curSize = size
        },
        setPrintStyle(printStyle) {
            this.curPrintStyle = printStyle
        },
        // getProduct() {
        //     this.axios.get(`/api/player_products/${this.curClotheType}`)
        //         .then(res => {
        //             this.product = res.data.data
        //         })
        //         .finally(v => {
        //             $(document).trigger('changed')
        //         })
        // },
        getColors() {
            this.axios.get('/api/colors')
                .then(res => {
                    this.colors = res.data.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },
        getSizes() {
            this.axios.get('/api/sizes')
                .then(res => {
                    this.sizes = res.data.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },
        getPrintStyles() {
            this.axios.get('/api/print_styles')
                .then(res => {
                    this.printStyles = res.data.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },

        getClotheTypes() {
            this.axios.get('/api/clothe_types')
                .then(res => {
                    this.clotheTypes = res.data.data
                    this.curClotheType = this.clotheTypes[0];
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },

        addToCart(product, isSingle) {

            let qty = isSingle ? 1 : $('.number-text').val();
            let cart = localStorage.getItem('cart');
            $('.number-text').val(1);

            let newProduct = [
                {
                    'id': product.id,
                    'slug': product.slug,
                    'qty': qty,
                    'title': product.title,
                    'price': product.price,
                    'image': product.imageUrl,
                    'color': this.curColor,
                    'size': this.curSize,
                }
            ];

            if (!cart) {
                localStorage.setItem('cart', JSON.stringify(newProduct));
            } else {
                cart = JSON.parse(cart)
                cart.forEach(productInCart => {
                    if (productInCart.id === product.id) {
                        productInCart.qty = Number(productInCart.qty) + Number(qty)
                        newProduct = null
                    }
                })
                Array.prototype.push.apply(cart, newProduct)
                localStorage.setItem('cart', JSON.stringify(cart));
            }

        },

        setModel() {
            const loader = new GLTFLoader();

            let canvas = document.getElementById('WebGL-output')

            canvas.width = window.innerWidth / 2.5
            canvas.height = window.innerHeight / 1.5

            let scene = new THREE.Scene();
            let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            // camera.position.x = -30;
            // camera.position.y = 40;
            camera.position.z = 30;

            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                antialias: true
            })
            renderer.shadowMap.enabled = true
            renderer.setClearColor(0xDCDCDC);

            let controls = new OrbitControls(camera, renderer.domElement);

            let light = new THREE.DirectionalLight()
            light.position.set(200, 0, 0)
            light.castShadow = true
            scene.add(light,
                new THREE.AmbientLight(0xffffff, 0.25),
                new THREE.HemisphereLight(0xffffff, 0x7f7f7f, 0.5)
            );

            let model = null;
            let modelName = 't_shirt/scene.gltf';

            if (this.curClotheType) {
                if (this.curClotheType.name === 'Худи') {
                    modelName = 'blue_hoodie/scene.gltf';
                } else if (this.curClotheType.name === 'Футболка') {
                    modelName = 't_shirt/scene.gltf';
                } else {
                    modelName = 'tshirt/scene.gltf';
                }
            }


            loader.load(`/assets/models/${modelName}`,
                function (gltf) {
                    model = gltf.scene;
                    let box3 = new THREE.Box3().setFromObject(model);
                    let center = new THREE.Vector3();
                    box3.getCenter(center);
                    model.position.sub(center);
                    scene.add(model);
                    // console.log(model)

                },
                function (xhr) {

                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');

                },
                function (error) {

                    console.error(error);
                    console.log('Произошла ошибка!');

                });

            const rendering = () => {
                renderer.render(scene, camera)
                requestAnimationFrame(rendering)
                camera.lookAt(scene.position.x, scene.position.y, scene.position.z)
            }
            rendering()

            // camera.lookAt(scene.position.x, scene.position.y, scene.position.z);
            // $("#WebGL-output").append(renderer.domElement);
            // renderer.render(scene, camera);
        },

        handleFileSelect(evt) {
            var file = evt.target.files; // FileList object
            var f = file[0];
            // Only process image files.
            if (!f.type.match('image.*')) {
                alert("Image only please....");
            }
            var reader = new FileReader();
            // Closure to capture the file information.
            reader.onload = (function (theFile) {
                return function (e) {
                    // Render thumbnail.
                    var span = document.createElement('span');
                    span.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
                    document.getElementById('output').insertBefore(span, null);
                };
            })(f);
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        },
    }
}

</script>

<style>

.generatedImg {
    max-width: 100%;
    width: auto;
    /*border: 1px solid #182238;*/
}

.custom-file-input {
    height: 35px;
}

i.fa {
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin-right: -35px;
    position: relative;
    z-index: 1;
    float: left;
}

i.fa + input {
    padding-left: 35px;
}

</style>
