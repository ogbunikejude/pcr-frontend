import React from 'react';
import {
  Stack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Portal,
  PopoverCloseButton,
} from '@chakra-ui/react';

import { ReactComponent as ViewIcon } from '../../assets/icons/ViewIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/EditIcon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/DeleteIcon.svg';
import { ReactComponent as ExpandIcon } from '../../assets/icons/ExpandIcon.svg';

export default function Popout() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label="Popover Icon"
          icon={<ExpandIcon style={{ width: '1rem' }} />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          w="100px"
          p="1rem"
          position="absolute"
          top="-50px"
          right="100px"
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Stack direction="column" spacing={4}>
              <Button
                leftIcon={<ViewIcon style={{ width: '2rem' }} />}
                color="#06D444"
                fontSize="1.8rem"
                variant="ghost"
              >
                View
              </Button>
              <Button
                leftIcon={<EditIcon style={{ width: '2rem' }} />}
                color="#06D444"
                fontSize="1.8rem"
                variant="ghost"
              >
                Edit
              </Button>
              <Button
                leftIcon={<DeleteIcon style={{ width: '2rem' }} />}
                color="#FD6E38"
                fontSize="1.8rem"
                variant="ghost"
              >
                Delete
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
