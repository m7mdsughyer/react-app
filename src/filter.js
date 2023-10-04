import Form from 'react-bootstrap/Form';
import Cardform from './card';
import { useEffect, useState } from 'react';
function Filter (){
    let [items, setItems] = useState([]);
    let [categ, setCateg] = useState ([]);
    async function getMealData(){
       const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
       const data = await response.json();
       setItems(data.meals)
    }
     async function changeData(){
        
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        let data = await response.json()
         setCateg (data.meals)
        
         }

         async function handleChange (event){
            let selectValue= event.target.value
             let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + selectValue)
            let data = await response.json()
            setItems(data.meals)

 
        }
    
    useEffect(function (){getMealData()
        changeData()
    }, [])

    return(
        <>
        
        <Form.Select onChange={handleChange}>
        <option value="all" style={{fontStyle:"italic"}}>ALL</option>
        { categ.map(function(category){
            
            return <option value={category.strCategory}>{category.strCategory}</option>
        })}
        </Form.Select>
        
        <div id="container" style={{display:'flex', flexWrap:'wrap', marginLeft:"7%", marginTop:"3%"}}>
            {items.length !==0 ? items.map(function(item){  
             return(
               
                <Cardform image_url={item.strMealThumb} title={item.strMeal} description={item.strInstructions} />
                
             )
             }
             ): <h3 style={{fontStyle:"italic"}}>Item is not Found</h3>
            }
         

        </div>
        </>
    )
}

export default Filter;