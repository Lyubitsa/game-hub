
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";
import getGroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenere: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenere}: Props) => {
    const { data, isLoading, error } = useGenre();
    
    if (error) return null;
    if (isLoading) return <Spinner/>;

    return (
        <>
       <Heading  fontSize='2xl' marginBottom={3}>Genres</Heading>
        <List>
            {data.map(genre => ( 
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                <Image boxSize="32px"
                       borderRadius={8}
                       objectFit='cover'
                       src={getGroppedImageUrl(genre.image_background)}/>
                <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenere(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>
            
           ) )}
        </List>
        </>
    )
 }

 export default GenreList;