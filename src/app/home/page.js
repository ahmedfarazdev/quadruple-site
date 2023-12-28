import styles from './page.module.css'
// import Header from '../../../components/header/Header'
import Aboutus from '../../../components/aboutus/Aboutus'
import Projects from '../../../components/projects/Projects'
import Services from '../../../components/services/Services'
import Hero from "../../../components/hero/Hero"
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Aboutus />
    </>
  )
}
