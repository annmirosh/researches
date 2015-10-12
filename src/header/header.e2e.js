'use strict';

describe('Header view', function () {
  beforeEach(function () {
    browser.get('#');
  });

  it('active item in menu should have selection', function () {
    var todayItem = element(by.id('todayItem')),
      historyItem = element(by.id('historyItem'));

    expect(todayItem.getAttribute('class')).toMatch('active');
    expect(historyItem.getAttribute('class')).not.toMatch('active');

    historyItem.click();

    expect(todayItem.getAttribute('class')).not.toMatch('active');
    expect(historyItem.getAttribute('class')).toMatch('active');
  });
});
