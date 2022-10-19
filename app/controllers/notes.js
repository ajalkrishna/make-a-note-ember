import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NotesController extends Controller {
  @tracked title;
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
    this.application.createNote(madeNote);
  }
}
