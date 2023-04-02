import '../styles/home.css';
import Product from './ProductList'


function Home(props) {

    const { product, onAdd } = props

    return (
    
        <div className='home-body'>
            <h1>Home page</h1>
            <Product key={product.id} product={product} onAdd={onAdd}/>
        </div>
    
    );
}

export default Home;
