import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const { locale, locales } = router
  const switchLocale = locale === 'ar' ? 'en' : 'ar'
  const switchLabel = locale === 'ar' ? 'English' : 'العربية'

  return (
    <header style={{display: 'flex', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid #eee'}}>
      <nav>
        <Link href='/' locale={locale}>Home</Link>
        {'  '}
        <Link href='/about' locale={locale}>About</Link>
      </nav>
      <div>
        <Link href='/' locale={switchLocale}>
          <a>{switchLabel}</a>
        </Link>
      </div>
    </header>
  )
}
