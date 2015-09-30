var routerApp = angular.module('routerApp', ["ui.router"]);

routerApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider            
            .state("Home",
                {
                    url: "/",
                    templateUrl: "templates/Home.html",
                    controller: "HomeController"
                })
            .state("About",
                {
                    url: "/About",
                    templateUrl: "templates/About.html",
                    controller: "AboutController"
                })
            .state("Contact",
                {
                    url: "/Contact",
                    templateUrl: "templates/Contact.html",
                    controller: "ContactController"
                });
    }
]);