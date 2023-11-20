import { Image } from "@chakra-ui/image";
import { HStack,  } from "@chakra-ui/layout";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {

    return (
<HStack justifyContent='space-between'>
    <Image src={logo} boxSize='60px'></Image>
   <ColorModeSwitch/>
</HStack>
    )
}
export default NavBar