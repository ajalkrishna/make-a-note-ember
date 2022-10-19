import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NoteCardComponent extends Component {
  @service store;
  @service application;

  @action
  async delete(index) {
    this.application.deleteNote(index);
  }

  @action
  async edit(index) {
    console.log(index);
  }
}
