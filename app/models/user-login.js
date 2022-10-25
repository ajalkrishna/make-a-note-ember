import Model, { attr } from '@ember-data/model';

export default class UserLoginModel extends Model {
  @attr email;
  @attr password;
}
