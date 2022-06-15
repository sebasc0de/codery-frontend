import { Box, Button, Input, Title, Wrapper } from "../components";
import { startSession } from "../helpers/startSession";
import { useState } from "react";
import userStore from "../store/user";

export const Start = () => {
  const { setUser } = userStore();

  const [onChange, setOnChange] = useState("");

  const loginHandler = () => {
    startSession(onChange).then(setUser);
  };

  return (
    <Wrapper background="#FFFCF2" display="flex">
      <Box height="20vh" padding="2rem">
        <Title color="#403D39" marginBottom="10px" fontWeight="bold">
          Comienza con tu correo
        </Title>
        <Input
          height="2.5rem"
          width="100%"
          value={onChange}
          color="0,0,0"
          placeholder="Correo electronico..."
          onChange={(e) => setOnChange(e.target.value)}
        />
        <Button onClick={loginHandler} width="100%" margin={0} marginTop="5px">
          Iniciar sesion
        </Button>
      </Box>
    </Wrapper>
  );
};
