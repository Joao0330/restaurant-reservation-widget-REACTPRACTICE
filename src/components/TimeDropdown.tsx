import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { format } from 'date-fns';

interface TimeDropdownProps {
	time: string;
	setTime: (time: string) => void;
}

const getTimeSlots = () => {
	const timeSlotStart = format(new Date().setHours(12, 0, 0, 0), 'HH:mm');
	const timeSlotEnd = format(new Date().setHours(22, 0, 0, 0), 'HH:mm');
	const timeSlots = [];
	let currentTime = timeSlotStart;

	while (currentTime <= timeSlotEnd) {
		timeSlots.push(currentTime);
		const [hours, minutes] = currentTime.split(':').map(Number);
		const nextTime = new Date();
		nextTime.setHours(hours, minutes + 30, 0, 0);
		currentTime = format(nextTime, 'HH:mm');
	}

	return timeSlots;
};

export const TimeDropdown = ({ time, setTime }: TimeDropdownProps) => {
	const timeSlots = getTimeSlots();

	return (
		<Listbox value={time} onChange={(time: string | null) => time && setTime(time)}>
			<ListboxButton className='flex cursor-pointer text-sm/6 text-start font-semibold text-white/50 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white'>
				<span className='mr-7'>Time</span>
				<span>{time}</span>
			</ListboxButton>
			<ListboxOptions
				anchor='bottom'
				className='flex flex-col gap-3 rounded-xl bg-black/80 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 w-80 h-60 p-4'
			>
				{timeSlots.map((time, index) => (
					<ListboxOption
						key={index}
						value={time}
						className='w-full rounded-md bg-white/10 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/20 cursor-pointer'
					>
						{time}
					</ListboxOption>
				))}
			</ListboxOptions>
		</Listbox>
	);
};
