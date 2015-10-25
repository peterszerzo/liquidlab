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
							<h1>We have a simple story</h1>
						</div>

						<div className='grid'>

							<div className='grid__col grid__col--6-of-12'>

							</div>

							<div className='grid__col grid__col--6-of-12'>
								<p>Jeff woke up one morning.</p>
							</div>

						</div>

						<div className='grid'>

							<div className='grid__col grid__col--6-of-12'>
								<p>Aby liked the idea and had many things to add.</p>
							</div>

							<div className='grid__col grid__col--6-of-12'>
							</div>

						</div>

						<div className='grid'>

							<div className='grid__col grid__col--6-of-12'>
							</div>

							<div className='grid__col grid__col--6-of-12'>
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