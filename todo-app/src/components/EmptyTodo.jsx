
import {Text} from '@chakra-ui/react';

const EmptyTodo = () =>
{
    return(
        <Text p={5}
        bg= 'red.400'
        color='white'
        borderRadius={10}
        textAlign={'center'}
        fontSize={20}
        >No Todo items to Display </Text>

    )
}
export default EmptyTodo;