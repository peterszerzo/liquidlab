(function(){

	ll.Comp.Hero = class extends React.Component {

		/*
		 *
		 *
		 */
		render() {
			return (
				<div className='hero'>
					<div className='hero__content'>
						<div className='hero__logo'>
							<img src="public/images/logo-green.svg" alt="main logo" />
						</div>
						<div className='hero__text'>
							<h1>LiquidLab</h1>
							<p>Better nutrition. Better life.</p>
							<p>Tailored to you.</p>
							<div className='button'>Get started</div>
						</div>
					</div>
				</div>
			);
		}

	}

}());