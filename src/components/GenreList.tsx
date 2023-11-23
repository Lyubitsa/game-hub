
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";
import getGroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenere: (genre: Genre) => void;
}

const GenreList = ({onSelectGenere}: Props) => {
    const { data, isLoading, error } = useGenre();
    
    if (error) return null;
    if (isLoading) return <Spinner/>;

    return (
        <List>
            {data.map(genre => ( 
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                <Image boxSize="32px"
                       borderRadius={8}
                       src={getGroppedImageUrl(genre.image_background)}/>
                <Button onClick={() => onSelectGenere(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>
            
           ) )}
        </List>
    )
 }

 export default GenreList;