import { useEffect, useState } from "react";
import * as API from '../services/data';
import { BookItem } from "./BookItem";
import { Flex, Center, Image } from '@chakra-ui/react';
import Cargando  from '../img/Cargando.gif';



export function Booklist(){ 

  const [books, setBooks] = useState([]); // Primero el Hook de estado
  
  useEffect(() => {   // Despues el Hook de efecto
    API.getBooks().then(setBooks);
  });

    
    
  return (
    <>
      
      {books.length == 0 ? (<Center><Image width='150px' src={Cargando} /></Center>) : (
      
        <section>
          <Flex direction='column'>

            {
              books.map((book) => {
                return (
                  <BookItem key={book.ID}
                    {...book} >
                  </BookItem> // Podria omitir esta etiqueta  cerrando arriba
                )
              })
            }

          </Flex>
        </section>
      
      )}

    
     
    </>
  );
};
