import CartIcon from './assets/images/icon-cart.svg'
import MobileImage from './assets/images/image-product-mobile.jpg'
import DesktopImage from './assets/images/image-product-desktop.jpg'

function App() {
  return (
    <div className='bg-cream h-screen flex items-center justify-center'>
      <div id='card' className='w-[375px] bg-white rounded-lg'>
        <img
          src={DesktopImage}
          alt='Desktop Image'
          className='rounded-t-lg hidden sm:block'
        />
        <img
          src={MobileImage}
          alt='Mobile Image'
          className='rounded-t-lg block sm:hidden'
        />

        <div
          id='content'
          className='font-montserrat font-medium m-4 text-very-dark-blue'
        >
          <div id='header'>
            <h2 className='uppercase tracking-[7px] text-dark-grayish-blue text-sm mb-2'>
              Perfume
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
      </div>
    </div>
  )
}

export default App
