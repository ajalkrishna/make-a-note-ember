import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';

export default class TokenAuthenticator extends Base {
  @service store;
  @service application;

  restore(data) { }

  async authenticate(user) {
    this.application.loginUser(user)
  }

  async invalidate(data) { }
}
