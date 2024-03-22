import { Cart } from "./Cart";

export const Header = () => {
  return (
		<header className="py-5 header">
			<div className="container-xl">
				<div className="row justify-content-center justify-content-md-between">
					<div className="col-8 col-md-3">
						<a href="index.html">
							<img
								className="img-fluid"
								src="/img/logo2.png"
								alt="imagen logo"
							/>
						</a>
					</div>
					<Cart />
				</div>
			</div>
		</header>
  );
}
