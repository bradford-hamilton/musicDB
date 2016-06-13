exports.seed = function(knex, Promise){
  return Promise.join(
    knex('track').del(),

    knex('track').insert({id: 1, name: 'Strawberry Fields', artist_id: 1}),
    knex('track').insert({id: 2, name:'Soft Bulletin', artist_id: 2})
  );
};
