
import{useState}from 'react'; 
import{VStack}from '@chakra-ui/react';
//cpmponents
import Header from'./components/Header';
import AddToDo from './components/AddToDo';

function App() {
  const [todos,setTodos]=useState('');
  return (
    <VStack>

<Header />

<AddToDo todos={todos}setTodos={setTodos} />


</VStack>
    
  );
}

export default App;
