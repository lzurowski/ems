// Need set url REST Api in controller!
app.service('rest', function ($http, $location, $routeParams) {

    return {

        baseUrl: 'http://ems.loc/server/rest/',
        path: undefined,

        models: function () {
            //console.log(Tools);
            return $http.get(this.baseUrl + this.path + location.search);//+ '?id='  + Tools.uniqueId());
        },

        model: function () {
            if ($routeParams.expand != null) {
                return $http.get(this.baseUrl + this.path + "/" + $routeParams.id + '?expand=' + $routeParams.expand);
            }
            return $http.get(this.baseUrl + this.path + "/" + $routeParams.id);
        },

        get: function () {
            return $http.get(this.baseUrl + this.path);
        },

        postModel: function (model) {
            return $http.post(this.baseUrl + this.path, model);
        },

        putModel: function (model) {
            return $http.put(this.baseUrl + this.path + "/" + $routeParams.id, model);
        },

        deleteModel: function () {
            return $http.delete(this.baseUrl + this.path);
        }
    };

});