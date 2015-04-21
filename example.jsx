// Example usage of package

var React = require('react')
		, Pop = require('./react-pop.jsx')

React.render(
  <Pop xOut={"Close"} labelOpen={"FAQ"} labelClose={"FAQ close"} transitions={true}>
  	<div>
			Vestibulum interdum dapibus iaculis. Pellentesque a condimentum erat, non tempus erat. Sed pellentesque, arcu eget tristique facilisis, sapien ligula pharetra tellus, at malesuada nisl diam nec purus. Morbi aliquam ante erat, nec hendrerit enim malesuada vel. Sed in lorem quis enim aliquam consectetur eu nec leo. Nulla facilisi. Aenean malesuada risus sed tortor aliquam maximus.
		</div>
  </Pop>,
  document.getElementById("react-pop-anchor")
);