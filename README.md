# Example

```
npm i rochus
```

```javascript
import { fractionateStyleProps } from 'rochus'
const props = fractionateStyleProps({ display: 'flex', onClick: () => {} })
console.log(props)
// { sx: { display: flex }, props: { onClick: () => {} } }
```
