import { Link } from "react-router-dom";
import { Box,  Center,  Spacer,  Image,  Text,  Button,  Tag,} from "@chakra-ui/react";
import { VscBook } from "react-icons/vsc";
import { FaLanguage } from "react-icons/fa";



export function BookItem(book) {
  return (
    <>
      <Box w="100%" p="4" display="flex" borderWidth="3px" borderRadius="lg">
        <Image src={book.cover} width="100px" borderRadius="lg" />

        <Box display="flex" p="4" flexDirection="column">
          <Text as="samp" fontSize="xl">{book.title}</Text>
          <Text color="teal">{book.publisher_date}</Text>
          <Link to={"/book/" + book.ID }> <Button colorScheme={"red"} w="100px" mt="4"> Details  </Button> </Link>
        </Box>

        <Spacer />

        <Box display="flex" p="6" mr="20" flexDirection="column">
          <Center><VscBook /><Tag m="1" p="2" colorScheme="green" fontSize="sm"> {book.pages}</Tag></Center>          
          <Center><FaLanguage width={'60px'}/><Text ml='5px'>{book.language}</Text></Center>
        </Box>
      </Box>
    </>
  );
}
