import fractionateStyleProps from '.'

test('fractionateStyleProps should return an empty props object and a sx object containing display key', () => {
  expect(fractionateStyleProps({ display: 'flex' })).toMatchSnapshot()
})

test('fractionateStyleProps should return an props object containing onClick and a sx object containing alignItems key', () => {
  expect(fractionateStyleProps({ alignItems: 'center', onClick: () => {} })).toMatchSnapshot()
})
