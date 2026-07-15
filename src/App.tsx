import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ fontFamily: 'var(--font-body-family)' }}>
      <Nav />
      <Hero />
      <Features />
      <Stats />
      <CTABanner />
      <Footer />
    </div>
  )
}
