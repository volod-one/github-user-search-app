import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <div
          className="w-6 h-6 bg-blue-900"
          onClick={() => {
            setTheme('light')
          }}
        ></div>
      )
    } else {
      return (
        <div
          className="w-6 h-6 bg-red-900"
          onClick={() => {
            setTheme('dark')
          }}
        ></div>
      )
    }
  }
  return (
    <div>
      <Head>
        <title>GitHub User Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-space">{renderThemeChanger()}</main>
    </div>
  )
}

export default Home
