import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Campaigns, CreateCampaign, Donorcampaigns, ViewCampaign } from '../pages/adminpages/campaigns';
import { Members, CreateMember } from '../pages/adminpages/members';
import { CreateRewardcategory, Rewardcategories } from '../pages/adminpages/rewardcategories';

import { default as Adminhomepage } from '../pages/adminpages/Homepage';
import Adminlayout from './adminlayout/Adminlayout';
import Layout from './layout/Layout';
import Homepage from 'src/pages/publicpages/Homepage';
import About from 'src/pages/publicpages/About';
import Contact from 'src/pages/publicpages/Contact';
import Campaign from 'src/pages/publicpages/Campaign';
import Campaignspub from 'src/pages/publicpages/Campaigns';
import Checkout from 'src/pages/adminpages/payment/Checkout';
import SuccessPage from 'src/pages/adminpages/payment/Success';
import { Donationlistdonor } from 'src/pages/adminpages/Donationrecords/Donationlistdonor';

function Template() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Homepage />} />
					<Route path='/home' element={<Homepage />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/campaign/:campaignID' element={<Campaign />} />
					<Route path='/campaigns' element={<Campaignspub />} />
				</Route>
				<Route path='admin/' element={<Adminlayout />}>
					<Route path='checkout/:campaignID/:rewardcategoryID/:total' element={<Checkout />} />
					<Route path='donorcampaigns' element={<Donationlistdonor />} />
					<Route path='donationComplete' element={<SuccessPage />} />
					<Route path='homepage' element={<Adminhomepage />} />
					<Route path='campaigns' element={<Campaigns />} />
					<Route path='createmember/:campaignID' element={<CreateMember />} />
					<Route path='createcampaign' element={<CreateCampaign />} />
					<Route path='viewcampaign/:campaignID' element={<ViewCampaign />} />
					<Route path='rewardcategories' element={<Rewardcategories />} />
					<Route path='createrewardcategory/:campaignID' element={<CreateRewardcategory />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Template;
