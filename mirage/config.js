import { Response } from 'miragejs';
export default function () {
  // These comments are here to help you get started. Feel free to delete them.
  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.namespace = 'api';

  this.get('/notes');
  this.get('/notes/:id');
  this.post('/notes');
  this.put('/notes/:id');
  this.patch('/notes/:id');
  this.del('/notes/:id');

  this.get('/user-logins');
  this.get('/user-logins/:id');

  this.post('/user-logins', (schema, request) => {
    let { email, password } = JSON.parse(request.requestBody).data.attributes;
    let user = schema.userLogins.findBy({ email: email, password: password });
    if (user != null) {
      return new Response(200, { some: 'header' }, { data: user });

    }
  });
}
