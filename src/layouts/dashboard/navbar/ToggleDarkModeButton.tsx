import { useEffect, useState } from 'react'
import { Button } from 'flowbite-react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ToggleDarkModeButton = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    const newIsDark = !isDark

    if (newIsDark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    setIsDark(newIsDark)
  }

  return (
      <Button
          color="light"
          onClick={toggleDarkMode}
      >
        {isDark ? <FaMoon/> : <FaSun/>}
      </Button>
  )
}

export default ToggleDarkModeButton