require(['jquery'], function ($) {
    'use strict';

    if ($(window).width() < 767) {
        $(".header-top-right-inner.f-right").appendTo(".page-header.header-style-15");
    }

});
