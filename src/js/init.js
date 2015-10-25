var ll = {};

ll.start = () => {
	var Cmp = ll.Comp.Layout;
	console.log(React.renderToString(<Cmp />));
	React.render(<Cmp />, document.getElementById('site'));
};