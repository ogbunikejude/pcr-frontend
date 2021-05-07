import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { ReactComponent as Options } from '../../Assets/icons/options.svg';
import { ReactComponent as View } from '../../Assets/icons/view.svg';
import { ReactComponent as Edit } from '../../Assets/icons/edit.svg';
import { ReactComponent as Delete } from '../../Assets/icons/delete.svg';

export const TableOptions = ({ viewUrl, editUrl, handleDelete }) => (
  <Menu>
    <MenuButton>
      <Options />
    </MenuButton>
    <MenuList p="1rem" fontSize="1.2rem">
      <MenuItem as={Link} to={viewUrl} py=".7rem" borderRadius="1rem">
        <View />
        <Text ml=".5rem">View</Text>
      </MenuItem>
      <MenuItem as={Link} to={editUrl} py=".7rem" borderRadius="1rem">
        <Edit />
        <Text ml=".5rem">Edit</Text>
      </MenuItem>
      <MenuItem
        py=".7rem"
        borderRadius="1rem"
        color="#fd6e38"
        onClick={handleDelete}
      >
        <Delete />
        <Text ml=".5rem">Delete</Text>
      </MenuItem>
    </MenuList>
  </Menu>
);
