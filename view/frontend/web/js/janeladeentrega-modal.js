define(["jquery", "Magento_Ui/js/modal/modal"],
    function ($) {
        "use strict";
        const JanelaDeEntregaModal = {
            initModal: function (config, element) {
                const $target = $(config.target);
                var options = {
                    type: 'popup',
                    responsive: true,
                    innerScroll: true,
                    buttons: [],
                    opened: function($Event) {
                        $(".modal-footer").hide()
                    }
                };
                $target.modal(options, $('#modal-content'));
                const $element = $(element);
                $element.click(function () {
                    $target.removeAttr('style')
                    $target.modal('openModal');
                });
            }
        };

        return {
            'janeladeentrega-modal': JanelaDeEntregaModal.initModal
        };
    }
);
