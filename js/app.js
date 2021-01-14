//PAYMENT CONTROLLER
var paymentController = (function () {})();

//UI CONTROLLER
var UIController = (function () {
    var DOMstrings = {
        subscribeBtn: ".subscribe-btn",
        form: "#fields_fname"
    };
    return {
        subscribe: function () {
            $(DOMstrings.form).focus();
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
    };

    return {
        init: function () {
            console.log("Application has started");
            setupEventListeners();
        }
    };
})(paymentController, UIController);

$(document).ready(function () {
    controller.init();
});