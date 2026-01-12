import { atom, useAtom } from 'jotai'

const navbarTitle = atom('Vendetta')

const useNavbarTitle = () => {
  const [title, setTitle] = useAtom(navbarTitle)

  return {
    title,
    setTitle,
  }
}

export default useNavbarTitle