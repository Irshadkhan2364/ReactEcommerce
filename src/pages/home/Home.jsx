import React from 'react'
import Category from '../../components/category/Category'
import Contact from '../../components/contact/Contact'
import FeatureProdcts from '../../components/feartreprodct/FeatureProdct'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div>
      <Slider />
      <FeatureProdcts type="Featured"/>
      <Category />
      <FeatureProdcts type="Top"/>
      <Contact />
    </div>
  )
}

export default Home
