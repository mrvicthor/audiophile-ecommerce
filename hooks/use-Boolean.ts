import { useToggle } from "usehooks-ts";

export const useShowCart = () => {
  const [value, toggle] = useToggle();

  return {
    value,
    toggle,
  };
};
