<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Store</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href="{{ asset('assets/images/icons/favicon.png') }}"/>
    <link type="text/css" href="{{ asset('assets/vendor/bootstrap/css/bootstrap.min.css') }}">
    <link type="text/css"
          href="{{ asset('assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css') }}">
    <link type="text/css"
          href="{{ asset('assets/fonts/iconic/css/material-design-iconic-font.min.css') }}">
    <link type="text/css" href="{{ asset('assets/fonts/linearicons-v1.0.0/icon-font.min.css') }}">
    <link type="text/css" href="{{ asset('assets/vendor/animate/animate.css') }}">
    <link type="text/css" href="{{ asset('assets/vendor/css-hamburgers/hamburgers.min.css') }}">
    <link type="text/css" href="{{ asset('assets/vendor/animsition/css/animsition.min.css') }}">
    <link type="text/css" href="{{ asset('assets/vendor/select2/select2.min.css') }}">
    <link type="text/css" href="{{ asset('assets/vendor/daterangepicker/daterangepicker.css') }}">
    <link type="text/css" href="{{ asset('assets/vendor/slick/slick.css') }}">
    <link type="text/css" href="{{ asset('assets/vendor/MagnificPopup/magnific-popup.css') }}">
    <link type="text/css" href="{{ asset('assets/vendor/perfect-scrollbar/perfect-scrollbar.css') }}">
    <link type="text/css" href="{{ asset('assets/css/util.css') }}">
    <link type="text/css" href="{{ asset('assets/css/main.css') }}">

    <script type="text/javascript" src="{{ asset('js/app.js') }}" defer></script>
</head>

@yield('content')

<script type="text/javascript" src="{{ asset('assets/vendor/jquery/jquery-3.2.1.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendor/animsition/js/animsition.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendor/bootstrap/js/popper.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendor/bootstrap/js/bootstrap.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendor/select2/select2.min.js') }}"></script>
<script>type="text/javascript"
    // $(document).on('change', function () {
    $(".js-select2").each(function () {
        $(this).select2({
            minimumResultsForSearch: 20,
            dropdownParent: $(this).next('.dropDownSelect2')
        });
    })
    // });
</script>
<script type="text/javascript" src="{{ asset('assets/vendor/daterangepicker/moment.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendor/daterangepicker/daterangepicker.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendor/slick/slick.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/js/slick-custom.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendor/parallax100/parallax100.js') }}"></script>
<script>type="text/javascript"
    $('.parallax100').parallax100();
</script>
<script type="text/javascript" src="{{ asset('assets/vendor/MagnificPopup/jquery.magnific-popup.min.js') }}"></script>
<script>type="text/javascript"
    $('.gallery-lb').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-fade'
        });
    });
</script>
<script type="text/javascript" src="{{ asset('assets/vendor/isotope/isotope.pkgd.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendor/sweetalert/sweetalert.min.js') }}"></script>
<script>type="text/javascript"
    $('.js-addwish-b2').on('click', function (e) {
        e.preventDefault();
    });

    $('.js-addwish-b2').each(function () {
        var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
        $(this).on('click', function () {
            swal(nameProduct, "is added to wishlist !", "success");

            $(this).addClass('js-addedwish-b2');
            $(this).off('click');
        });
    });

    $('.js-addwish-detail').each(function () {
        var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();

        $(this).on('click', function () {
            swal(nameProduct, "is added to wishlist !", "success");

            $(this).addClass('js-addedwish-detail');
            $(this).off('click');
        });
    });

    /*---------------------------------------------*/

    $('.js-addcart-detail').each(function () {
        var nameProduct = $(this).parent().parent().parent().parent().find('.js-name-detail').html();
        $(this).on('click', function () {
            swal(nameProduct, "is added to cart !", "success");
        });
    });
</script>
<script type="text/javascript" src="{{ asset('assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
<script>type="text/javascript"
    $('.js-pscroll').each(function () {
        $(this).css('position', 'relative');
        $(this).css('overflow', 'hidden');
        var ps = new PerfectScrollbar(this, {
            wheelSpeed: 1,
            scrollingThreshold: 1000,
            wheelPropagation: false,
        });

        $(window).on('resize', function () {
            ps.update();
        })
    });
</script>
<script type="text/javascript" src="{{ asset('assets/js/main.js') }}"></script>

</html>
