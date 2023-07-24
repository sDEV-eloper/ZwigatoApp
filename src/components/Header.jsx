import logo from './utils/logo.png'
const Header = () => {
  return (
    <>
    <div className='container flex justify-between px-8 py-2 border border-gray-400 bg-[#fa5d49]'>
        <div >
            <img src={logo} alt="" className='h-16 rounded-lg' />
        </div>
        <div className="flex items-center">
            <ul className='flex gap-8 items-center text-white font-medium cursor-pointer'>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header