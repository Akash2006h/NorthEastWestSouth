import { Provider } from 'react-redux';
import Body from "../src/components/Body.jsx";
import appStore from "./utils/appstore.jsx";
function App() {

  return (
    <Provider store = {appStore}>
      <Body />
    </Provider>
  )
}

export default App
