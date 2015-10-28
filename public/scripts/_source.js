"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ll = {};

ll.start = function () {
	var Cmp = ll.Comp.Layout;
	// console.log(React.renderToString(<Cmp />));
	React.render(React.createElement(Cmp, null), document.getElementById('site'));
};
(function () {

	ll.content = ll.content || {};

	ll.content.chatBoxes = [{
		title: "High-quality, fresh ingredients. Custom-selected",
		body: "Short on time? Not sure where to start? Try one of our Juice Sampler Packages.",
		boxData: [{
			title: "Drink juice first",
			body: "Our version of ‘Eat dessert first’: The Sweet Tooth sampler.",
			imageFileName: "raspberries-600.jpg"
		}, {
			title: "Why eat veggies",
			body: "When you can drink them? Our leafy green sampler. Except no dishes to wash",
			imageFileName: "salad-600.jpg"
		}, {
			title: "Protect yourself",
			body: "From the subway's airborne illnesses. Try the immune sampler.",
			imageFileName: "train-tracks-600.jpg"
		}]
	}, {
		title: "Jump-start a healthy you with LiquidLab",
		body: "Our custom service crafts a juice program tailored to your current lifestyle and health goals. If you’re already committed to a healthy lifestyle and are looking to incorporate fresh juice as part of a balanced diet, it might be just what you’re looking for - with mere 15 minutes to get started.",
		boxData: [{
			title: "Tell us about you",
			body: "Tell us how you’re currently living. High stress? Happily balanced? Somewhere in between?",
			imageFileName: "notebook-and-coffee-600.jpg"
		}, {
			title: "Let's nerd it out together",
			body: "Our databases are awesome at finding out what you need. Also really smooth in conversation!",
			imageFileName: "laptop-600.jpg"
		}, {
			title: "Polish it up with some more you",
			body: "Customize further based on your daily routine, budget and much more. Let us do the planning for you.",
			imageFileName: "putting-on-shoes-600.jpg"
		}]
	}, {
		title: "We do put a lot of care into this",
		body: "A happy team of nutritionists, farmers, data scientists, designers and programmers stand behind your experience at LiquidLab."
	}];

	ll.content.info = {

		boxes: [{
			title: 'Green juice. Produced greenly.',
			body: 'We work with local farms to source our all-organic produce. Nothing goes into our juice that isn’t from within a 100-mile radius of our headquarters. Which means we use less fossil fuels to transport and produce our juice. And support small local farms in the process.',
			imageFileName: 'green-600.jpg'
		}, {
			title: 'Healthy and happy. No pressure.',
			body: "We don't tell you what healthy means. Instead, we celebrate choosing whatever healthy means to you. Our blog is full of resources to help you make enlightened choices for healthy living, along with travel tips, healthy home ideas, and fitness guides.",
			imageFileName: 'high-feet-600.jpg'
		}, {
			title: 'Made with care',
			body: 'LiquidLab was founded in 2014 by three close friends who wanted to help others improve their lifestyle and incorporate more fresh fruit and veggies into their diets.',
			imageFileName: 'drawing-600.jpg'
		}]

	};
})();

ll.Comp = ll.Comp || {};
(function () {

	ll.Comp.Footer = (function (_React$Component) {
		_inherits(_class, _React$Component);

		function _class() {
			_classCallCheck(this, _class);

			_get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(_class, [{
			key: "render",

			/*
    *
    *
    */
			value: function render() {
				return React.createElement(
					"footer",
					{ className: "footer" },
					React.createElement(
						"div",
						{ className: "footer__content" },
						React.createElement(
							"div",
							{ className: "grid" },
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "footer__left" },
									React.createElement(
										"div",
										{ className: "footer__logo" },
										React.createElement("img", { src: "public/images/logo-black.svg" })
									),
									React.createElement(
										"div",
										{ className: "footer__title" },
										React.createElement(
											"h1",
											null,
											"LiquidLab"
										),
										React.createElement(
											"p",
											null,
											"The way we imagined nutrition."
										),
										React.createElement(
											"p",
											null,
											"All along."
										)
									)
								)
							),
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "footer__buttons" },
									React.createElement(
										"div",
										{ className: "button" },
										"Subscribe"
									),
									React.createElement(
										"div",
										{ className: "button" },
										"Follow"
									)
								)
							)
						)
					)
				);
			}
		}]);

		return _class;
	})(React.Component);
})();
(function () {

	ll.Comp.Header = (function (_React$Component2) {
		_inherits(_class2, _React$Component2);

		function _class2() {
			_classCallCheck(this, _class2);

			_get(Object.getPrototypeOf(_class2.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(_class2, [{
			key: "render",

			/*
    *
    *
    */
			value: function render() {
				return React.createElement(
					"header",
					{ className: "header" },
					React.createElement(
						"div",
						{ className: "header__logo" },
						React.createElement("img", { src: "public/images/logo-white.svg" })
					),
					React.createElement(
						"div",
						{ className: "header__title" },
						"LiquidLab"
					),
					React.createElement(
						"nav",
						{ className: "header__nav" },
						React.createElement(
							"div",
							{ className: "header__nav__falafel" },
							React.createElement("img", { src: "public/images/falafel.svg" })
						),
						React.createElement(
							"ul",
							null,
							this.renderNavItems()
						)
					)
				);
			}

			/*
    *
    *
    */
		}, {
			key: "renderNavItems",
			value: function renderNavItems() {
				var _this = this;

				return ['home', 'explore', 'about'].map(function (item, i) {
					var cls = "header__nav-item " + (_this.props.activeRoute === item ? 'header__nav-item--active' : '');
					return React.createElement(
						"li",
						{ className: cls, key: i },
						React.createElement(
							"div",
							{ className: "header__nav-item__indicator" },
							React.createElement("div", null)
						),
						React.createElement(
							"p",
							null,
							item
						)
					);
				});
			}
		}]);

		return _class2;
	})(React.Component);
})();
(function () {

	ll.Comp.About = (function (_React$Component3) {
		_inherits(_class3, _React$Component3);

		function _class3() {
			_classCallCheck(this, _class3);

			_get(Object.getPrototypeOf(_class3.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(_class3, [{
			key: "render",

			/*
    *
    *
    */
			value: function render() {
				return React.createElement(
					"div",
					{ className: "about" },
					React.createElement(
						"div",
						{ className: "about__content" },
						React.createElement(
							"div",
							{ className: "chat-box" },
							React.createElement(
								"h1",
								null,
								"The story is simple, really"
							)
						),
						React.createElement(
							"div",
							{ className: "grid about__section" },
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "feature-box feature-box--4-to-3" },
									React.createElement("div", {
										className: "feature-box__background",
										style: { 'backgroundImage': "url(public/images/family-600.jpg)" }
									})
								)
							),
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "chat-box" },
									React.createElement(
										"h1",
										null,
										"She thinks about her"
									)
								),
								React.createElement(
									"p",
									null,
									"Liz watched her daughter eat breakfast one morning and said to herself: 'the menu needs to change'."
								)
							)
						),
						React.createElement(
							"div",
							{ className: "grid about__section" },
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "chat-box" },
									React.createElement(
										"h1",
										null,
										"He thinks about nature (when awake)"
									)
								),
								React.createElement(
									"p",
									null,
									"Aby liked the idea and had many things to add."
								)
							),
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "feature-box feature-box--4-to-3" },
									React.createElement("div", {
										className: "feature-box__background",
										style: { 'backgroundImage': "url(public/images/tractor-guy-600.jpg)" }
									})
								)
							)
						),
						React.createElement(
							"div",
							{ className: "grid about__section" },
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "feature-box feature-box--4-to-3" },
									React.createElement("div", {
										className: "feature-box__background",
										style: { 'backgroundImage': "url(public/images/pineapple-600.jpg)" }
									})
								)
							),
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "chat-box" },
									React.createElement(
										"h1",
										null,
										"It does not think much"
									)
								),
								React.createElement(
									"p",
									null,
									"Luckily for us, Gabriel was easily convinced. He is really good with business development."
								)
							)
						),
						React.createElement(
							"div",
							{ className: "chat-box" },
							React.createElement(
								"h1",
								null,
								"Real, real simple."
							)
						)
					)
				);
			}
		}]);

		return _class3;
	})(React.Component);
})();
(function () {

	ll.Comp.ChatBar = (function (_React$Component4) {
		_inherits(_class4, _React$Component4);

		function _class4(props) {
			_classCallCheck(this, _class4);

			_get(Object.getPrototypeOf(_class4.prototype), "constructor", this).call(this, props);
			this.state = {
				isActive: true
			};
		}

		/*
   *
   *
   */

		_createClass(_class4, [{
			key: "render",
			value: function render() {
				var cls = "chat-bar " + (this.state.isActive ? '' : 'chat-bar--inactive') + " chat-bar--" + this.props.position;
				return React.createElement(
					"div",
					{ className: cls, onClick: this.handleClick.bind(this) },
					React.createElement(
						"div",
						{ className: "chat-bar__content" },
						React.createElement(
							"div",
							{ className: "grid" },
							this.props.position === 'right' ? React.createElement("div", { className: "grid__col grid__col--3-of-12" }) : null,
							React.createElement(
								"div",
								{ className: "grid__col grid__col--9-of-12" },
								React.createElement(
									"div",
									{ className: "chat-box chat-bar__title" },
									React.createElement(
										"h1",
										null,
										this.props.title
									)
								),
								React.createElement(
									"p",
									{ className: "chat-bar__body" },
									this.props.body
								),
								React.createElement(
									"div",
									{ className: "grid" },
									this.renderBoxes()
								)
							),
							this.props.position === 'left' ? React.createElement("div", { className: "grid__col grid__col--3-of-12" }) : null
						)
					)
				);
			}

			/*
    *
    *
    */
		}, {
			key: "renderBoxes",
			value: function renderBoxes() {
				if (!this.props.boxData) {
					return;
				}
				return this.props.boxData.map(function (datum, i) {
					var style = { backgroundImage: "url(public/images/" + datum.imageFileName + ")" };
					return React.createElement(
						"div",
						{ className: "grid__col grid__col--4-of-12", key: i },
						React.createElement(
							"div",
							{ className: "feature-box" },
							React.createElement("div", { className: "feature-box__background", style: style }),
							React.createElement(
								"div",
								{ className: "feature-box__title" },
								React.createElement(
									"div",
									null,
									React.createElement(
										"h1",
										null,
										datum.title
									)
								)
							),
							React.createElement(
								"div",
								{ className: "feature-box__body" },
								React.createElement(
									"div",
									null,
									React.createElement(
										"p",
										null,
										datum.body
									)
								)
							)
						)
					);
				});
			}

			/*
    *
    *
    */
		}, {
			key: "handleClick",
			value: function handleClick() {
				this.setState({ isActive: !this.state.isActive });
			}
		}]);

		return _class4;
	})(React.Component);
})();
(function () {

	ll.Comp.Hero = (function (_React$Component5) {
		_inherits(_class5, _React$Component5);

		function _class5() {
			_classCallCheck(this, _class5);

			_get(Object.getPrototypeOf(_class5.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(_class5, [{
			key: "render",

			/*
    *
    *
    */
			value: function render() {
				return React.createElement(
					"div",
					{ className: "hero" },
					React.createElement(
						"div",
						{ className: "hero__content" },
						React.createElement(
							"div",
							{ className: "hero__logo" },
							React.createElement("img", { src: "public/images/logo-green.svg", alt: "main logo" })
						),
						React.createElement(
							"div",
							{ className: "hero__text" },
							React.createElement(
								"h1",
								null,
								"LiquidLab"
							),
							React.createElement(
								"p",
								null,
								"Better nutrition. Better life."
							),
							React.createElement(
								"p",
								null,
								"Tailored to you."
							),
							React.createElement(
								"div",
								{ className: "button" },
								"Get started"
							)
						)
					)
				);
			}
		}]);

		return _class5;
	})(React.Component);
})();
(function () {

	ll.Comp.Info = (function (_React$Component6) {
		_inherits(_class6, _React$Component6);

		function _class6() {
			_classCallCheck(this, _class6);

			_get(Object.getPrototypeOf(_class6.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(_class6, [{
			key: "render",

			/*
    *
    *
    */
			value: function render() {
				return React.createElement(
					"div",
					{ className: "info" },
					React.createElement(
						"div",
						{ className: "info__content" },
						React.createElement(
							"div",
							{ className: "chat-box" },
							React.createElement(
								"h1",
								null,
								"Here is how:"
							)
						),
						React.createElement(
							"div",
							{ className: "grid" },
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								this.renderFeatureBox(ll.content.info.boxes[0])
							),
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "info__button" },
									React.createElement(
										"div",
										{ className: "big-button", onClick: this.props.navigateToAboutPage },
										"Our story"
									)
								)
							)
						),
						React.createElement(
							"div",
							{ className: "grid" },
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								this.renderFeatureBox(ll.content.info.boxes[1])
							),
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								this.renderFeatureBox(ll.content.info.boxes[2])
							)
						)
					)
				);
			}

			/*
    *
    *
    */
		}, {
			key: "renderFeatureBox",
			value: function renderFeatureBox(data, modifier) {

				var baseCls = 'feature-box feature-box--4-to-3',
				    cls = modifier ? baseCls + " feature-box--" + modifier : baseCls;

				return React.createElement(
					"div",
					{ className: baseCls },
					React.createElement("div", { className: "feature-box__background", style: { 'backgroundImage': "url(public/images/" + data.imageFileName + ")" } }),
					React.createElement(
						"div",
						{ className: "feature-box__title" },
						React.createElement(
							"div",
							null,
							React.createElement(
								"h1",
								null,
								data.title
							)
						)
					),
					React.createElement(
						"div",
						{ className: "feature-box__body" },
						React.createElement(
							"div",
							null,
							React.createElement(
								"p",
								null,
								data.body
							)
						)
					)
				);
			}
		}]);

		return _class6;
	})(React.Component);
})();
(function () {

	ll.Comp.Pitch = (function (_React$Component7) {
		_inherits(_class7, _React$Component7);

		function _class7() {
			_classCallCheck(this, _class7);

			_get(Object.getPrototypeOf(_class7.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(_class7, [{
			key: "render",

			/*
    *
    *
    */
			value: function render() {
				return React.createElement(
					"div",
					{ className: "pitch" },
					React.createElement(
						"div",
						{ className: "pitch__content" },
						React.createElement(
							"div",
							{ className: "grid" },
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"div",
									{ className: "pitch__image" },
									React.createElement("img", { src: "public/images/peaches-600.jpg", alt: "peaches" })
								)
							),
							React.createElement(
								"div",
								{ className: "grid__col grid__col--6-of-12" },
								React.createElement(
									"p",
									null,
									"Feeding your body with whole foods and natural produce is the best long-term strategy for maintaining good health."
								),
								React.createElement(
									"h3",
									null,
									"LiquidLab is part of that strategy."
								),
								React.createElement(
									"p",
									null,
									"Our cold-pressed is packed with easily digestable raw vitamins, minerals and enzymes form locally sourced fresh fruits and vegetables."
								),
								React.createElement(
									"h3",
									null,
									"Reach your full potential through balance, not extremism."
								),
								React.createElement(
									"p",
									null,
									"Whatever your lifestyle, we’ve got a juice that will get you there."
								)
							)
						)
					)
				);
			}
		}]);

		return _class7;
	})(React.Component);
})();
(function () {
	var _ll$Comp = ll.Comp;
	var Header = _ll$Comp.Header;
	var Footer = _ll$Comp.Footer;
	var Hero = _ll$Comp.Hero;
	var Pitch = _ll$Comp.Pitch;
	var ChatBar = _ll$Comp.ChatBar;
	var Info = _ll$Comp.Info;
	var About = _ll$Comp.About;

	var routes = ['home', 'about'];

	ll.Comp.Layout = (function (_React$Component8) {
		_inherits(_class8, _React$Component8);

		/*
   *
   *
   */

		function _class8(props) {
			_classCallCheck(this, _class8);

			_get(Object.getPrototypeOf(_class8.prototype), "constructor", this).call(this, props);
			this.state = {
				scrollTop: null
			};
		}

		/*
   *
   *
   */

		_createClass(_class8, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "wrapper", onScroll: this.handleScroll.bind(this) },
					this.state.scrollTop > 500 || this.state.route !== 'home' ? React.createElement(Header, { activeRoute: this.state.route }) : null,
					this.renderRoutable()
				);
			}

			/*
    *
    *
    */
		}, {
			key: "renderRoutable",
			value: function renderRoutable() {
				if (this.state.route === 'home') {
					return React.createElement(
						"div",
						null,
						React.createElement(Hero, null),
						React.createElement(Pitch, null),
						React.createElement(ChatBar, _extends({}, ll.content.chatBoxes[0], { position: "left" })),
						React.createElement(ChatBar, _extends({}, ll.content.chatBoxes[1], { position: "right" })),
						React.createElement(ChatBar, _extends({}, ll.content.chatBoxes[2], { position: "left" })),
						React.createElement(Info, { navigateToAboutPage: this.navigateToAboutPage.bind(this) }),
						React.createElement(Footer, null)
					);
				}

				return React.createElement(
					"div",
					null,
					React.createElement(About, null)
				);
			}

			/*
    * 
    *
    */
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				var hash = window.location.hash;

				hash = hash.slice(1);
				var newHash = routes.indexOf(hash) > -1 ? hash : routes[0];
				this.setState({ route: newHash });
			}

			/*
    *
    *
    */
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				this.setHash();
			}

			/*
    *
    *
    */
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.setHash();
			}

			/*
    *
    *
    */
		}, {
			key: "setHash",
			value: function setHash() {
				if (window.location.hash !== this.state.route) {
					window.location.hash = this.state.route;
				}
			}

			/*
    *
    *
    */
		}, {
			key: "navigateToAboutPage",
			value: function navigateToAboutPage() {
				this.setState({ route: 'about' });
			}

			/*
    *
    *
    */
		}, {
			key: "handleScroll",
			value: function handleScroll(e) {
				var node = React.findDOMNode(this);
				this.setState({ scrollTop: node.scrollTop });
			}
		}]);

		return _class8;
	})(React.Component);
})();