import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class NoteModel extends Model {
  @attr title;
  @attr note;
  @attr date;
}
