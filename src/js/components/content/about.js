(function() {

	ll.Comp.About = class extends React.Component {

		/*
		 *
		 *
		 */
		render() {
			return (
				<div className='about'>

					<div className='about__content'>

								<div className='chat-box'>
									<h1>The story is simple, really</h1>
								</div>


						<div className='grid about__section'>

							<div className='grid__col grid__col--6-of-12'>

								<div className='feature-box feature-box--4-to-3'>
									<div 
										className='feature-box__background'
										style={{ 'backgroundImage': `url(public/images/family-600.jpg)` }}
									></div>
								</div>

							</div>

							<div className='grid__col grid__col--6-of-12'>
								<div className='chat-box'><h1>She thinks about her</h1></div>
								<p>Liz watched her daughter eat breakfast one morning and said to herself: 'the menu needs to change'.</p>
							</div>

						</div>

						<div className='grid about__section'>

							<div className='grid__col grid__col--6-of-12'>
								<div className='chat-box'><h1>He thinks about nature (when awake)</h1></div>
								<p>Aby liked the idea and had many things to add.</p>
							</div>

							<div className='grid__col grid__col--6-of-12'>

								<div className='feature-box feature-box--4-to-3'>
									<div 
										className='feature-box__background'
										style={{ 'backgroundImage': `url(public/images/tractor-guy-600.jpg)` }}
									></div>
								</div>

							</div>

						</div>

						<div className='grid about__section'>

							<div className='grid__col grid__col--6-of-12'>

								<div className='feature-box feature-box--4-to-3'>
									<div 
										className='feature-box__background'
										style={{ 'backgroundImage': `url(public/images/pineapple-600.jpg)` }}
									></div>
								</div>


							</div>

							<div className='grid__col grid__col--6-of-12'>
								<div className='chat-box'><h1>It does not think much</h1></div>
								<p>Luckily for us, Gabriel was easily convinced. He is really good with business development.</p>
							</div>

						</div>

						<div className='chat-box'>
							<h1>Real, real simple.</h1>
						</div>

					</div>

				</div>
			);
		}

	}

}());