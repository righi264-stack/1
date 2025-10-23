import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{padding: '20px'}}>
        <h1>Vanelli School of Languages</h1>
        <p>Primary language Arabic switch to English available</p>
        <p>Sample page ready for Vercel deploy</p>
      </main>
      <Footer />
    </div>
  )
}
