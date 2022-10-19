import { module, test } from 'qunit';
import { setupTest } from 'demo-app/tests/helpers';

module('Unit | Controller | notes', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:notes');
    assert.ok(controller);
  });
});
