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
    <Box>
    <Heading
    bgGradient='linear(to-l,red.500,yellow.500,pink.200)'
    bgClip='text'

    mr={40}
    fontSize={50}
    >ToDo App 
   </Heading>
   <Heading
     display ="flex" p={1}
     bgGradient='linear(to-l,blue.500,yellow.500,green.200)'
     bgClip='text'
    fontSize={12}>📝Add Your List Here ✌</Heading>
    </Box>
    
</Box>
)
}
export default Header;
