//PAYMENT CONTROLLER
var paymentController = (function () {})();

//UI CONTROLLER
var UIController = (function () {
    var DOMstrings = {
        subscribeBtn: ".subscribe-btn",
        form: "#fields_fname",
        loadingScreen: ".loading-screen",
        slideTopFoldElements: ".slideTopFoldAnim",
        slideElements: ".slideAnim"
    };
    return {
        subscribe: function () {
            $(DOMstrings.form).focus();
        },
        hideLoadingScreen: function () {
            $(DOMstrings.loadingScreen).fadeOut(1000, function () {
                $(DOMstrings.slideTopFoldElements).addClass("slide-left");
            });
        },

        slideInElements: function () {
            $(DOMstrings.slideElements).each(function () {
                var pos, winTop;

                pos = $(this).offset().top;
                winTop = $(window).scrollTop();

                if (pos < winTop + 600) {
                    $(this).addClass("slide-left");
                }
            });
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = (function (paymentCtrl, UICtrl) {
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        $(DOM.subscribeBtn).click(function () {
            UICtrl.subscribe();
        });

        $(window).scroll(function () {
            UICtrl.slideInElements();
        });
    };

    return {
        init: function () {
            console.log("Application has started");
            setupEventListeners();
            UICtrl.hideLoadingScreen();
        }
    };
})(paymentController, UIController);

$(document).ready(function () {
    controller.init();
});