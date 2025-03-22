import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommened from './Recommened'
import News from './News'
import Footer from '../components/Footer'

 function Home() {
  return (
    <div>
        <Banner/>
        <TopSellers/>
        <Recommened/>
        <News/>
        <Footer/>
    </div>
  )
}
export default Home