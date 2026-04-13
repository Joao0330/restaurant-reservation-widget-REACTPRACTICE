import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateDropdownProps {
	date: Date;
	setDate: (date: Date) => void;
}

export const DateDropdown = ({ date, setDate }: DateDropdownProps) => {
	return (
		<div className='flex cursor-pointer text-sm/6 text-start font-semibold text-white/50 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white'>
			<span className='mr-7'>Date</span>
			<DatePicker dateFormat='dd/MM/yyyy' selected={date} onChange={(date: Date | null) => date && setDate(date)} className='w-full' />
		</div>
	);
};
