import { StyledButton } from "./Button.styled";

const Button = ({ children, primary, className, ...props }) => {
  return (
    <StyledButton primary={primary} className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
