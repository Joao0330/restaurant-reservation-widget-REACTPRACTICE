import { Button, Field, Fieldset, Input, Label, Legend } from '@headlessui/react';
import { format } from 'date-fns';

interface ReservationFieldsetProps {
	personCount: number;
	startDate: Date;
	time: string;
	name: string;
	setName: (name: string) => void;
	phone: string;
	setPhone: (phone: string) => void;
	setStep: (step: string) => void;
	setIsDialogOpen: (isOpen: boolean) => void;
}

export const ReservationFieldset = ({ personCount, startDate, time, name, setName, phone, setPhone, setStep, setIsDialogOpen }: ReservationFieldsetProps) => {
	const logReservationDetails = () => {
		console.log('Reservation successful!', {
			personCount,
			time,
			startDate,
			name,
			phone,
		});
	};

	return (
		<Fieldset className='space-y-3 w-full max-w-md rounded-xl p-6  duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0'>
			<Legend className='text-white'>Contact details</Legend>
			<div className='text-white/50 p-3 my-5'>
				You are making a reservation for <span className='font-bold'>{personCount} persons</span>, on <span className='font-bold text-white'>{format(startDate, 'dd/MM/yyyy')}</span> at{' '}
				<span className='font-bold text-white'>{time}</span>
			</div>
			<Field>
				<Label className='block mb-3 text-white'>Name</Label>
				<Input
					className='mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</Field>
			<Field>
				<Label className='block mb-3 text-white'>Phone number</Label>
				<Input
					className='mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
					name='phone'
					value={phone}
					onChange={e => setPhone(e.target.value)}
				/>
			</Field>
			<Button
				onClick={() => {
					setStep('reservation-details');
					logReservationDetails();
					setIsDialogOpen(false);
				}}
				className='cursor-pointer mt-5 inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700'
			>
				Confirm reservation
			</Button>
		</Fieldset>
	);
};
