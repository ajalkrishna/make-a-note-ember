import Service from '@ember/service';

export default class ApplicationService extends Service {
  collection = [];

  getCollection() {
    return this.collection;
  }
  addToCollection(note) {
    this.collection.push(note);
  }
}
