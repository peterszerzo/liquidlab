(function(){

	ll.Comp.Header = class extends React.Component {

		/*
		 *
		 *
		 */
		render() {
			return (
				<header className='header'>
					<div className='header__logo'>
						<img src="public/images/logo-white.svg" />
					</div>
					<div className='header__title'>LiquidLab</div>
					<nav className='header__nav'>
						<div className='header__nav__falafel'>
							<img src='public/images/falafel.svg' />
						</div>
						<ul>
							{ this.renderNavItems() }
						</ul>
					</nav>
				</header>
			);
		}


		/*
		 *
		 *
		 */
		renderNavItems() {
			return [ 'home', 'explore', 'about' ].map((item, i) => {
				var cls = `header__nav-item ${i === 0 ? 'header__nav-item--active' : ''}`
				return (
					<li className={cls} key={i}>
						<div className='header__nav-item__indicator'>
							<div></div>
						</div>
						<p>{ item }</p>
					</li>
				);
			});
		}

	}

}());