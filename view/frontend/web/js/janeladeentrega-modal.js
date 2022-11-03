define(['jquery', 'Magento_Ui/js/modal/modal'],
    function ($, modal) {
        const options = {
            type: 'popup',
            responsive: true,
            innerScroll: true,
            title: '',
            buttons: []
        };

        modal(options, $('#modal-content'));
        $("#modal-button").on('click', function () {
            $("#modal-content").modal("openModal");
        });
    }
);

// require(["jquery", "Magento_Ui/js/modal/modal"], function ($, modal) {
//     "use strict";
//     const JanelaDeEntregaModal = {
//         initModal: function (config, element) {
//             const $target = $(config.target);
//             const options = {
//                 type: 'popup', responsive: true, innerScroll: true, title: 'Pop-up title', buttons: [], opened: function ($Event) {
//                     $(".modal-footer").hide()
//                 }
//             };
//             $target.modal(options, $('#modal-content'));
//             const $element = $(element);
//             $element.click(function () {
//                 $target.removeAttr('style')
//                 $target.modal('openModal');
//             });
//         }
//     };
//
//     return {
//         'janeladeentrega-modal': JanelaDeEntregaModal.initModal
//     };
// });
