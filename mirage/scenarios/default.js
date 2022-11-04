export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.create('movie', {
    title: 'sdfrg',
    year: 2020,
    rating: 4.4,
  });
  server.create('note', {
    title: 'Dummy Note',
    note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
    date: 'mm/dd/yyyy',
  });
  server.create('user-login', {
    email: '123',
    password: '123',
  });
}
