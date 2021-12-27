import{ Box,Heading,IconButton,useColorMode } from '@chakra-ui/react';
import{ FaSun,FaMoon} from'react-icons/fa';

const Header = () =>
{
    const{colorMode,toggleColorMode}=useColorMode();
return(
<Box display ="flex" p={6}> 
    <IconButton 
    icon={colorMode ==='light'?<FaSun/> :<FaMoon/>}
     isRound={true}
      mr={10}
      mt={3}
      onClick={toggleColorMode}
    />
    <Heading
    bgGradient='linear(to-l,red.500,yellow.500,pink.200)'
    bgClip='text'
    mr={40}
    fontSize={50}
    >ToDo App</Heading>
</Box>
)
}
export default Header;
