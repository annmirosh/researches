'use strict';

describe('Today view', function () {
  beforeEach(function () {
    browser.get('#');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Food Tracker');
  });

  it('should have 2 buttons for adding info about food', function () {
    expect(element(by.id('addIngestion')).isPresent()).toBe(true);
    expect(element(by.id('addSnack')).isPresent()).toBe(true);
  });

  it('if user clicks on the button twice, 2 blocks with food info should be displayed', function () {
    var addIngestionBtn = element(by.id('addIngestion'));

    addIngestionBtn.click();
    addIngestionBtn.click();

    expect(element.all(by.repeater('ingestion in todayCtrl.ingestions')).count()).toBe(2);
  });

  it('blocks with food should have right title', function () {
    var addSnackBtn = element(by.id('addSnack'));

    addSnackBtn.click();

    expect(element(by.css('.panel-heading')).getText()).toEqual('snack');
  });

  it('when user clicks on close icon, block with info about food should be removed', function () {
    var addSnackBtn = element(by.id('addSnack')),
      closeBtn;

    addSnackBtn.click().then(function () {
      expect(element(by.css('.panel-heading')).isPresent()).toBe(true);

      closeBtn = element(by.css('.glyphicon-remove'));

      closeBtn.click().then(function () {
        expect(element(by.css('.panel-heading')).isPresent()).toBe(false);
      });
    });
  });
});
