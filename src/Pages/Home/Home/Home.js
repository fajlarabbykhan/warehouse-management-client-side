import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items'
import PageTitle from '../../Shared/PageTitel/PageTitle';
const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Items></Items>


        </div>
    );
};

export default Home;