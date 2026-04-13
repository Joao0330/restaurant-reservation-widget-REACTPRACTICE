import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { PersonsDropdown } from './components/PersonsDropdown';
import { DateDropdown } from './components/DateDropdown';
import { TimeDropdown } from './components/TimeDropdown';

function App() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [personCount, setPersonCount] = useState(1);
	const [startDate, setStartDate] = useState(new Date());
	const [time, setTime] = useState(new Date());

	return (
		<div className='min-h-dvh p-10 bg-gray-900 text-white'>
			<h1 className='text-3xl mb-15'>Restaurant reservation</h1>

			<Button className='rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 cursor-pointer' onClick={() => setIsDialogOpen(true)}>
				Book a table
			</Button>

			<Dialog open={isDialogOpen} as='div' className='relative  focus:outline-none' onClose={close}>
				<div className='fixed inset-0 w-screen overflow-y-auto bg-black/50'>
					<div className='flex min-h-full items-center justify-center p-4'>
						<DialogPanel
							transition
							className='flex flex-col gap-6 w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0'
						>
							<DialogTitle as='h3' className='text-base/7 font-medium text-white'>
								Book a table
							</DialogTitle>

							<PersonsDropdown count={personCount} setCount={setPersonCount} />
							<DateDropdown date={startDate} setDate={setStartDate} />
							<TimeDropdown time={time} setTime={setTime} />

							<div className='mt-4'>
								<Button
									className='cursor-pointer inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700'
									onClick={() => setIsDialogOpen(false)}
								>
									Book now
								</Button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</div>
	);
}

export default App;
