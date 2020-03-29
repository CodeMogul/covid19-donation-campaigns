import React from 'react';
import './App.css';
import CampaignList from './CampaignList';
import { HeartFilled } from '@ant-design/icons';

function Header(props) {
  return (
    <header className="app-header-footer-common app-header">
      Covid-19 Donation Campaigns
    </header>
  )
}

function Footer(props) {
  return (
    <div className="app-header-footer-common app-footer">
      <p>Made with <HeartFilled style={{ color: 'red' }} /> by <a href="https://github.com/codemogul">Siddhesh Nachane</a></p>
      <p>We are under no circumstances affiliated to any of the above listed organisation or campaigns. And try to maintain the latest available information updates on our own.</p>
      <p>If you would like to add your campaigns to the list, or report any of the above campaigns, or report a change of info, <a href="mailto:siddesh.nachane@outlook.com">write to us.</a></p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <CampaignList />
      <Footer />
    </div>
  );
}

export default App;
