import * as React from 'react';
import {createReminder} from './createReminder'

const App = () => {
  const [val, setVal] = React.useState('')
  return (
  <div>
    <input type="text" value={val} onChange={e => setVal(e.target.value)} />
    <button onClick={() => createReminder(val) } />
  </div>)
}

export default App;
