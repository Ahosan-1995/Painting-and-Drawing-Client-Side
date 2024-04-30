import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-950 text-neutral-content flex flex-col">
                <div className='flex flex-row items-center content-center  justify-stretch'>
                    <div>
                    <img className='mr-20' src="/logo-white.png" alt="" />
                    </div>
                    <div className='md:flex justify-evenly gap-x-20'>
                        <nav className='flex flex-col gap-2'>
                            <h6 className="footer-title">Services</h6> 
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Web hosting</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav> 
                        <nav className='flex flex-col gap-2'>
                            <h6 className="footer-title">Company</h6> 
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav> 
                        <nav className='flex flex-col gap-2'>
                            <h6 className="footer-title">Social</h6> 
                            <a className="link link-hover">Facebook</a>
                            <a className="link link-hover">Twitter</a>
                            <a className="link link-hover">Instagram</a>
                        </nav>
                    </div>
                    
                </div>
                <p>@All copyrights Reserve to Batpta</p>
        </footer>
    );
};

export default Footer;