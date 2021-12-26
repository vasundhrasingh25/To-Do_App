
import {useState, useEffect} from 'react'; 
import {VStack, Box} from '@chakra-ui/react';
//components
import Header from'./components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
const initialTodo=[

  {
    id:1,
    text:'Hello'
  }
];

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
       <AddTodo todos={todos} setTodos={setTodos} />
       <Todos todos={todos} deleteTodo={deleteTodo} />
     </Box>
</VStack>
    
  );
}

export default App;
