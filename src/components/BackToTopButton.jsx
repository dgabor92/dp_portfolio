import { ChevronUpIcon } from "./Icons";

export function BackToTopButton({ visible, onClick }) {
  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      onClick={onClick}
      aria-label="Back to top"
    >
      <ChevronUpIcon className="back-to-top__icon" />
    </button>
  );
}
