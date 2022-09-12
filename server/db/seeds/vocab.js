exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('vocab')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('vocab').insert([
        { id: 1, kupu: 'pene', week: 1, addedBy: '' },
        { id: 2, kupu: 'pukapuka', week: 1, addedBy: '' },
        { id: 3, kupu: 'rākau', week: 1, addedBy: '' },
        { id: 4, kupu: 'ika', week: 1, addedBy: '' },
        { id: 5, kupu: 'waka', week: 1, addedBy: '' },
        { id: 6, kupu: 'tā whakaahua', week: 1, addedBy: '' },
        { id: 7, kupu: 'whare', week: 1, addedBy: '' },
        { id: 8, kupu: 'ngeru', week: 1, addedBy: '' },
        { id: 9, kupu: 'hū', week: 1, addedBy: '' },
        { id: 10, kupu: 'manu', week: 1, addedBy: '' },
        { id: 11, kupu: 'pūngāwerewere', week: 1, addedBy: '' },
        { id: 12, kupu: 'rau', week: 1, addedBy: '' },
        { id: 13, kupu: 'wakarererangi', week: 1, addedBy: '' },
        { id: 14, kupu: 'wharekai', week: 1, addedBy: '' },
        { id: 15, kupu: 'whare rongoā', week: 1, addedBy: '' },
        { id: 16, kupu: 'tāne', week: 1, addedBy: '' },
        { id: 17, kupu: 'wahine', week: 1, addedBy: '' },
        { id: 18, kupu: 'kōtiro', week: 1, addedBy: '' },
      ])
    })
}
