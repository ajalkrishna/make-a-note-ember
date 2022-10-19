import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NotesRoute extends Route {
  @service application;
  async model() {
    return this.application.getNotes();
  }
}
