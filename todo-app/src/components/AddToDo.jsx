
import{useState}from 'react';
import {HStack,Input,Button,useToast}from '@chakra-ui/react';
const AddToDo = ({ todos, setTodo}) =>
{
    const [todo,setTodos]=useState(' ');
    const  toast=useToast();
    const handleChange= (e) => {
        setTodo(e.target.value);
        console.log(todo);
    }
    const addTodo =() =>{
        if(!todo){
            toast({
                title:'No ToDo items to Add',
                status:'error',
                durationm:'3000',
                isClosable:true
            })
        }
        const newTodo={
            id:11212121,
            text:todo
        }
        setTodos([...todos,newTodo])
        setTodo('')
    }
    return(
        <HStack>
        
            <Input
            placeholder="Add ToDo items..."
            variant="filled"
            value={todo}
            onChange={(e)=>handleChange(e)}
  />
  <Button        
  colorScheme="green"
  px={8}
  onClick={() =>AddToDo()}
  >
   Add Todo 
   </Button>
        </HStack>

    )
}
export default AddToDo;
