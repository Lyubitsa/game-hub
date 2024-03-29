import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/switch";


const ColorModeSwitch = () => {
const {toggleColorMode, colorMode} = useColorMode();

    return (
        <HStack>
            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text whiteSpace='nowrap'>Dark Mode</Text>
        </HStack>
    )
}


export default ColorModeSwitch