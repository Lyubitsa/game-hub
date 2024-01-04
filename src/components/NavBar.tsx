import { Image } from "@chakra-ui/image";
import { HStack,  } from "@chakra-ui/layout";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}


const NavBar = ({onSearch}: Props) => {

    return (
<HStack>
    <Image src={logo} boxSize='50px'></Image>
    <SearchInput onSearch={onSearch}/>
   <ColorModeSwitch/>
</HStack>
    )
}
export default NavBar