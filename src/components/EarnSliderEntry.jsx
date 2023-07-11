import { Fragment } from "react";
import { Range } from "react-range";

export default function EarnSliderEntry({
  label,
  max,
  options,
  value,
  onChange,
}) {
  return (
    <div className="earn__section__sliders__entry">
      <Range
        values={value}
        step={1}
        min={0}
        max={max}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={props.style}
            className="earn__section__sliders__entry__track"
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={props.style}
            className="earn__section__sliders__entry__thumb"
          />
        )}
      />
      <div className="earn__section__sliders__entry__label">{label}</div>
      {options ? (
        <div className="earn__section__sliders__entry__value">
          {options
            .filter((_, index) => value[0] === index)
            .map((option, index) => (
              <Fragment key={index}>{option}</Fragment>
            ))}
        </div>
      ) : (
        <div className="earn__section__sliders__entry__value">
          $ {value[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      )}
    </div>
  );
}
