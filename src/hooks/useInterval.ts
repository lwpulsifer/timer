import { useRef, useEffect } from 'react';

/**
 * Declarative version of setInterval. Updates to reflect changing callback and delay parameters
 * for easy use within react components.
 * @param callback — callback function to be called every `delay` milliseconds
 * @param delay
 * @param executeImmediately - callback to a function returning a boolean value for whether the
 * callback for the interval should be executed immediately
 *
 * @author lpulsifer 1 April 2021
 * @author ayates 21 June 2021
 * Modified from Dan Abramov's at {@link https://overreacted.io/making-setinterval-declarative-with-react-hooks/}
 */
export function useInterval(
	callback: Function, 
	delay: number | null, 
	executeImmediately: () => boolean = () => false
) {
  const savedCallback = useRef<Function>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback?.current?.();
    }
    if (delay !== null) {
      executeImmediately && executeImmediately() && tick();
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, executeImmediately]);
}