import Header from "./widgets/layout/Header.tsx"
import Footer from "./widgets/layout/Footer.tsx"
import PostsManagerPage from "./pages/PostsManagerPage.tsx"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <PostsManagerPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
