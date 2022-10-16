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
  server.create('note',{
    title:"First Note",
    note:"It was a wonderful day",
    date:"10/16/2022"
  })
}
