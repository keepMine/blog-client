export const capitalizeFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * @param key
 * @param value
 * 向storage存数据
 */
export const setIntoLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * @param key
 * 向storage取数据
 */
export const getIntoLocal = key => {
  return JSON.parse(localStorage.getItem(key));
};

/**
 * @param key
 * @param value
 * 向storage存数据
 */
export const setIntoSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

/**
 * @param key
 * 向storage取数据
 */
export const getIntoSession = key => {
  return JSON.parse(sessionStorage.getItem(key));
};
