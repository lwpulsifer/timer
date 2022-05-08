import * as React from 'react';
import { useInterval } from '../hooks/useInterval';
import TimerButton from './TimerButton';
import { MS_IN_SECOND, secondsToTimeBucket } from '../util/TimeUtil';
import TimerDisplay from './TimerDisplay';

type TimerState = {
	timeSeconds: number,
	timerOn: boolean,
}

type TimerAction = {
	type: 'MODIFY_TIME' | 'TOGGLE_ON',
	payload?: any,
}

function timerReducer(state: TimerState, action: TimerAction): TimerState {
	switch (action.type) {
		case 'MODIFY_TIME':
			return {
				...state,
				timerOn: action.payload.timeSeconds === 0 ? false : state.timerOn,
				timeSeconds: state.timeSeconds === 0 ? 0 : action.payload.timeSeconds,
			}
		case 'TOGGLE_ON':
			return {
				...state,
				timerOn: !state.timerOn,
			}
		default:
			return state;
	}
}

type TimerProps = {
	initialTimeSeconds: number,
}

const TimerContext = React.createContext<{ state: TimerState, dispatch: React.Dispatch<TimerAction>}>(
	{
		state: { timeSeconds: 0, timerOn: false }, 
		dispatch: () => {}
	});

export const useTimerContext = () => React.useContext(TimerContext);

/**
 * Basic timer component.
 * 
 * @author lwpulsifer
 */
export default function Timer({ initialTimeSeconds }: TimerProps) {
	const [state, dispatch] = React.useReducer(
		timerReducer, 
		{ 
			timeSeconds: initialTimeSeconds,
			timerOn: false,
		}
	);

	const { timerOn, timeSeconds } = state;

	useInterval(
		() => dispatch({ type: 'MODIFY_TIME', payload: { timeSeconds: state.timeSeconds - 1}}),
	  timerOn ?	MS_IN_SECOND : null,
	);

	return (
		<TimerContext.Provider value={{ state, dispatch }}>
			<section className='bg-blue-200 flex justify-center items-center w-1/2 p-3 rounded-md flex-col gap-3'>
				<TimerDisplay times={secondsToTimeBucket(timeSeconds)} />
				<TimerButton />
			</section>
		</TimerContext.Provider>
	)
}