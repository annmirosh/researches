angular.module('toaster.service', [])
  .service('ToasterService', ToasterService);

ToasterService.$inject = [ 'toaster' ];

function ToasterService(toaster) {

  this.showMessage = showMessage;

  function showMessage(errorMsg) {
    toaster.pop({
      type: 'error',
      title: 'Oops!',
      body: errorMsg,
      timeout:   5000,
      showCloseButton: true
    });
  }
}