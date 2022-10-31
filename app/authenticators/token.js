import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';

export default class TokenAuthenticator extends Base {
  @service store;

  restore(data) { }

  async authenticate(user) {
    let login = await this.store.createRecord('user-login',user);
    login.save();

  }

  async invalidate(data) { }
}
