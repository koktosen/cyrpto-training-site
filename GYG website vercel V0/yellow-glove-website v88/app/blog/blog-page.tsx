import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <div>
      <Header currentPath="/blog" />
      <h1>Blog Page</h1>
      <p>This is the blog page content.</p>
      <Footer />
    </div>
  )
}
