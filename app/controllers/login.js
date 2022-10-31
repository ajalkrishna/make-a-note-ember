import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @tracked email;
  @tracked result;
  @tracked password;
  @service session;
  @service router;

  @action
  async login(e) {
    e.preventDefault();
    let user = { email: this.email, password: this.password };
    try {
      this.result = await this.session.authenticate('authenticator:token',user)

    } catch (err) {
      console.log(err);
    }

    if (this.session.isAuthenticated) {
      //console.log(this.result+" this is the result");
      //console.log('Login successfull');
      this.router.transitionTo('index');
    } else {
      alert('invalid credentials!');
    }
  }
}
