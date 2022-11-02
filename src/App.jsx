import { Booklist } from './components/Booklist';
import { Header } from './components/Header';
import { BookDetail } from './components/BookDetail';
import { BookSearchList } from './components/BookSearchList';
import { Routes, Route } from 'react-router-dom';
import { Box } from "@chakra-ui/react";



export function App() {

  return (
    <>
     
      <Header /> 

      <Box ml='15%'mr='15%'mt='50px'>
        

      <Routes>
        <Route path='/' element={<Booklist />} />  
        <Route path='book/:bookId' element={<BookDetail />} />   
        <Route path='search/:word' element={<BookSearchList/>} />
       </Routes>

      </Box>

    </>
  );
}


 
 