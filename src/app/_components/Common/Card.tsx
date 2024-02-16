import classNames from "classnames";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className = "w-full", children }: Props) => {
  return (
    <div className="w-full shadow-xl bg-white">
      <div className={className}>{children}</div>
    </div>
  );
};
