import "./App.css";
import Messengers from "./components/Messengers";
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";
import TemplateProvider from "./theme/TemplateProvider";

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messengers />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}
export default App;
