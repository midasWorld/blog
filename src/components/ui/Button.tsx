type Props = {
  icon?: React.ReactNode;
  text: string;
  onClick: () => void;
};

export default function Button({ icon, text, onClick }: Props) {
  return (
    <button
      className="inline-flex items-center justify-center py-3 px-6 rounded-md text-white text-lg font-medium bg-slate-900 hover:bg-slate-800 active:scale-95"
      onClick={() => onClick()}
    >
      {icon && icon}
      {text}
    </button>
  );
}
