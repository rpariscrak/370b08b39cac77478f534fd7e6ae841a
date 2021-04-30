import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import css from './Layout.module.scss'
import Head from "next/head";

const defaultMeta = {
  title: "POC Themed UI",
  description: "POC dynamic themed UI"
}

const Layout = ({ children, currentPage, meta = defaultMeta }) => {
  const [activeTheme, setActiveTheme] = useState('white')
  
  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    setActiveTheme(theme ?? 'default')
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  return (
    <div className={`${css.layout} theme--${activeTheme}`}>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description"
              content={meta.description}/>
      </Head>
      
      <Header currentPage={currentPage} setActiveTheme={setActiveTheme}/>
      <main >
        {children}
      </main>
     <Footer/>
    </div>
  )
}
export default Layout