app.directive("item", function () {
    return {


        templateUrl: 'app/templates/widget.html',
        replace: false,
        transclude: false,
        restrict: 'AE',
        scope: true,
        controller: WidgetCtrl
    }
})