/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var TodayController = (function () {
            function TodayController(IngestionService, DateTimeService) {
                this.IngestionService = IngestionService;
                this.DateTimeService = DateTimeService;
                this.ingestions = [];
            }
            TodayController.prototype.addIngestion = function (isSnack) {
                this.ingestions.push(this.createIngestion(isSnack));
                console.log(this.ingestions);
            };
            TodayController.prototype.createIngestion = function (isSnack) {
                return {
                    title: this.getTitleIngestion(isSnack),
                    time: this.DateTimeService.now(),
                    foods: []
                };
            };
            TodayController.prototype.getTitleIngestion = function (isSnack) {
                return this.IngestionService.getTitle(isSnack);
            };
            return TodayController;
        })();
        angular.module('app').controller('TodayController', TodayController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
