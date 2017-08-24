#Example

```
npm i rochus
```

```javascript
import rochus from 'rochus'
	const splittedProps = rochus({ display: 'flex', onClick: () => {} })
	console.log(splittedProps)
	// { sx: { display: flex }, props: { onClick: () => {} } }
```
