import { format } from 'date-fns/format'
import { ru } from 'date-fns/locale/ru'
import { parseISO } from 'date-fns/parseISO'

/**
 * Компонент для отображения даты в формате "чч:мм, дд МММ гггг" на русском языке.
 *
 * @param dateString - Строка, содержащая дату в формате ISO 8601.
 *
 * @returns Компонент React, отображающий дату в указанном формате.
 */
interface DateComponentProps {
    dateString: string;
}

const DateComponent = ({ dateString }: DateComponentProps) => {
    const date = parseISO(dateString)
    
    return (
            <time
                dateTime={dateString}
            >
                {format(
                    date,
                    'hh:mm, dd LLL yyyy ',
                    { locale: ru })
                }
            </time>
    )
}

export default DateComponent