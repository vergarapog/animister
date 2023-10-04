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
    const sanitizedValue = newDuration.replace(/[^0-9.]/g, "");
    dispatch(setDuration(sanitizedValue));
  };

  const handleTimingFunctionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newTimingFunction = event.target.value;
    dispatch(setTimingFunction(newTimingFunction));
  };

  const handleDelayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDelay = event.target.value;
    const sanitizedValue = newDelay.replace(/[^0-9.]/g, "");
    dispatch(setDelay(sanitizedValue));
  };

  const handleIterationCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newIterationCount = event.target.value;
    dispatch(setIterationCount(newIterationCount));
  };

  const handleIterationInfinite = () => {
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
    <div className="absolute left-4 top-4 z-10 h-[450px] w-56 select-none bg-white text-primarydark shadow-xl">
      <section className="p-3">
        <div className={`py-1 text-lg uppercase`}>Options</div>
        <div className="space-y-1">
          <div>
            <label htmlFor="objectType" className="text-sm">
              select object
            </label>
            <select
              name="objectType"
              id="objectType"
              className="w-full bg-gray-200  px-1"
              value={objectType}
              onChange={handleObjectTypeChange}
            >
              <optgroup label="2D objects">
                <option>box</option>
                <option>box light</option>
                <option>circle</option>
                <option>image</option>
                <option>button</option>
                <option>text</option>
                <option>letter</option>
                <option>bg gradient horizontal</option>
                <option>bg gradient vertical</option>
                <option>bg gradient diagonal</option>
                <option>bg flat color</option>
                <option>bg image</option>
                <option>cover image</option>
              </optgroup>
              <optgroup label="3D objects">
                <option>3D Card</option>
                <option>3D Cube</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label className="text-sm" htmlFor="duration">
              duration
            </label>
            <div className="flex">
              <input
                type="string"
                className="w-full bg-gray-200 px-2"
                placeholder="duration in seconds"
                value={duration}
                onChange={handleDurationChange}
              />
              <span className="ml-3 text-primarydark">seconds</span>
            </div>
          </div>

          <div>
            <label className="text-sm" htmlFor="timingFunction">
              timing-function
            </label>
            <select
              name="timingFunction"
              id="timingFunction"
              className="w-full bg-gray-200 px-1"
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
            <label className="text-sm" htmlFor="delay">
              delay
            </label>
            <div className="flex">
              <input
                type="text"
                className="w-full bg-gray-200 px-2"
                value={delay}
                onChange={handleDelayChange}
              />
              <span className="ml-3 text-primarydark">seconds</span>
            </div>
          </div>

          <div className="flex items-end">
            <div className="mr-3">
              <label className="text-sm" htmlFor="iterationCount">
                iteration count
              </label>
              <input
                type="text"
                className="w-full bg-gray-200 px-2"
                value={iterationCount}
                onChange={handleIterationCountChange}
              />
            </div>
            <div
              className="flex items-center justify-center"
              onClick={handleIterationInfinite}
            >
              <input type="checkbox" checked={isInfinite} readOnly={true} />
              <label className="ml-1 text-sm" htmlFor="iterationCount">
                infinite
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm" htmlFor="direction">
            direction
          </label>
          <select
            name="direction"
            id="direction"
            className="w-full bg-gray-200 px-1"
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
          <label className="text-sm" htmlFor="fillMode">
            fill-mode
          </label>
          <select
            name="fillMode"
            id="fillMode"
            className="w-full bg-gray-200 px-1"
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
