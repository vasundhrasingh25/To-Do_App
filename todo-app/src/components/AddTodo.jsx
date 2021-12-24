
import {HStack,Input,Button}from '@chakra-ui/react';
const AddToDo = () =>
{
    return(
        <HStack>
            <Input
            placeholder="Add ToDo items..."
            variant="filled"
  />
  <Button        
  colorScheme="green"
  px={8}
  >
   Add Todo 
   </Button>
        </HStack>

    )
}
export default AddToDo;
