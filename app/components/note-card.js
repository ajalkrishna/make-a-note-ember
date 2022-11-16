import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NoteCardComponent extends Component {
  @service application;
  @tracked notes;

  @action update() {
    this.application.editNote(this.args.update);
  }
}
