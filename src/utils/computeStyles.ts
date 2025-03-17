/**
 * `computeStyles` is a function that computes CSS class names based on a condition.
 * @param {string} baseClassName - The base CSS class name that is always applied.
 * @param {Object} options - An object that contains the condition and the class names to be applied based on the condition.
 * @param {boolean} options.condition - The condition based on which the class names are applied.
 * @param {string} options.valid - The class name that is applied when the condition is true.
 * @param {string} options.unvalid - The class name that is applied when the condition is false.
 *
 * @returns {string} - A string of class names separated by a space. It always starts with the base class name, followed by either the `valid` or `unvalid` class name based on the `condition`.
 */
export const computeStyles = (baseClassName: string, options: {
    condition?: boolean,
    valid?: string,
    unvalid?: string
}): string => {
  const classNames = [baseClassName];
  
  if (options.condition && options.valid) {
    classNames.push(options.valid);
  } else if (!options.condition && options.unvalid) {
    classNames.push(options.unvalid);
  }
  
    return classNames.join(' ');
};