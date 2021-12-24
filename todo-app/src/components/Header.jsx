import{ Box,Heading,IconButton,useColorMode } from '@chakra-ui/react';
import{ FaSun,FarMoon} from'react-icons/Fa';

const Header = () =>
{
    const{colorMode,toggleColorMode}=useColorMode();
return(
<Box display ="flex" p={6}> 
    <IconButton 
    icon={colorMode ==='light'?<FaSun/> :<FarMoon/>}
     isRound={true}
      mr={5}
      onClick={toggleColorMode}
    />
    <Heading
    bgGradient='linear(to-l,red.500,yellow.500,pink.200)'
    bgClip='text'
    >ToDo App</Heading>
</Box>
)
}
export default Header;
