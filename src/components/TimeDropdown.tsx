interface TimeDropdownProps {
	time: Date;
	setTime: (time: Date) => void;
}

export const TimeDropdown = ({ time, setTime }: TimeDropdownProps) => {
	return <div>TimeDropdown</div>;
};
