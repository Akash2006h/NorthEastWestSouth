import { Provider } from 'react-redux';
import Body from "../src/components/Body.jsx";
import appStore from "./utils/appstore.jsx";
import Browse from "./components/Browse.jsx"
function App() {

  return (
    <Provider store = {appStore}>
      <Body />
      <Browse />
    </Provider>
  )
}

export default App
