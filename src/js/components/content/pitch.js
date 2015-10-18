(function(){

	ll.Comp.Pitch = class extends React.Component {

		/*
		 *
		 *
		 */
		render() {
			return (
				<div className='pitch'>

					<div className='pitch__content'>
						<div className='grid'>
							<div className='grid__col grid__col--6-of-12'>
								<div className='pitch__image'>
									<img src="public/images/peaches-600.jpg" alt="peaches" />
								</div>
							</div>

							<div className='grid__col grid__col--6-of-12'>
								<p>Feeding your body with whole foods and natural produce is the best long-term strategy for maintaining good health.</p>
								<h3>LiquidLab is part of that strategy.</h3>
								<p>Our cold-pressed is packed with easily digestable raw vitamins, minerals and enzymes form locally sourced fresh fruits and vegetables.</p>
								<h3>Reach your full potential through balance, not extremism.</h3>
								<p>Whatever your lifestyle, we’ve got a juice that will get you there.</p>
							</div>
						</div>
					</div>

				</div>
			);
		}

	}

}());