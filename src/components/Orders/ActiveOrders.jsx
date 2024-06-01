import React, { useState } from 'react';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Box, Avatar } from '@chakra-ui/react';
import { HiDotsHorizontal } from 'react-icons/hi';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const ActiveOrders = () => {
  const orders = [
    { id: 'ORD001', customerName: 'John Doe', price: 2500, lastModified: '12/09/2022' },
    { id: 'ORD002', customerName: 'Jane Smith', price: 1500, lastModified: '15/09/2022' },
    { id: 'ORD003', customerName: 'Michael Brown', price: 3000, lastModified: '20/09/2022' },
    // Add more orders for testing pagination
    { id: 'ORD004', customerName: 'Alice Johnson', price: 2200, lastModified: '22/09/2022' },
    { id: 'ORD005', customerName: 'Robert White', price: 2700, lastModified: '25/09/2022' },
    { id: 'ORD006', customerName: 'Chris Green', price: 1800, lastModified: '27/09/2022' },
    { id: 'ORD007', customerName: 'Patricia Brown', price: 2600, lastModified: '29/09/2022' },
    { id: 'ORD008', customerName: 'Linda Blue', price: 2300, lastModified: '30/09/2022' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);

  return (
    <Box>
      <TableContainer style={{ height: '400px' }}>
        <Table border="2px solid"  borderColor="gray.200" borderRadius="5px">
          <Thead>
            <Tr >
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th isNumeric>Price (₹)</Th>
              <Th>Last Modified</Th>
              <Th>Edit/View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentOrders.map((order) => (
              <Tr key={order.id} _hover={{ bg: 'gray.100',color:"#333"}} >
                <Td>{order.id}</Td>
                <Td >
                  <div className="avatar">
                  <Avatar name={order.customerName} size="sm" />
                  {order.customerName}
                  </div>
               
                </Td>
                <Td isNumeric>{order.price}</Td>
                <Td>{order.lastModified}</Td>
                <Td>
                  <HiDotsHorizontal />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" mt="4">
        <ResponsivePagination current={currentPage} total={totalPages} onPageChange={setCurrentPage} />
      </Box>
    </Box>
  );
};

export default ActiveOrders;
