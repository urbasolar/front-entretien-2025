import { parseISO } from 'date-fns';

const isRange0To9 = new RegExp(/^[0-9]$/)
/**
 * Format date or string or timestamp to date
 * @param dateOrTimestamp string or number to format as a date
 * @param hour boolean to display hour or not
 * @returns formatted date string
 * @example
 * formatDate('2021-07-01T00:00:00.000Z', true) // 1/7/2021 00:00
 * formatDate(1625097600000, true) // 1/7/2021 00:00
 * formatDate(new Date('Fri Apr 16 2021 13:50:00 GMT+0200 (heure d’été d’Europe centrale)')) // 16/04/2021
 */
export const formatDate = (dateOrTimestamp: string | number | Date, hour?: boolean): string | undefined => {
  if (dateOrTimestamp === '') {
    return undefined
  }
  const dateObj = new Date(dateOrTimestamp)
  if (dateObj.toString() === 'Invalid Date') {
    return 'Invalid Date'
  }

  let day: string | number = dateObj.getUTCDate()
  let month: string | number = dateObj.getUTCMonth() + 1
  const year = dateObj.getUTCFullYear()
  const regex = /^[A-Z][a-z]{2}\s[A-Z][a-z]{2}\s\d{1,2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT[+-]\d{4}\s\(.+\)$/
  let hours: string | number = regex.test(dateObj.toString()) ? dateObj.getHours() : dateObj.getUTCHours()
  let minutes: string | number = dateObj.getUTCMinutes()

  if (isRange0To9.test(day.toString())) {
    day = `0${day}`
  }
  if (isRange0To9.test(month.toString())) {
    month = `0${month}`
  }
  if (hour) {
    // Add 0 before hour if hour is between 0 and 9
    if (isRange0To9.test(hours.toString())) {
      hours = `0${hours}`
    }
    // Add 0 before minutes if minutes is between 0 and 9
    if (isRange0To9.test(minutes.toString())) {
      minutes = `0${minutes}`
    }
    return `${day}/${month}/${year} ${hours}:${minutes}`
  }

  return `${day}/${month}/${year}`
}

export const convertDateToString = (date: Date | string): string => {
  return date instanceof Date ? parseISO(date.toISOString()).toString() : parseISO(date).toString()
}
