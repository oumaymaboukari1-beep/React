import Header from './componenets/Header'
import Cards from './componenets/Cards'
import Footer from './componenets/Footer'

function App() {
const products = [
  {
    id: 1,
    product: 'Laptop',
    price: 2500,
  },
  {
    id: 2,
    product: 'Headphones',
    price: 150,
  },
  {
    id: 3,
    product: 'Keyboard',
    price: 90,
  },
]
  return (
    <>
     <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <Cards
            key={item.id}
            product={item.product}
            price={item.price}
          />
        ))}
      </div>
    </main>
    <Footer />
  </div>
    </>
  )
}

export default App
