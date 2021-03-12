/* exported omit */

function omit(source, keys) {
  const newObject = {};
  let isAKey = false;
  for (const key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        isAKey = true;
      }
    }
    if (!isAKey) {
      newObject[key] = source[key];
    }
    isAKey = false;
  }
  return newObject;
}
