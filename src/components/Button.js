export default function CalcButtons(props) {
  const { number, clickHandler } = props;
  return (
            <button
                id={`btn-${number}`}
                type="button"
                onClick={clickHandler}
                value={number}
                name={number}>
            {number}
            </button>
  );
}