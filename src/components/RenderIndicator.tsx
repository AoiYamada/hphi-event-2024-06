import { CarouselProps } from "react-responsive-carousel";

const RenderIndicator: CarouselProps["renderIndicator"] = (
  onClickHandler,
  isSelected,
  index,
  label,
) => {
  if (isSelected) {
    return (
      <li
        className="mx-1 inline-block h-2 w-2 cursor-pointer rounded-full bg-primary"
        role="active indicator"
        title={`Selected: ${label} ${index + 1}`}
        aria-label={`Selected: ${label} ${index + 1}`}
      />
    );
  }

  return (
    <li
      className="mx-1 inline-block h-2 w-2 cursor-pointer rounded-full bg-primary/30"
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="indicator"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

export default RenderIndicator;
