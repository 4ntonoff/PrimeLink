interface Props {
  placeholder: string;
  type: string;
}

function PrimaryButton({ placeholder, type }: Props): JSX.Element {
  return (
    <input
      className="text pt-1 outline-none focus:ring focus:ring-gray-300 transition-all text-gray-200 duration-300 text-2xl h-14 border-2 border-zinc-800 rounded-2xl mt-4 px-4 bg-transparent"
      type={type}
      placeholder={placeholder}
    />
  );
}

export default PrimaryButton;
