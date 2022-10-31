const _ = require('lodash');

const existingExperiences = [
  {
    name: 'experience1',
    audiences: [
      { group: 'division', audience: 'women' },
      { group: 'cardHolderStatus', audience: 'cardHolder' },
    ],
  },
  {
    name: 'experience2',
    audiences: [
      { group: 'division', audience: 'women' },
      { group: 'cardHolderStatus', audience: 'nonCardHolder' },
    ],
  },
];

const currentAudienceSelections = [
  { group: 'division', audiences: ['men', 'women'] },
  { group: 'cardHolderStatus', audiences: ['cardHolder'] },
];

const conflict = existingExperiences.reduce((conflict, existingExperience) => {
  const x = existingExperience.audiences.reduce((acc, audience) => {
    return 
    debugger;
  }, {});
}, {});

console.log(hasConflict);
