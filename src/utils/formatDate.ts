import { formatDistance } from 'date-fns'
import BR from 'date-fns/locale/pt-BR'

export function formatDate(date) {
  const stringToDate = Date.parse(date)

  const result = formatDistance(stringToDate, new Date(), {
    locale: BR,
    addSuffix: true,
  })
  return result
}
