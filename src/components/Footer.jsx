import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">About us</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Team</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Swiggy Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Help & Support</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Partner with us</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Ride with us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Legal</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Refund & Cancellation</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Cookie Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow us</h4>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto text-center mt-8">
                <p className="text-sm">&copy; 2024 Swiggy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
