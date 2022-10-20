import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NoteCardComponent extends Component {
  @service application;

  @action update() {
    this.application.editNote(this.args.update);
  }
}
