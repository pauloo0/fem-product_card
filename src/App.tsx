import CartIcon from './assets/images/icon-cart.svg'
import MobileImage from './assets/images/image-product-mobile.jpg'
import DesktopImage from './assets/images/image-product-desktop.jpg'

function App() {
  return (
    <div className='bg-cream min-h-screen w-screen grid place-items-center'>
      <main
        id='card'
        className='grid grid-cols-1 sm:grid-cols-2 rounded-lg bg-white w-[375px] sm:w-[550px]'
      >
        <div id='image' className=''>
          <img
            src={DesktopImage}
            alt='Desktop Image'
            className='hidden sm:block sm:rounded-l-lg w:full'
          />
          <img
            src={MobileImage}
            alt='Mobile Image'
            className='block sm:hidden rounded-t-lg'
          />
        </div>

        <div
          id='content'
          className='font-montserrat font-medium m-6 text-very-dark-blue'
        >
          <div id='header'>
            <h2 className='uppercase tracking-[7px] text-dark-grayish-blue text-xs mb-3'>
              perfume
            </h2>
            <h1 className='font-fraunces text-3xl'>
              Gabrielle Essence Eau De Parfum
            </h1>
          </div>

          <p className='text-dark-grayish-blue text-sm my-5'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div id='price' className='my-5 flex justify-start items-center'>
            <h1 className='font-fraunces text-3xl text-dark-cyan mr-4'>
              $149.99
            </h1>
            <h3
              id='before-discount'
              className='text-dark-grayish-blue line-through text-sm'
            >
              $169.99
            </h3>
          </div>

          <button
            type='button'
            className='w-full rounded-lg bg-dark-cyan hover:bg-very-dark-blue flex items-center justify-center text-white py-3'
          >
            <img src={CartIcon} alt='Cart Icon' className='mr-3' />
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
