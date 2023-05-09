import { UserProvider } from './AppContext';
import Wrap from './index';

export default function App() {
  return (
    <>
      <UserProvider>
        <Wrap />
      </UserProvider>
    </>
  );
}
