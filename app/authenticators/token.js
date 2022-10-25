import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';

export default class TokenAuthenticator extends Base {
  @service store;

  restore(data) {}

  async authenticate(email, password) {
    // this.store.createRecord('user-login',user);
    let response = await this.store.findAll('user-login');
    return response;
  }

  invalidate(data) {}
}
