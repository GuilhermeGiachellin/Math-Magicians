export default function CalcButtons(props) {
  const { number, clickHandler } = props;
  return (
            <button
                className={`btn-${number}`}
                type="button"
                onClick={clickHandler}
                value={number}>
            {number}
            </button>
  );
}