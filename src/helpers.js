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
 * @returns {array}
 */
export const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
 * Check if current page is part of blog.
 * @param {string} location
 * @returns {boolean}
 */
export const isBlog = location => {
  return location?.pathname === "/blog" ||
    location?.pathname.split("/")[1] === "blog"
}
