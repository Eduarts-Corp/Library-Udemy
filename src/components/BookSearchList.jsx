import { useEffect, useState } from "react";
import { useParams } from "react-router"
import * as API from '../services/data';
import Cargando from '../img/Cargando.gif';
import { Heading, Image, Center, Flex } from "@chakra-ui/react";
import { BookItem } from "../components/BookItem";



export function BookSearchList(){

    let params = useParams();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.getBookSearch(params.word)
            .then(setBooks);
    },[books]);


    return (
        
        <>
        
            <Heading as='h1' size='xl'mb='25px'>Resultados de tu Busqueda con :{params.word}</Heading>
            {books.length == 0 ?
                (<Center><Image width='150px' src={Cargando} /></Center>) :
                (<section>
                    <Flex direction='column'>
                        {books.map(book => {
                            return (
                                <BookItem key={book.id} {...book} />
                            )                           
                        })}
                    </Flex>
                </section>)
            }   
        </>

        )
  }