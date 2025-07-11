import footerImg from '../../assets/imgage/logo-footer.png'

const Footer = () => {
    return (
        <div className='bg-black'>
            <img className='text-center items-center mx-auto pt-12' src={footerImg} alt="" />


            <div className='text-white grid grid-cols-3 gap-4 pl-10 pt-14'>
                <div className="">
                 <h1 className='text-2xl font-semibold'>About Us</h1>
                 <p>
                   We are a passionate team dedicated to providing the best services to our customers.
                 </p>
                </div>
                <div className="">
                <h1 className='text-2xl font-semibold'>Quick Links</h1>
                
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
    
                
                </div>
                <div >
                    <h1 className="text-2xl font-semibold">Subscribe</h1>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <search>email</search>
                </div>
            </div>


        </div>
    );
};

export default Footer;