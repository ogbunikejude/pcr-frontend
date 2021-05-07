import {
  Box,
  chakra,
  IconButton,
  VStack,
  Flex,
  Image,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import { ReactComponent as DashboardIcon } from '../../Assets/icons/dashboardIcon.svg';
import { ReactComponent as AppointmentIcon } from '../../Assets/icons/bell.svg';
import { ReactComponent as ConsultingIcon } from '../../Assets/icons/consultingIcon.svg';
import { ReactComponent as UsersIcon } from '../../Assets/icons/usersIcon.svg';
import Logo from '../../Assets/images/hospitalLogo.jpg';
import { ReactComponent as Logout } from '../../Assets/icons/logout.svg';
import { AuthContext } from '../../Context/auth/provider';
import { LOGOUT } from '../../Context/auth/types';
//   import { AuthContext, LOGOUT } from '../../context/auth';

const SidebarLink = chakra(NavLink, {
  baseStyle: {
    w: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'black',
  },
});

const MenuLink = styled(SidebarLink)`
  svg {
    fill: #707070;
  }

  &:hover,
  &.active {
    color: #0609d4;

    svg {
      fill: #0609d4;
    }
  }
`;

function MenuIcon({ icon }) {
  return (
    <Box w="1.5rem" mr="1rem">
      {icon}
    </Box>
  );
}

function Sidebar() {
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: LOGOUT, payload: null });
    window.location.replace('/user/login');
  };

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      w="20%"
      minh="100vh"
      bg="#51acd3"
      px="3rem"
      py="3rem"
      // pos="fixed"
    >
      <Box>
        <Box w="3rem">
          <Image
            src={Logo}
            alt="Hospital logo"
            width="100%"
            display="block"
          />
        </Box>
        <VStack mt="2rem" spacing="5rem">
          <MenuLink to="/dashboard" exact>
            <MenuIcon icon={<DashboardIcon width="100%" />} />
            Dashboard
          </MenuLink>
          <MenuLink to="/appointment">
            <MenuIcon icon={<AppointmentIcon width="100%" />} />
            Appointment
          </MenuLink>
          <MenuLink to="/patient">
            <MenuIcon icon={<UsersIcon width="100%" />} />
            My Patients
          </MenuLink>
          <MenuLink to="/consultation">
            <MenuIcon icon={<ConsultingIcon width="100%" />} />
            Consultation
          </MenuLink>
        </VStack>
      </Box>
      <Box>
        <IconButton
          onClick={logout}
          bg="transparent"
          _hover={{
            background: '#0609d4',
          }}
          mt="3rem"
        >
          <Logout width="1.5rem" />
        </IconButton>
      </Box>
    </Flex>
  );
}

export default Sidebar;
