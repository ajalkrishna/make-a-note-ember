import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class IndexController extends Controller {
  @tracked title;
  @tracked note;
  @tracked noteCollection;
  @service application;
  @service store;

  @action
  async makeNote(e) {
    e.preventDefault();
    let currentDay = new Date().toLocaleDateString();
    let madeNote = {
      title: this.title,
      note: this.note,
      date: currentDay,
    };
    // this.application.addToCollection(madeNote);
    // this.noteCollection = this.application.getCollection();
    let note = await this.store.createRecord('note', madeNote);
    note.save();
  }
}
