import React, { useState } from 'react';
import './App.css';
import CampaignList from './components/CampaignList';
import Filter from './components/Filter';
import { HeartFilled } from '@ant-design/icons';

import listData from './campaigns.json';

const categoriesSet = new Set();
const locationsSet = new Set();
const organiserTypes = ['Organisation' ,'NGO' , 'Individual', 'Goverment', 'Non-Profit Organisation'];

listData.forEach(item => {
  item.category.split(', ').forEach(category => categoriesSet.add(category));
  locationsSet.add(item.location);
})

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
      <p style={{ marginBottom: 0 }}>If you would like to add your campaigns to the list, or report any of the above campaigns, or report a change of info, <a href="mailto:siddesh.nachane@outlook.com">write to us.</a></p>
    </div>
  )
}

function App() {
  const [categories, setCategories ] = useState([]);
  const [organisers, setOrganisers ] = useState([]);
  const [locations, setLocations ] = useState([]);

  const listItems = listData.filter(item => {
    let hasCategory = true, hasOrganiser  = true, hasLocation = true;
    const item_categories = item.category.split(', ');

    if(categories.length) hasCategory = item_categories.some(cat => categories.includes(cat));
    if(organisers.length) hasOrganiser = organisers.includes(item.initiator.type);
    if(locations.length) hasLocation = locations.includes(item.location);
    return hasCategory && hasOrganiser && hasLocation;
  })

  return (
    <div className="App">
      <Header />
      <main className="content">
        <Filter
          categories={[...categoriesSet]}
          organiserTypes={organiserTypes}
          locations={[...locationsSet]}
          setLocations={setLocations}
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
