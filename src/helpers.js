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
