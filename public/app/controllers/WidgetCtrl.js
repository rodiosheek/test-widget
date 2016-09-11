var WidgetCtrl = function($scope, WidgetSrvc) {
    console.log('Widget Controller');

    $scope.item;
    $scope.data;
    $scope.dropdown = false;

    $scope.index = function (){
        WidgetSrvc.index().then(
            function(data) {
                $scope.items = data;
                console.log(data);
            },
            function(error) {
                console.log(error);
            }
        );
    };
    $scope.index();
    $scope.addItem = function() {
        var item = $scope.item.text;
        WidgetSrvc.create({
            item: item
        }).then(
            function(data) {
                console.log(data);
            },
            function(error) {
                console.log(error);
            }
        );
        $scope.index();
    };

    $scope.itemClick = function(id) {
        $scope.dropdown = !$scope.dropdown;
        WidgetSrvc.show(id).then(
            function(data) {
                $scope.data = data;
            },
            function(error) {
                console.log(error);
            }
        );
    }

};

app.controller('WidgetCtrl', WidgetCtrl);