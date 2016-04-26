import Ember from 'ember';

export default Ember.Component.extend({
  sharedService: Ember.inject.service(),
  didInsertElement() {
    this.get('sharedService.elements').push('hello');
  }
});
