import CartIcon from './assets/images/icon-cart.svg'

function App() {
  return (
    <div className='bg-cream h-screen'>
      <div id='card'>
        <div id='image'>
          <img
            src='./assets/images/image-product-mobile.jpg'
            alt='Mobile Image'
          />
        </div>

        <div id='content'>
          <div id='header'>
            <h2>Perfume</h2>
            <h1>Gabrielle Essence Eau De Parfum</h1>
          </div>

          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div id='price'>
            <h1>$149.99</h1>
            <h3 id='before-discount'>$169.99</h3>
          </div>

          <button type='button'>
            <img src={CartIcon} alt='Cart Icon' />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
