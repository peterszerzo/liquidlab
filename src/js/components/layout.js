(function(){

	var { Header, Footer, Hero, Pitch, ChatBar, Info, About } = ll.Comp;

	var routes = [ 'home', 'about' ];

	ll.Comp.Layout = class extends React.Component {

		/*
		 *
		 *
		 */
		constructor(props) {
			super(props);
			this.state = {
				scrollTop: null
			};
		}


		/*
		 *
		 *
		 */
		render() {
			return (
				<div className='wrapper' onScroll={this.handleScroll.bind(this)}>
					{ (this.state.scrollTop > 500 || this.state.route !== 'home') ? <Header activeRoute={this.state.route} /> : null }
					{ this.renderRoutable() }
				</div>
			);
		}


		/*
		 *
		 *
		 */
		renderRoutable() {
			if (this.state.route === 'home') {
				return (
					<div>
						<Hero />
						<Pitch />
						<ChatBar {...ll.content.chatBoxes[0]} position='left' />
						<ChatBar {...ll.content.chatBoxes[1]} position='right' />
						<ChatBar {...ll.content.chatBoxes[2]} position='left' />
						<Info navigateToAboutPage={this.navigateToAboutPage.bind(this)} />
						<Footer />
					</div>
				);
			}

			return (
				<div>
					<About />
				</div>
			);
		}


		/*
		 * 
		 *
		 */
		componentWillMount() {
			var { hash } = window.location;
			hash = hash.slice(1);
			var newHash = (routes.indexOf(hash) > -1) ? hash : routes[0];
			this.setState({ route: newHash });
		}


		/*
		 *
		 *
		 */
		componentDidMount() {
			this.setHash();
		}


		/*
		 *
		 *
		 */
		componentDidUpdate() {
			this.setHash();
		}


		/*
		 *
		 *
		 */
		setHash() {
			if (window.location.hash !== this.state.route) {
				window.location.hash = this.state.route;
			}
		}


		/*
		 *
		 *
		 */
		 navigateToAboutPage() {
		 	this.setState({ route: 'about' });
		 }


		/*
		 *
		 *
		 */
		handleScroll(e) {
			var node = React.findDOMNode(this);
			this.setState({ scrollTop: node.scrollTop });
		}

	}

}());