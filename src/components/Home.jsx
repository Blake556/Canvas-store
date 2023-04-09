import { useState } from 'react';
import '../styles/home.css';
import Product from './Product'


function Home(props) {
    // const [itemSelected, setSelected] = useState({
    //     image: '',
    //     name: '',
    //     price: ''
    // })

    const { data } = props;

    // function handleClick() {
    //     //setSelected(console.log())
    //     //props.onAdd(props)
       
        
    //     //console.log()
    //     //event.preventDefault()
    // }

    function continueToPass(addItem) {
        props.onAdd(addItem)
    }

    return (
        <div className='home-body'>
            <h1 className='header'>Home page</h1>
            { data.map((item, index) => {
                return (
                    <Product 
                        key={index}
                        id={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        continueToPass={continueToPass}
                        //onAdd={handleClick}
                    />
                )
            }) }

        </div>
    );
}

export default Home;



// {
//     image: 
//     name: 
//     price: 
// }