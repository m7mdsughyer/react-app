import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from'./data.json';

function Main(){
    return(
        <>
        <div style={{display:'flex', flexWrap:'wrap', marginLeft:"7%", marginTop:"3%"}}>
        {data.map(function (product){
            return(
    <Card style={{ width: '18rem', marginRight:"1%" }}>
      <Card.Img variant="top" src={product.image_url} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            )
    }
    )
    }
    </div>
        </>

    )

}
export default Main;