import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';

function TextInput({
  placeholder,
  icon,
  rightIcon,
  type,
  name,
  ...rest
}) {
  const [focus, setFocus] = useState(false);

  return (
    <InputGroup
      borderRadius="12px"
      border={focus ? '1px solid #55b1d8' : '1px solid #B5B5B5'}
      alignItems="center"
      {...rest}
    >
      <InputLeftAddon
        bg="transparent"
        border="none"
        pointerEvents="none"
      >
        {icon}
      </InputLeftAddon>
      <Input
        border="none"
        w="100%"
        py="1.5rem"
        px=".5rem"
        fontSize="1.4rem"
        focusBorderColor="transparent"
        placeholder={placeholder}
        type={type}
        d="block"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        name={name}
      />
      <InputRightAddon
        cursor="pointer"
        bg="transparent"
        border="none"
      >
        {rightIcon}
      </InputRightAddon>
    </InputGroup>
  );
}

export default TextInput;
