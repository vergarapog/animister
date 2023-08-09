import { useAppSelector, useAppDispatch } from "../../hooks";
import { setObjectType, setDuration } from "../../reducers/optionsReducer";

const Options = () => {
  const { duration, objectType } = useAppSelector(
    (state) => state.optionsReducer
  );

  const dispatch = useAppDispatch();

  // const handleObjectTypeChange = (
  //   e: React.ChangeEventHandler<HTMLSelectElement>
  // ) => {
  //   const newObjectType = e.target.value;
  //   dispatch(setObjectType(newObjectType));
  // };

  const handleObjectTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const newObjectType = e.target.value;
    dispatch(setObjectType(newObjectType));
  };

  return (
    <div className="absolute left-6 top-6 h-64 w-48 bg-white text-primarydark">
      <section className="p-3">
        <div className={`py-2 text-lg uppercase`}>Options</div>
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
              <option>zhask</option>
              <option>yve</option>
            </optgroup>
          </select>

          <label htmlFor="duration">duration</label>
          <input
            type="string"
            className="w-full px-2 outline outline-1"
            placeholder="duration in seconds"
            value={duration}
          />
        </div>
      </section>
    </div>
  );
};

export default Options;
