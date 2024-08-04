import s from "./style.module.css";

export function PrimaryButton({ srcButton, className }) {
  return (
    <button>
      <img src={srcButton} alt="" className={className} />{" "}
    </button>
  );
}
