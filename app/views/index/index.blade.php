<!doctype html>
<html lang="en" ng-app="app">
<head>
    <meta charset="UTF-8">
    <title>Laravel PHP Framework</title>
    <link rel="stylesheet" href="{{asset('css/styles.css')}}">
</head>
<body ng-controller="WidgetCtrl">

<div class="item-widget">
    <input class="widget-input" ng-model="item.text" ng-keyup="$event.keyCode == 13 ? addItem() : null">
    <button class="widget-button" ng-click="dropdown = !dropdown">Button</button>
    <div class="dropdown-area" ng-show="dropdown">
        <div class="dropdown">
            <ul>
                <li ng-repeat="item in items" ng-click="itemClick(item.id)" data-id="@{{ item.id }}">@{{item.item_text}}</li>
            </ul>
        </div>
    </div>
    <div class="item-info" >

        <div>@{{ data.item_text }}</div>
    </div>
</div>



<script src="{{asset('sources/angular.js')}}"></script>
<script src="{{asset('app/app.js')}}"></script>
<script src="{{asset('app/controllers/WidgetCtrl.js')}}"></script>
<script src="{{asset('app/services/WidgetSrvc.js')}}"></script>
<script src="{{asset('app/directives/WidgetDrtv.js')}}"></script>

</body>
</html>
