import { Layout, Typography } from 'antd';
import Header from './components/Header';
import NotificationsSection from './components/NotificationsSection';
import { DICTIONARY } from './utils/strings';
import './App.style.css';

const { Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const { WELCOME_MESSAGE, APP_DESCRIPTION } = DICTIONARY

  return (
    <Layout className='app'>
      <Header />

      <Content className='content-app'>
        <div className='container'>
          <Title level={3}>{WELCOME_MESSAGE}</Title>
          <Text type='secondary'>{APP_DESCRIPTION}</Text>

          <NotificationsSection />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
