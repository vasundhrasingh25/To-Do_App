import logo from './logo.svg';
import './App.css';
import{VStack}from '@chakra-ui/react';
//cpmponents
import Header from'./components/Header';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <VStack>
<AddToDo />
<Header/>

</VStack>
    
  );
}

export default App;
