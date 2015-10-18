(function(){

	ll.Comp.Footer = class extends React.Component {

		/*
		 *
		 *
		 */
		render() {
			return (
				<footer className='footer'>

					<div className='footer__content'>

						<div className='grid'>

							<div className='grid__col grid__col--6-of-12'>

								<div className='footer__left'>

									<div className='footer__logo'>
										<img src='public/images/logo-black.svg' />
									</div>

									<div className='footer__title'>
										<h1>LiquidLab</h1>
										<p>The way we imagined nutrition.</p>
										<p>All along.</p>
									</div>

								</div>

							</div>

							<div className='grid__col grid__col--6-of-12'>

								<div className='footer__buttons'>

									<div className='button'>Subscribe</div>
									<div className='button'>Follow</div>

								</div>

							</div>

						</div>

					</div>
				</footer>
			);
		}

	}

}());