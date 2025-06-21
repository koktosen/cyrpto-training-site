// New quote route file that imports the renamed component
import QuoteFormPage from "./quote-form-page"

export const metadata = {
  title: "Get Free Cleaning Quote | Yellow Glove Cleaning San Diego",
  description:
    "Get your free cleaning estimate for luxury home cleaning services in San Diego. Quick online quote for residential, commercial, and specialty cleaning services.",
  keywords: "free cleaning quote San Diego, cleaning estimate, house cleaning quote, luxury cleaning services quote",
}

export default function QuotePage() {
  return <QuoteFormPage />
}
