export default ({
	display,
	flex,
	alignItems,
	...props,
}) => ({
	sx: {
		display,
		flex,
		alignItems,
	},
	props,
});
