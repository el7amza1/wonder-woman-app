import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ContactUs from '../components/contactUs'
import Internships from '../components/internships'
import Jobs from '../components/jobs'
import Services from '../components/services'
import Slider from '../components/slider'
import Team from '../components/team'
import styles from '../styles/Home.module.css'
import client from '../client'


const Home: NextPage = () => {
  return (
  <div>
    <Slider/>
    <Services/>
    <Team/>
    <Internships/>
    <Jobs/>
    <ContactUs/>
  </div>
  )
}

export default Home
