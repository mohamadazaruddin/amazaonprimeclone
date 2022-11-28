import moment from "moment"

export const getMaxDate = (data, key) => {
  let dateArry = data.map((d) => {
    return moment(d[key])
  })
  let maxDate = moment.max(dateArry)
  return dateArry.findIndex((x) => x == maxDate)
}
