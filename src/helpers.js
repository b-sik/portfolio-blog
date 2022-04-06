/**
 * Handle key down.
 * @param {object} e Event.
 * @param {function} cb Callback.
 * @param {*} arg Callback argument.
 */
export const handleKeyDown = (e, cb, arg = null) => {
  const { key, code, keyCode } = e

  if (typeof key !== "undefined" && key === "Enter") {
    arg !== null ? cb(arg) : cb()
  } else if (typeof code !== "undefined" && code === "Enter") {
    arg !== null ? cb(arg) : cb()
  } else if (typeof keyCode !== "undefined" && keyCode === 13) {
    arg !== null ? cb(arg) : cb()
  }
}

/**
 * Shuffle array.
 * @param {array} array 
 */
export const shuffleArray= (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}