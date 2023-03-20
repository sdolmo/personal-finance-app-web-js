import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Distribution from './components/Distribution'
import Spending from './components/Spending'
import YearMonthSelector from './components/YearMonthSelector'
import MenuList from './components/MenuList'
import { BasicTable } from './components/BasicTable'
import SimplePlaidLink from './components/Link'

function App () {
  const [menuView, setMenuView] = useState(false)

  function toggleMenu () {
    setMenuView(!menuView)
  }

  return (
    <>
      <Nav onMenuClick={toggleMenu} heading="Accounts"/>
      { menuView ? <MenuList /> : null}
      <main>
        <SimplePlaidLink />
        <YearMonthSelector />
        <Distribution />
        <Spending />
        <BasicTable />
      </main>
    </>
  )
}

export default App
