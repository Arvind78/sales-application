import React, { useState } from 'react';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Box, Avatar } from '@chakra-ui/react';
import { HiDotsHorizontal } from 'react-icons/hi';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import ViewOrderModal from './ViewOrderModal';

/**
 * 📦 CompleteOrders Component
 * 
 * This component displays a table of completed orders with pagination. Users can view 
 * order details, including the order ID, customer name with avatar, price, and last 
 * modified date. Pagination allows navigation through multiple pages of orders.
 * 
 * 📝 Features:
 * - Display orders in a table format
 * - Show customer avatars alongside names
 * - Implement pagination for order navigation
 * - Highlight rows on hover
 */

const CompleteOrders = () => {
  const orders = [
    { id: 'ORD001', customerName: 'John Doe', price: 2500, lastModified: '12/09/2022' },
    { id: 'ORD002', customerName: 'Jane Smith', price: 1500, lastModified: '15/09/2022' },
    // Add more orders as needed
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
        <Table border="2px solid" borderColor="gray.200" borderRadius="5px">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th isNumeric>Price (₹)</Th>
              <Th>Last Modified</Th>
              <Th>View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentOrders.map((order) => (
              <Tr key={order.id} _hover={{ bg: 'gray.100', color: "#333" }}>
                <Td>{order.id}</Td>
                <Td>
                  <div className="avatar">
                    <Avatar name={order.customerName} size="sm" />
                    {order.customerName}
                  </div>
                </Td>
                <Td isNumeric>{order.price}</Td>
                <Td>{order.lastModified}</Td>
                <Td>
                  <ViewOrderModal/>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" mt="4">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </Box>
    </Box>
  );
};

export default CompleteOrders;
