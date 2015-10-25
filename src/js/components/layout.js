(function(){

	var { Header, Footer, Hero, Pitch, ChatBar, Info, About } = ll.Comp;

	ll.Comp.Layout = class extends React.Component {

		/*
		 *
		 *
		 */
		constructor(props) {
			super(props);
			this.state = {
				route: 'home',
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
					{ this.state.scrollTop > 500 ? <Header /> : null }
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
			window.location.hash = this.state.route;
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