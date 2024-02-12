interface Props {
  text?: string;
  onClick?: any;
  // TODO: Any type fix
}

function SecondaryButton({ text, onClick }: Props): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="button text-lg border-2 border-zinc-800 hover:bg-zinc-800 text-gray-200 bg-transparent transition-all duration-300 mt-2 rounded-2xl h-14"
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
