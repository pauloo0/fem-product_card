import CartIcon from './assets/images/icon-cart.svg'
import MobileImage from './assets/images/image-product-mobile.jpg'
import DesktopImage from './assets/images/image-product-desktop.jpg'

function App() {
  return (
    <div className='bg-cream h-screen w-screen grid place-items-center'>
      <main
        id='card'
        className='sm:w-1/2 sm:h-[375px] rounded-lg bg-white flex flex-row justify-center items-center'
      >
        <div id='image' className='sm:w-1/2'>
          <img
            src={DesktopImage}
            alt='Desktop Image'
            className='hidden sm:block sm:rounded-l-lg sm:w-full'
          />
          <img
            src={MobileImage}
            alt='Mobile Image'
            className='block sm:hidden'
          />
        </div>

        <div
          id='content'
          className='sm:w-1/2 font-montserrat font-medium m-4 sm:m-8 text-very-dark-blue'
        >
          <div id='header'>
            <h2 className='uppercase tracking-[7px] text-dark-grayish-blue text-sm mb-2'>
              perfume
            </h2>
            <h1 className='font-fraunces text-3xl'>
              Gabrielle Essence Eau De Parfum
            </h1>
          </div>

          <p className='text-dark-grayish-blue text-sm my-4'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div id='price' className='my-4 flex justify-start items-center'>
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
