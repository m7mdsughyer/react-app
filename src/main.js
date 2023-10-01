import Cardform from './card';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Main (){  
   let [items, setItems] = useState([]);
   async function getData(){
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    
      
      try {
         const response = await fetch(url);
         const result = await response.json();
         setItems(result.results)
      } catch (error) {
         console.error(error);
      }
   }
   useEffect(function (){getData()}, [])
   // function handleSubmit (event){
   //    event.preventDefault()
   //    let searchedvalue = event.target.search.value;
      
   //    let filteredItems = data.filter(function(item){ return item.title.toLowerCase().includes(searchedvalue.toLowerCase())})
   //    setItems(filteredItems);
   
  
   // }
      return(
        <>
        <form> 
         {/* onSubmit={handleSubmit} */}
      <InputGroup className="mb-3" style={{marginLeft:'20%', marginTop:'3%'}}>
        <Form.Control
        name='search'
          placeholder="Search"
          aria-describedby="basic-addon2"
        />
        <Button type='submit' variant="outline-secondary" id="button-addon2" style={{marginRight:'50%'}}>
          Submit
        </Button>
      </InputGroup>
      </form>
        <div id="container" style={{display:'flex', flexWrap:'wrap', marginLeft:"7%", marginTop:"3%"}}>
            {items.map(function(item){  
             return(
                <Cardform image_url={item.strMealThumb} title={item.strMeal} />
             )
             }
             )
            }

        </div>
        </>
     )
}
export default Main;