/* exported pick */

function pick(source, keys) {
  const newObject = {};
  for (const key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i] && source[key] !== undefined) {
        newObject[keys[i]] = source[key];
      }
    }
  }
  return newObject;
}
