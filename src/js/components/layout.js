(function(){

	var { Header, Footer, Hero, Pitch, ChatBar, Info } = ll.Comp;

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
					{ this.state.scrollTop > 500 ? <Header /> : null }
					<Hero />
					<Pitch />
					<ChatBar {...ll.content.chatBoxes[0]} position='left' />
					<ChatBar {...ll.content.chatBoxes[1]} position='right' />
					<Info />
					<Footer />
				</div>
			);
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