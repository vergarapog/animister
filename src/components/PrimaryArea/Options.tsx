import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  setObjectType,
  setDuration,
  setTimingFunction,
  setDelay,
  setIterationCount,
  setDirection,
  setFillMode,
} from "../../reducers/optionsReducer";

const Options = () => {
  const {
    duration,
    objectType,
    timingFunction,
    delay,
    iterationCount,
    direction,
    fillMode,
  } = useAppSelector((state) => state.optionsReducer);

  const [isInfinite, setIsInfinite] = useState<boolean>(false);

  useEffect(() => {
    if (isInfinite) {
      dispatch(setIterationCount("infinite"));
    } else {
      dispatch(setIterationCount("1"));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInfinite]);

  const dispatch = useAppDispatch();

  const handleObjectTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newObjectType = event.target.value;
    dispatch(setObjectType(newObjectType));
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = event.target.value;
    dispatch(setDuration(newDuration));
  };

  const handleTimingFunctionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newTimingFunction = event.target.value;
    dispatch(setTimingFunction(newTimingFunction));
  };

  const handleDelayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDelay = event.target.value;
    dispatch(setDelay(newDelay));
  };

  const handleIterationCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newIterationCount = event.target.value;
    dispatch(setIterationCount(newIterationCount));
  };

  const handleIterationInfinite = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsInfinite((prev) => !prev);
  };

  const handleDirectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newDirection = event.target.value;
    dispatch(setDirection(newDirection));
  };

  const handleFillModeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFillMode = event.target.value;
    dispatch(setFillMode(newFillMode));
  };

  return (
    <div className="absolute left-6 top-6 h-[500px] w-56 bg-white text-primarydark">
      <section className="p-3">
        <div className={`py-2 text-lg uppercase`}>Options</div>
        <div>
          <div>
            <label htmlFor="objectType">select object</label>

            <select
              name="objectType"
              id="objectType"
              className="w-full px-1 outline outline-1"
              value={objectType}
              onChange={handleObjectTypeChange}
            >
              <optgroup label="2D objects">
                <option>box</option>
                <option>circle</option>
              </optgroup>
              <optgroup label="3D objects">
                <option>card</option>
                <option>diamond</option>
                <option>spade</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label htmlFor="duration">duration</label>
            <input
              type="string"
              className="w-full px-2 outline outline-1"
              placeholder="duration in seconds"
              value={duration}
              onChange={handleDurationChange}
            />
          </div>

          <div>
            <label htmlFor="timingFunction">timing-function</label>
            <select
              name="timingFunction"
              id="timingFunction"
              className="w-full px-1 outline outline-1"
              value={timingFunction}
              onChange={handleTimingFunctionChange}
            >
              <optgroup label="Native">
                <option>linear</option>
                <option>ease</option>
                <option value={"ease-in"}>easeIn</option>
                <option value={"ease-out"}>easeOut</option>
                <option value={"ease-in-out"}>easeInOut</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label htmlFor="delay">delay</label>
            <input
              type="text"
              className="w-full px-2 outline outline-1"
              value={delay}
              onChange={handleDelayChange}
            />
          </div>

          <div className="grid grid-cols-2">
            <div className="">
              <label htmlFor="iterationCount">iteration count</label>
              <input
                type="text"
                className="w-full px-2 outline outline-1"
                value={iterationCount}
                onChange={handleIterationCountChange}
              />
            </div>
            <div className="">
              <label htmlFor="iterationCount">infinite</label>
              <input
                type="checkbox"
                checked={isInfinite}
                onChange={handleIterationInfinite}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="direction">direction</label>
          <select
            name="direction"
            id="direction"
            className="w-full px-1 outline outline-1"
            value={direction}
            onChange={handleDirectionChange}
          >
            <option>normal</option>
            <option>reverse</option>
            <option>alternate</option>
            <option>alternate-reverse</option>
          </select>
        </div>

        <div>
          <label htmlFor="fillMode">fill-mode</label>
          <select
            name="fillMode"
            id="fillMode"
            className="w-full px-1 outline outline-1"
            value={fillMode}
            onChange={handleFillModeChange}
          >
            <option>none</option>
            <option>forwards</option>
            <option>backwards</option>
            <option>both</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Options;
