import { useCart } from '../hooks/useCart';

export const CardItem = ({ item }) => {
	const { addToCart } = useCart();


  return (
		<div className="col-md-6 col-lg-4 my-4 row align-items-center">
			<div className="col-4">
				<img
					className="img-fluid"
					src={item.image}
					alt="imagen guitarra"
				/>
			</div>
			<div className="col-8">
				<h3 className="text-black fs-4 fw-bold text-uppercase">
					{item.name}
				</h3>
				<p>{item.description}</p>
				<p className="fw-black text-primary fs-3">${item.price}</p>
				<button onClick={() => addToCart(item)} type="button" className="btn btn-dark w-100">
					Agregar al Carrito
				</button>
			</div>
		</div>
  );
}
