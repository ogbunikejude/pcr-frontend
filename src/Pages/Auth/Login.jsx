import React, { useContext, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import { login } from '../../Queries/auth';
import LogoImage from '../../Assets/images/hospitalImage.jpg';
import { ReactComponent as EmailIcon } from '../../Assets/icons/email icon.svg';
import { ReactComponent as PwdIcon } from '../../Assets/icons/password icon.svg';
import { ReactComponent as EyeIcon } from '../../Assets/icons/see password icon.svg';
import TextInput from '../../Components/common/Inputs';
import BlueBtn from '../../Components/common/Buttons';
import { AuthContext } from '../../Context/auth/provider';
import { LOGIN } from '../../Context/auth/types';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [passwordType, setPasswordType] = useState(true);
  const [loading, setLoading] = useState(false);
  const { authState, dispatch } = useContext(AuthContext);

  if (authState) {
    return <Redirect to="/" />;
  }

  const history = useHistory();

  const changeUrl = () => {
    history.push('/user/register');
  };

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const res = await login(data);
      dispatch({ type: LOGIN, payload: res.data });
      setLoading(false);
      toast.success(res.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };
  return (
    <Flex
      w="100%"
      h="100%"
      overflow="hidden"
      bg="#fff"
      p="1rem 2rem"
      pos="fixed"
    >
      <Box m="0 auto" minH="100vh">
        <Image
          src={LogoImage}
          alt="Logo Image"
          height="22rem"
          display="block"
          mt="2rem"
        />
      </Box>
      <Box
        margin="0 auto"
        maxW="50rem"
        as="form"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Text align="center" color="#888" fontSize="2.5rem">
          Welcome To Doctor Portal
        </Text>
        <Box mt="4rem" px="2rem">
          <Box>
            <TextInput
              icon={<EmailIcon style={{ width: '1rem' }} />}
              placeholder="Email"
              px="2rem"
              name="email"
              {...register('email', { required: true })}
              // w="80%"
            />
            <TextInput
              icon={<PwdIcon style={{ width: '1rem' }} />}
              rightIcon={<EyeIcon style={{ width: '1rem' }} />}
              mt="1.3rem"
              placeholder="Password"
              type={passwordType ? 'password' : 'text'}
              onClick={() => setPasswordType(!passwordType)}
              px="2rem"
              name="password"
              {...register('password', { required: true })}
              // w="80%"
            />
          </Box>
          <Flex justifyContent="space-between">
            <Text my="2rem" color="#55b1d8">
              Forgot password?
            </Text>
            <Box>
              <Text my="2rem" color="#55b1d8" onClick={changeUrl}>
                Signup
              </Text>
            </Box>
          </Flex>
          <BlueBtn
            type="submit"
            borderRadius="10px"
            py="1.2rem"
            fontSize="1.7rem"
            w="100%"
            isLoading={loading}
          >
            Login
          </BlueBtn>
        </Box>
      </Box>
    </Flex>
  );
}
