import logo from "../img/Openlibra.png";
import { Link } from 'react-router-dom';
import { Image } from "@chakra-ui/react";
import { Flex, Spacer, Input, Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import {FaSearch} from 'react-icons/fa'

export const Header = () => {
  
  const [word, setWord ] = useState([]);
  
  
  return (
    <>
      <Flex w='100%' h='70px'p='18px' align='center' justify='flex-start' bgColor='#2B6CB0' color='Azure'>
        
        <Link to={"/"}>  <Image src={logo} h="60px"/> </Link>

        <Box w='500px'>
          <InputGroup ml='100px' bgColor='white'>
            <Input placeholder='Search Your Book' color='black' onChange={(event)=> setWord(event.target.value)} />
            <InputRightElement  children={<Link to={'/search/'+ word}><FaSearch cursor='pointer' color='black'/></Link>} />
          </InputGroup>
        </Box>
        
        </Flex>
      
    </>
  );
};


