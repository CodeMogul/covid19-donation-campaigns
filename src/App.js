import React, { useState } from 'react';
import './App.css';
import CampaignList from './components/CampaignList';
import Filter from './components/Filter';
import { HeartFilled } from '@ant-design/icons';

import listData from './campaigns.json';

const categoriesSet = new Set();
const organiserTypes = ['Organisation' ,'NGO' , 'Individual', 'Goverment', 'Non-Profit Organisation'];

listData.forEach(item => {
  item.category.split(', ').forEach(category => categoriesSet.add(category));
})

function Header(props) {
  return (
    <img src="/COVID-19_banner_with_text.png" className="banner" alt="banner" />
  )
}

function Footer(props) {
  return (
    <div className="app-header-footer-common app-footer">
      <p>Made with <HeartFilled style={{ color: 'red' }} /></p>
      <p>We are under no circumstances affiliated to any of the above listed organisation or campaigns. And try to maintain the latest available information updates on our own.</p>
      <p style={{ marginBottom: 0 }}>
        If you face any issues, want to report any campaigns, report a change of info or would like to add your campaigns to the list
        {" "}
        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/sqiGGVRta3GJv9fE9">write to us.</a>
      </p>
    </div>
  )
}

function App() {
  const [categories, setCategories ] = useState([]);
  const [organisers, setOrganisers ] = useState([]);

  const listItems = listData.filter(item => {
    let hasCategory = true, hasOrganiser  = true;
    const item_categories = item.category.split(', ');

    if(categories.length) hasCategory = item_categories.some(cat => categories.includes(cat));
    if(organisers.length) hasOrganiser = organisers.includes(item.initiator.type);
    return hasCategory && hasOrganiser;
  })

  return (
    <div className="App">
      <Header />
      <main className="content" id="main-content">
        <Filter
          categories={[...categoriesSet]}
          organiserTypes={organiserTypes}
          setOrganisers={setOrganisers}
          setCategories={setCategories}
          />
        <CampaignList listData={listItems}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
