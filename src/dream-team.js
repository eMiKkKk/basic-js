const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (!Array.isArray(members)) { return false; }

  const stringMembers = members.filter(name => typeof name === 'string');

  if (stringMembers.length === 0) {
    return false;
  }

  const result = members.map((name) => {
    if (typeof name === 'string') {
      return name.trim().replace(/\s+/g, ' ')[0].toUpperCase();
    }
  })

  return result.sort().join('');
}


module.exports = {
  createDreamTeam
};
