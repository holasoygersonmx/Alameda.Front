import './ProductDetails.css';

export const ProductDetails = ({product, viewProductsList}) => {

    function addToShoppingCart(event) {
        event.preventDefault();
        const amount = event.target.amount.value;
        if (amount >= 1) {
            alert('Acción no disponible por el momento. Estamos trabajando en esto. Tu acción fue: Agregar al carrito ' + amount + ' pieza de ' + product.name + ' ' + product.color + '.');
        } else {
            alert('Primero ingresa una cantidad.');
        }
        event.target.amount.value = '';
    }

    return <section className='productDetails'>
        <figure>
            <img src={require('../../assets/images/' + product.cover)} />
        </figure>
        <div>
            <div>
                <h2>{product.name} <span>{product.color}</span></h2>
                <p>{product.price} $ {((product.off != '') ? <span>{product.off}% off</span> : '')}</p>
                <p>{product.description}</p>
            </div>
            <form onSubmit={addToShoppingCart}>
                <input type='number' name='amount' placeholder='Cantidad' min='1' />
                <button>Añadir al carrito</button>
                <a onClick={() => viewProductsList()}>Regresar</a>
            </form>
        </div>
    </section>
}