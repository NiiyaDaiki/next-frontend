import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variety?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variety = "primary",
  className,
  children,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-2xl shadow transition-colors";
  const primaryStyles = "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryStyles =
    "border border-blue-600 text-blue-600 hover:bg-blue-50";

  const derivedStyles = variety === "primary" ? primaryStyles : secondaryStyles;

  return (
    <button {...props} className={clsx(baseStyles, derivedStyles, className)}>
      {children}
    </button>
  );
};
