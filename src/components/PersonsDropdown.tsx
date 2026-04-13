import { Button, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

interface PersonsDropdownProps {
	count: number;
	setCount: (count: number) => void;
}

export const PersonsDropdown = ({ count, setCount }: PersonsDropdownProps) => {
	return (
		<Popover className='relative'>
			<PopoverButton className='block cursor-pointer text-sm/6 w-full text-start font-semibold text-white/50 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white'>
				<span className='mr-7'>People</span>
				<span>{count} persons</span>
			</PopoverButton>
			<PopoverPanel
				transition
				anchor='bottom'
				className='rounded-xl bg-black/80 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 w-80'
			>
				{({ close }) => (
					<div className='p-3 grid grid-cols-5 gap-4'>
						{[...Array(10).keys()].map(countOption => (
							<Button
								key={countOption}
								className='w-full rounded-md bg-white/10 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/20 cursor-pointer'
								onClick={() => {
									setCount(countOption + 1);
									close();
								}}
							>
								{countOption + 1}
							</Button>
						))}
					</div>
				)}
			</PopoverPanel>
		</Popover>
	);
};
