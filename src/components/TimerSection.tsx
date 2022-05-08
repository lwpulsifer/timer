type TimerSectionProps = {
	timeValue: number,
	minNumDigits: number,
	timeLabel: string,
}

export default function TimerSection({ timeValue, minNumDigits, timeLabel }: TimerSectionProps) {
	return (
		<div className="flex justify-center items-center border-2 border-gray-50 p-2 w-32">
			<span className="">
				{timeLabel}
			</span>
			<span className="">:</span>
			<span className="w-1/2">
				{String(timeValue).padStart(minNumDigits, '0')}
			</span>
		</div>
	);
}

TimerSection.displayName = "TimerSection";