import{ Box,Heading,IconButton } from '@chakra-ui/react';
import{ FaSun,} from'react-icons/fa';
const Header = () =>
{
return(
<Box display ="flex" p={6}> 
    <IconButton 
    icon={<FaSun /> }
     isRound={true}
      mr={5}
    />
    <Heading
    bgGradient='linear(to-l,red.500,yellow.500,pink.200)'
    bgClip='text'
    >ToDo App</Heading>
</Box>
)
}
export default Header;
