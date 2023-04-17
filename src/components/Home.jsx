import React from 'react'

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
        <div className='body'>
            <h1 className='header'>Home page</h1>
                <div className='main-content'>
                { data.map((item, index) => {
                    return (
                        <Product 
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            continueToPass={continueToPass}
                            //onAdd={handleClick}
                        />
                    )
                }) }
                </div>
        </div>
    );
    
}

export default Home;



// {
//     image: 
//     name: 
//     price: 
// }