import * as React from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'gatsby';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header className="py-8 relative w-full">
            <div className="container mx-auto px-5 flex items-center justify-between">
                <div>
                    <Link to="/" className="text-xl font-bold text-black">
                        BlogFacilito
                    </Link>
                </div>
                <div>
                    {/**Mobile menu */}
                    <div className="lg:hidden">
                        <button type="button" onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <Transition
                            show={isOpen}
                            enter="transition-opacity duration-75"
                            enterFrom="opacity-0 invisible "
                            enterTo="opacitiy-100 visible"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacitiy-100 visible"
                            leaveTo="opacity-0 invisible"
                            className="bg-black inset-0 bg-opacity-20 fixed backdrop-filter backdrop-blur-sm z-10"
                            onClick={()=> setIsOpen(false)}
                        ></Transition>
                        <Transition
                            show={isOpen}
                            enter="transition-transform transform duration-150"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition-transform transform duration-150"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                            className=" min-h-screen absolute right-0 top-0 w-80  bg-white z-20"
                        >
                            <div className="p-8">
                                <ul className=" space-y-8 text-center">
                                    <li>
                                        <Link to="/" >Inicio</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" >Blog</Link>
                                    </li>
                                    <li>
                                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                                            <svg className="mx-auto" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z" fill="#454444" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <svg className="mx-auto" width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.162 2.65599C20.3986 2.99368 19.589 3.21546 18.76 3.31399C19.6337 2.79142 20.2877 1.969 20.6 0.999988C19.78 1.48799 18.881 1.82999 17.944 2.01499C17.3146 1.34157 16.4804 0.894951 15.5709 0.744572C14.6615 0.594194 13.7279 0.748479 12.9153 1.18344C12.1026 1.6184 11.4564 2.30967 11.0771 3.14978C10.6978 3.98989 10.6067 4.93177 10.818 5.82899C9.1551 5.74564 7.52832 5.31351 6.04328 4.56065C4.55823 3.80779 3.24812 2.75104 2.19799 1.45899C1.82628 2.09744 1.63095 2.82321 1.63199 3.56199C1.63199 5.01199 2.36999 6.29299 3.49199 7.04299C2.828 7.02208 2.17862 6.84277 1.59799 6.51999V6.57199C1.59819 7.53769 1.93236 8.4736 2.54384 9.22105C3.15532 9.96849 4.00647 10.4815 4.95299 10.673C4.33661 10.84 3.6903 10.8646 3.06299 10.745C3.32986 11.5762 3.85 12.3032 4.55058 12.8241C5.25117 13.345 6.09712 13.6338 6.96999 13.65C6.10247 14.3313 5.10917 14.835 4.04687 15.1322C2.98458 15.4293 1.87412 15.5142 0.778992 15.382C2.69069 16.6114 4.91609 17.2641 7.18899 17.262C14.882 17.262 19.089 10.889 19.089 5.36199C19.089 5.18199 19.084 4.99999 19.076 4.82199C19.8949 4.23016 20.6016 3.49701 21.163 2.65699L21.162 2.65599Z" fill="#454444" />
                                            </svg>
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </Transition>

                    </div>
                    {/*Desktop Menu */}
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link to="/" >Inicio</Link>
                        </li>
                        <li>
                            <Link to="/blog" >Blog</Link>
                        </li>
                        <li>
                            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z" fill="#454444" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                                <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.162 2.65599C20.3986 2.99368 19.589 3.21546 18.76 3.31399C19.6337 2.79142 20.2877 1.969 20.6 0.999988C19.78 1.48799 18.881 1.82999 17.944 2.01499C17.3146 1.34157 16.4804 0.894951 15.5709 0.744572C14.6615 0.594194 13.7279 0.748479 12.9153 1.18344C12.1026 1.6184 11.4564 2.30967 11.0771 3.14978C10.6978 3.98989 10.6067 4.93177 10.818 5.82899C9.1551 5.74564 7.52832 5.31351 6.04328 4.56065C4.55823 3.80779 3.24812 2.75104 2.19799 1.45899C1.82628 2.09744 1.63095 2.82321 1.63199 3.56199C1.63199 5.01199 2.36999 6.29299 3.49199 7.04299C2.828 7.02208 2.17862 6.84277 1.59799 6.51999V6.57199C1.59819 7.53769 1.93236 8.4736 2.54384 9.22105C3.15532 9.96849 4.00647 10.4815 4.95299 10.673C4.33661 10.84 3.6903 10.8646 3.06299 10.745C3.32986 11.5762 3.85 12.3032 4.55058 12.8241C5.25117 13.345 6.09712 13.6338 6.96999 13.65C6.10247 14.3313 5.10917 14.835 4.04687 15.1322C2.98458 15.4293 1.87412 15.5142 0.778992 15.382C2.69069 16.6114 4.91609 17.2641 7.18899 17.262C14.882 17.262 19.089 10.889 19.089 5.36199C19.089 5.18199 19.084 4.99999 19.076 4.82199C19.8949 4.23016 20.6016 3.49701 21.163 2.65699L21.162 2.65599Z" fill="#454444" />
                                </svg>
                            </a>
                        </li>

                    </ul>
                </div>

            </div>

        </header>
    )
}

export default Header;