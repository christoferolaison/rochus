import splitStyleProps from '.'

test('should return an empty props object and a sx object containing display key', () => {
  expect(splitStyleProps({ display: 'flex' })).toMatchSnapshot()
})

test('should return an props object containing onClick and a sx object containing alignItems key', () => {
  expect(splitStyleProps({ alignItems: 'center', onClick: () => {} })).toMatchSnapshot()
})
