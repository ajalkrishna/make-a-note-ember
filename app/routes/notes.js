import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NotesRoute extends Route {
  @service application;
  @service session;
  
  beforeModel(transition) {
    this.session.requireAuthentication(transition,'login')
    
  }

  async model() {
    return this.application.getNotes();
  }
}
