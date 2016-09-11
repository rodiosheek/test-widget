function itemWidget () {
    return {
        restrict: 'EA',
        replace: true,
        scope: true,
        controllerAs: 'something',
        controller: function () {

        },
        link: function ($scope, $element, $attrs) {

        },
        template: [
            '<div class="some-directive">',
            'My directive!',
            '</div>'
        ].join('')
    };
};

app.directive('itemWidget', itemWidget);