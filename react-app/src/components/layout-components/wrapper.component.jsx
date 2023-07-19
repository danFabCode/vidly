import { WrapperStyled } from "./wrapper.styles";
import { Outlet } from "react-router";

export const Wrapper = () => {
  return (
    <WrapperStyled>
      <Outlet />
    </WrapperStyled>
  );
};
