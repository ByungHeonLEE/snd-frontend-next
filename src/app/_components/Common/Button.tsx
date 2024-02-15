interface LendingButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const LendingButton = ({
  onClick = () => {},
  children,
}: LendingButtonProps) => {
  return (
    <div
      className="h-12 p-3 text-white bg-blue-500 hover:scale-110 hover:bg-blue-700 duration-200 rounded-md cursor-pointer"
      onClick={onClick}
    >
      <div className="text-2024">{children}</div>
    </div>
  );
};
