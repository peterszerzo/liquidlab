(function(){

	ll.Comp.ChatBar = class extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
				isActive: true
			}
		}


		/*
		 *
		 *
		 */
		render() {
			var cls = `chat-bar ${ this.state.isActive ? '' : 'chat-bar--inactive' } chat-bar--${this.props.position}`;
			return (
				<div className={cls} onClick={this.handleClick.bind(this)}>
					<div className='chat-bar__content'>
						<div className='grid'>
							{ this.props.position === 'right' ? <div className='grid__col grid__col--3-of-12'></div> : null }
							<div className='grid__col grid__col--9-of-12'>						
								<div className='chat-box chat-bar__title'>
									<h1>{ this.props.title }</h1>
								</div>
								<p className='chat-bar__body'>{ this.props.body }</p>
								<div className='grid'>
									{ this.renderBoxes() }
								</div>
							</div>
							{ this.props.position === 'left' ? <div className='grid__col grid__col--3-of-12'></div> : null }
						</div>
					</div>
				</div>
			);
		}


		/*
		 *
		 *
		 */
		renderBoxes() {
			if (!this.props.boxData) { return; }
			return this.props.boxData.map((datum, i) => {
				var style = { backgroundImage: `url(public/images/${datum.imageFileName})` };
				return (
					<div className='grid__col grid__col--4-of-12' key={i}>
						<div className='feature-box'>
							<div className='feature-box__background' style={style}></div>
							<div className='feature-box__title'>
								<div>
									<h1>
										{datum.title}
									</h1>
								</div>
							</div>
							<div className='feature-box__body'>
								<div>
									<p>
										{datum.body}
									</p>
								</div>
							</div>
						</div>
					</div>
				);
			});
		}


		/*
		 *
		 *
		 */
		handleClick() {
			this.setState({ isActive: !this.state.isActive });
		}

	}

}());