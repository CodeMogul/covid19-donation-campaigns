import React, { useState } from 'react';
import './App.css';
import CampaignList from './components/CampaignList';
import Filter from './components/Filter';
import { HeartFilled } from '@ant-design/icons';

import listData from './campaigns.json';

const categoriesSet = new Set(['All']);
const organiserTypes = ['All', 'Organisation', 'NGO', 'Individual', 'Goverment', 'Non-Profit Organisation'];

listData.forEach(item => {
  item.category.split(', ').forEach(category => categoriesSet.add(category));
})

function Header(props) {
  return (
    <img src="/images/COVID-19_banner_with_text.png" className="banner" alt="banner" />
  )
}

function Footer(props) {
  return (
    <div className="app-header-footer-common app-footer">
      <p>Made with <HeartFilled style={{ color: 'red' }} /></p>
      <p>Under no circumstances, are we affiliated to any of the above listed organisation or campaigns. And try to maintain the latest available information updates on our own.</p>
      <p style={{ marginBottom: 0 }}>
        If you face any issues, want to report any campaigns, report a change of info or would like to add your campaigns to the list
        {" "}
        <a target="_blank" id="contact-us" rel="noopener noreferrer" href="https://forms.gle/sqiGGVRta3GJv9fE9">write to us.</a>
      </p>
    </div>
  )
}

function App() {
  const [category, setCategory] = useState('All');
  const [organiser, setOrganiser] = useState('All');

  const listItems = category === 'All' && organiser === 'All'
    ? listData
    : listData.filter(item => {
      let hasCategory = true, hasOrganiser = true;
      const item_categories = item.category.split(', ');

      if(category !== 'All') hasCategory = item_categories.some(cat => cat === category);
      if(organiser !== 'All')  hasOrganiser = item.initiator.type === organiser;
      return hasCategory && hasOrganiser;
    })

  return (
    <div className="App">
      <Header />
      <main className="content" id="main-content">
        <Filter
          categories={[...categoriesSet]}
          organiserTypes={organiserTypes}
          setOrganisers={setOrganiser}
          setCategories={setCategory}
        />
        <CampaignList listData={listItems} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
