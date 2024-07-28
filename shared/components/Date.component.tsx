import { format } from 'date-fns/format'
import { ru } from 'date-fns/locale/ru'
import { parseISO } from 'date-fns/parseISO'

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