
import {useState} from 'react'; 
import {VStack, Box} from '@chakra-ui/react';
//components
import Header from'./components/Header';
import AddToDo from './components/AddToDo';
import Todos from './components/Todos';

function App() {
  const [todos,setTodos]=useState([]);
   
  const deleteTodo = (id) => {
    const updatedTodo = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodo);
  }
  return (
<VStack>
   <Header />
     <Box
       w='100%'
       maxW={{base: '80Vw', sm: '80Vw', lg: '50Vw', xl: '40Vw'}}
     >
       <AddToDo todos={todos} setTodos={setTodos} />
       <Todos todos={todos} deleteTodo={deleteTodo} />
     </Box>
</VStack>
    
  );
}

export default App;
