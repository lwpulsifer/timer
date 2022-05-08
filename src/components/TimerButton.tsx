import { useTimerContext } from "./Timer";

export default function TimerButton() {
	const { state, dispatch } = useTimerContext();
	const { timerOn } = state;
	const toggleTimer = () => dispatch({ type: 'TOGGLE_ON', });

	return (
		<button className="p-2 rounded-full border-2 border-gray-200 text-sm" onClick={toggleTimer}>
			{ timerOn ? "Stop timer" : "Start timer"}
		</button>
	);
}