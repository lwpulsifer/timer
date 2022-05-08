import { TimeBucket } from "../util/TimeUtil";
import TimerSection from "./TimerSection";

const TIMES_TO_INFO = {
	'hours': {
		timeLabel: 'H',
		minNumDigits: 1,
	},
	'minutes': {
		timeLabel: 'M',
		minNumDigits: 2,
	},
	'seconds': {
		timeLabel: 'S',
		minNumDigits: 2,
	},
}

export default function TimerDisplay({ times }: { times: TimeBucket }) {
	const { seconds, minutes, hours } = times;
	return (
		<div className="flex text-4xl font-bold w-full justify-center gap-2">
			<TimerSection timeValue={hours} {...TIMES_TO_INFO['hours']} />
			<TimerSection timeValue={minutes} {...TIMES_TO_INFO['minutes']} />
			<TimerSection timeValue={seconds} {...TIMES_TO_INFO['seconds']} />
		</div>
	)
}