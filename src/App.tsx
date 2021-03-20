import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import { WatchmeProvider } from './components/WatchmeContext';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <WatchmeProvider>
        <SideBar/>
        <Content/>
      </WatchmeProvider>
    </div>
  )
}