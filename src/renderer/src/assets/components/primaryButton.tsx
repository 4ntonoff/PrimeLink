interface Props {
  text?: string;
  onClick?: any;
  // TODO: Any type fix
}

function PrimaryButton({ text, onClick }: Props): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="button text-lg hover:bg-gray-300 text-gray-800 bg-gray-200 transition-all duration-300 mt-8 rounded-2xl h-14"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
