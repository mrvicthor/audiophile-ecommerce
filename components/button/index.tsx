type ButtonProps = {
  handleClick: () => void;
  style: string;
  title: string;
};
const Button = ({ handleClick, style, title }: ButtonProps) => {
  return (
    <button onClick={() => handleClick()} className={style}>
      {title}
    </button>
  );
};

export default Button;
