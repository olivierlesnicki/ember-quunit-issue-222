import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('b-component', 'Integration | Component | b component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{b-component}}`);

  assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  this.render(hbs`
    {{#b-component}}
      template block text
    {{/b-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
