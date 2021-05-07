/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  useExpanded,
  useSortBy,
  useTable,
  usePagination,
} from 'react-table';
import {
  Box,
  Text,
  IconButton,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  chakra,
} from '@chakra-ui/react';
import {
  TriangleDownIcon,
  TriangleUpIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';

export default function TableComponent(props) {
  const data = React.useMemo(() => props.data, [props.data]);
  const columns = React.useMemo(() => props.columns, [props.columns]);
  const Table = chakra.table;
  const TableHead = chakra.thead;
  const TableRow = chakra.tr;
  const TableH = chakra.th;
  const TableBody = chakra.tbody;
  const TableD = chakra.td;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state: { pageIndex, pageSize },
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useSortBy,
    useExpanded,
    usePagination
  );
  return (
    <Box
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.15)"
      bg="#fff"
      borderRadius="5px"
      p="3rem"
      mt="4rem"
    >
      <Table bg="inherit" w="100%" maxW="100%" {...getTableProps()}>
        {!props.hideHeaders && (
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow
                borderBottomWidth={1}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <TableH
                    p={8}
                    pt="0"
                    textAlign="left"
                    fontWeight="600"
                    textTransform="capitalize"
                    {...column.getHeaderProps(
                      column.getSortByToggleProps()
                    )}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon ml={3} />
                        ) : (
                          <TriangleUpIcon ml={3} />
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </TableH>
                ))}
              </TableRow>
            ))}
          </TableHead>
        )}
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow
                _hover={{ bg: 'gray.50' }}
                bg="white"
                textAlign="center"
                borderBottom="1px solid #E4E4E4"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <TableD
                    textAlign="left"
                    p={8}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </TableD>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Flex justify="space-between" align="center" p={8}>
        <HStack spacing="24px">
          <Menu>
            <MenuButton
              bg="white"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              size="lg"
              color="gray.600"
              fontSize="1.4rem"
              rounded="2xl"
              transition="all 0.2s"
              borderWidth="1px"
              _hover={{ bg: 'gray.100', outline: 0 }}
              _expanded={{ bg: 'gray.100', outline: 0 }}
              _focus={{ outline: 0 }}
              _active={{ outline: 0 }}
              fontWeight="400"
            >
              {pageSize}
            </MenuButton>
            <MenuList>
              {[10, 20, 30, 40, 50].map((newPageSize) => (
                <MenuItem
                  onClick={() => {
                    setPageSize(newPageSize);
                  }}
                  key={newPageSize}
                  value={pageSize}
                >
                  {newPageSize}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Text>
            Showing{' '}
            {pageIndex === 0 ? '1' : `${pageSize * pageIndex + 1}`} -{' '}
            {pageSize * pageIndex + pageSize > data.length
              ? data.length
              : pageSize * pageIndex + pageSize}{' '}
            of {data.length}
          </Text>
        </HStack>
        <HStack spacing="10px">
          <IconButton
            _hover={{ border: 'none', outline: 'none' }}
            _active={{ border: 'none', outline: 'none' }}
            _focus={{
              border: 'none',
              outline: 'none',
            }}
            aria-label="icon"
            colorScheme="green"
            bg="green.50"
            borderRadius="0.75rem"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            size="lg"
            icon={<ArrowLeftIcon color="green.500" boxSize={3} />}
          />
          <IconButton
            _hover={{ border: 'none', outline: 'none' }}
            _active={{ border: 'none', outline: 'none' }}
            _focus={{
              border: 'none',
              outline: 'none',
            }}
            aria-label="icon"
            colorScheme="green"
            bg="green.50"
            borderRadius="0.75rem"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            size="lg"
            icon={<ChevronLeftIcon color="green.500" boxSize={8} />}
          />
          <Button
            _hover={{ border: 'none', outline: 'none' }}
            _active={{ border: 'none', outline: 'none' }}
            _focus={{
              border: 'none',
              outline: 'none',
            }}
            colorScheme="green"
            size="lg"
            fontSize="1.2rem"
          >
            {pageIndex + 1}{' '}
          </Button>
          <IconButton
            _hover={{ border: 'none', outline: 'none' }}
            _active={{ border: 'none', outline: 'none' }}
            _focus={{
              border: 'none',
              outline: 'none',
            }}
            aria-label="icon"
            colorScheme="green"
            bg="green.50"
            borderRadius="0.75rem"
            onClick={() => nextPage()}
            disabled={!canNextPage}
            size="lg"
            icon={<ChevronRightIcon color="green.500" boxSize={8} />}
          />
          <IconButton
            _hover={{ border: 'none', outline: 'none' }}
            _active={{ border: 'none', outline: 'none' }}
            _focus={{
              border: 'none',
              outline: 'none',
            }}
            aria-label="icon"
            colorScheme="green"
            bg="green.50"
            borderRadius="0.75rem"
            disabled={!canNextPage}
            size="lg"
            onClick={() => gotoPage(pageCount - 1)}
            icon={<ArrowRightIcon color="green.500" boxSize={3} />}
          />
        </HStack>
      </Flex>
    </Box>
  );
}
