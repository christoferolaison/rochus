import rochus from '.'

test('return hello world', () => {
	expect(rochus({ display: 'flex' })).toEqual({ sx: { display: 'flex' }, props: {} })
})
