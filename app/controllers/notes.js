import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NotesController extends Controller {
  @service application;
  @service store;
  @tracked updatedNote;
  @tracked title;
  @tracked note;

  @action
  async makeNote(e) {
    e.preventDefault();
    let currentDay = new Date().toLocaleDateString();
    let madeNote = {
      title: this.title,
      note: this.note,
      date: currentDay,
    };
    this.application.createNote(madeNote);
    this.title = undefined;
    this.note = undefined;
  }

  @action
  async edit(id) {
    this.updatedNote = await this.store.peekRecord('note', id);
  }

  @action
  async delete(index) {
    this.application.deleteNote(index);
  }
}
