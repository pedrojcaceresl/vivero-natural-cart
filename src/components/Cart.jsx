import { useCart } from "../hooks/useCart";

export const Cart = () => {

    const { cart, removeFromCart, decreaseQuantity, addToCart, getTotal, clearCart } = useCart();

  return (
		<nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
			<div className="carrito">
				<img
					className="img-fluid"
					src="/img/carrito.png"
					alt="imagen carrito"
				/>

				<div id="carrito" className="bg-white p-3">
					{cart.length === 0 && (
						<p className="text-center">El carrito esta vacio</p>
					)}
					<table className="w-100 table">
						<thead>
							<tr>
								<th>Imagen</th>
								<th>Nombre</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item, index) => (
								<tr key={index}>
									<td>
										<img
											className="img-fluid"
											src={item.image}
											alt="imagen plants"
										/>
									</td>
									<td>{item.name}</td>
									<td className="fw-bold">${item.price}</td>
									<td className="flex align-items-start gap-4">
										<button
											type="button"
											className="btn btn-dark"
											onClick={() =>
												decreaseQuantity(item)
											}
										>
											-
										</button>
										{item?.qty}
										<button
											onClick={() => addToCart(item)}
											type="button"
											className="btn btn-dark"
										>
											+
										</button>
									</td>
									<td>
										<button
											onClick={() => removeFromCart(item)}
											className="btn btn-danger"
											type="button"
										>
											X
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<p className="text-end">
						Total pagar:{" "}
						{cart.length > 0 && (
							<span className="fw-bold">${getTotal()}</span>
						)}
					</p>
					<button onClick={clearCart} className="btn btn-dark w-100 mt-3 p-2">
						Vaciar Carrito
					</button>
				</div>
			</div>
		</nav>
  );
}
