import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class ApplicationService extends Service {
  @service store;

  async getNotes() {
    return await this.store.findAll('note');
  }

  async getNote(id) {
    return await this.store.findRecord('note', id);
  }
  async createNote(note) {
    let response = await this.store.createRecord('note', note);
    response.save();
  }
  async editNote({ id, note, title }) {
    let response = await this.store.findRecord('note', id);
    response.note = note;
    response.title = title;
    response.save();
  }

  async deleteNote(id) {
    let response = await this.store.peekRecord('note', id);
    response.deleteRecord();
    response.save();
  }
}
