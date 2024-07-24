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
				style={{
					fontWeight: "600"
				}}
			>
				{format(
					date,
					'h:m, d LLLL yyyy ',
					{ locale: ru })
				}
			</time>
	)
}

export default DateComponent