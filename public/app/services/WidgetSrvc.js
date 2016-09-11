app.factory('WidgetSrvc', function($http, $q) {
    return {
        index: function() {
            var path = '/item';
            var defer = $q.defer();
            $http.get(path)
                .success(function(data) {
                    defer.resolve(data);
                })
                .error(function(error) {
                    defer.reject(error);
                });
            return defer.promise;
        },
        create: function(item) {
            var path = '/item';
            var defer = $q.defer();
            $http.post(path, item)
                .success(function(data) {
                    defer.resolve(data);
                })
                .error(function(error) {
                    defer.reject(error);
                });
            return defer.promise;
        },
        show: function(id) {
            var path = '/item/' + id;
            var defer = $q.defer();
            $http.get(path)
                .success(function(data) {
                    defer.resolve(data);
                })
                .error(function(error) {
                    defer.reject(error);
                });
            return defer.promise;
        }
    };

});