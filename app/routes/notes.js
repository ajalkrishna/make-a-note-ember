import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NotesRoute extends Route {
  @service application;
  @service store;

  async model() {
    let result = await this.store.findAll('note');
    return result;
  }
}
