
export const MS_IN_SECOND = 1000;
export const SECONDS_IN_MINUTE = 60;
export const MINUTES_IN_HOUR = 60;

export type TimeBucket = {
	seconds: number,
	minutes: number,
	hours: number,
}

export function secondsToTimeBucket(seconds: number): TimeBucket {
	const leftoverSeconds = seconds % SECONDS_IN_MINUTE;
	const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
	const leftoverMinutes = minutes % MINUTES_IN_HOUR;
	const hours = Math.floor(minutes / MINUTES_IN_HOUR);
	return {
		hours,
		minutes: leftoverMinutes,
		seconds: leftoverSeconds,
	};
}