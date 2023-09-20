// Description: Formatter functions for numbers and dates

/**
 * Format a number to a currency string
 *
 * @param {number} amount
 * @param {number} maximumFractionDigits
 */
export const currency = (amount, maximumFractionDigits = 2) => {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits
  }).format(amount);
};

/**
 * Format a date to a kebab string (2001-01-01)
 *
 * @param {Date|string} date}
 */
export const kebapDate = (date) => new Date(date).toISOString().split('T')[0];

/**
 * Format a date to a local string (01/01/2001)
 *
 * @param {Date|string} date}
 */
export const localDate = (date) => new Intl.DateTimeFormat(undefined).format(new Date(date));

/**
 * Format a date to a local month string (January)
 *
 * @param {Date|string} date}
 */
export const localMonth = (date) => new Date(date).toLocaleString(undefined, { month: 'long' });

/**
 * Format a date to a local year string (2001)
 *
 * @param {Date|string} date}
 */
export const localYear = (date) => new Date(date).toLocaleString(undefined, { year: 'numeric' });

/**
 * Format a date to a local month and year string (January 2001)
 *
 * @param {Date|string} date}
 */
export const localMonthYear = (date) => `${localMonth(date)} ${localYear(date)}`;

/**
 * Format a date to a local month and year string (01/2001)
 *
 * @param {Date} date}
 */
export const monthSlashYear = (date) =>
  new Date(date).toLocaleString(undefined, { month: '2-digit', year: '2-digit' });

/**
 * Format a date to a dash seperated string (01/01/2001)
 *
 * @param {Date|string} date}
 */
export const daySlashMonthSlashYear = (date) =>
  new Date(date).toLocaleString(undefined, { day: '2-digit', month: '2-digit', year: '2-digit' });

/**
 * Format a date to a year and month dash string (2001-01)
 *
 * @param {Date} date}
 */
export const getYearMonth = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const monthString = String(dateObj.getMonth() + 1);
  const month = monthString.length === 1 ? `0${monthString}` : monthString;
  return `${year}-${month}`;
};