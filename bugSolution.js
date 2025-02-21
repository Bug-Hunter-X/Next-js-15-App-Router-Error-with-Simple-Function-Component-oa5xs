```javascript
// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>Hello world! {count}</div>
  );
}
```