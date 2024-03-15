import React from 'react';
import { Box, Flex, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, VStack, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Links = ['About', 'Portfolio', 'Services', 'Goal', 'Blog', 'Contact'];

const NavLink = ({ children, to }) => {
  return (
     <Link
       to={to}
       as="a"
       px={2}
       py={1}
        style={{marginRight: '10px !important'}}
       rounded="md"
       _hover={{
         textDecoration: 'none',
         bg: useColorModeValue('gray.200', 'gray.700'),
       }}
       href="#"
     >
     {children}
     </Link>
  );
 };

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Box
        boxShadow="0 2px 10px 0 rgba(3, 3, 3, 0.3)"
        position={'fixed'} // Use 'fixed' when sticky, otherwise 'sticky'
        top={0}
        zIndex={999}
        bg={'transparent'}
        px={4}
        width="100%" // Ensure the navbar spans the full width

      >
        <Flex p={40} h={16} alignItems="center" justifyContent="space-between">
          <Box><Image src='/kwel.jpeg' alt='kweli' width={120} height={80}/></Box>
          {!isMobile && (
            <VStack as="nav" spacing={4} display={{ base: 'none', md: 'flex'}} flexDirection={'row'} justifyContent={'space-between'} marginLeft={50}>
              {Links.map((link) => (
                <NavLink key={link} to={link.toLowerCase()} >{link}</NavLink>
              ))}
            </VStack>
          )}
          {isMobile && (
            <Flex alignItems="center" display={{ base: 'flex', md: 'none' }}>
              <IconButton
                size="md"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label="Open Menu"
                onClick={isOpen ? onClose : onOpen}
              />
            </Flex>
          )}
        </Flex>
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <VStack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </VStack>
          </Box>
        )}
      </Box>
    </>
  );
}
