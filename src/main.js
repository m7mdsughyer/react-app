import Cardform from './card';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Main (){  
   let [items, setItems] = useState([]);
   async function getData(){
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
      const options = {
         method: 'GET',
      };
      
      const response = await fetch(url, options);
      const result = await response.json();
      setItems(result.meals)
   }
   useEffect(function (){getData()}, [])
      
      async function handleSubmit (event){
         event.preventDefault();
         let searchedvalue = event.target.search.value;
         const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
           const options = {
            method: 'GET',
        };
   
       
         const response = await fetch(url, options);
        const result = await response.json();
        
      
      
       
      
       let filteredItems = result.meals.filter(function(item){ return item.strMeal.toLowerCase().includes(searchedvalue.toLowerCase())})
       setItems(filteredItems);
   
  
    }
   
      return(
        <>
         <form onSubmit={handleSubmit} > 
        
      <InputGroup className="mb-3" style={{marginLeft:'20%', marginTop:'3%'}}>
        <Form.Control
        type='search'
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
            {items.length !==0 ? items.map(function(item){  
             return(
               <>
                <Cardform image_url={item.strMealThumb} title={item.strMeal} description={item.strInstructions} />
                </>
             )
             }
             ): <h3 style={{fontStyle:"italic"}}>Item is not Found</h3>
            }
         

        </div>
        </>
     )
}
export default Main;