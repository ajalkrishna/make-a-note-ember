import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @tracked email;
  @tracked password;
  @service session;

  @action
  async login(e) {
    e.preventDefault();
    let user = { email: this.email, password: this.password };
    try {
      await this.session.authenticate(
        'authenticator:token',
        this.email,
        this.password
      );
    } catch (err) {
      console.log(err);
    }

    if (this.session.isAuthenticated) {
      console.log('Login successfull');
    } else {
      alert('invalid credentials!@');
    }
  }
}
