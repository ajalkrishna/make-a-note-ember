import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class MovieModel extends Model {
  @attr title;
  @attr year;
  @attr rating;
}
