import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';

export default class TokenAuthenticator extends Base {
  @service store;

  restore(data) { }

  async authenticate(user) {
;
    // this.store.createRecord('user-login',user);
    let response = await this.store.findRecord('user-login', 1);
    let { email, password }=response;
    if(email===user.email && password===user.password){
      return response;
    }
    else{
      console.log("invalid credentials");
      return null;
    }

  }

  async invalidate(data) { }
}
