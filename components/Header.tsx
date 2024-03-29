import { useState } from 'react';
import { HeaderData } from '../interfaces/interfaces';

interface Props extends HeaderData {
    atTop: boolean;
}

const Header = (props: Props) => {
    const textColour = props.atTop ? 'text-white' : 'text-gray-800';

    const title = props.title;

    const links = props.links.map((link) => (
        <li className="mr-3" key={link.text}>
            <a
                className={`inline-block ${textColour} no-underline hover:text-gray-800 hover:text-underline py-2 px-4`}
                href={link.url}
            >
                {link.text}
            </a>
        </li>
    ));

    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const changeMenuVisibility = () => {
        setMenuVisible((menuVisible) => !menuVisible);
    };

    const navContentBaseClassName =
        'w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20';
    const navContentClassName = `${navContentBaseClassName}${!menuVisible ? ' hidden' : ''}${
        +props.atTop ? ' bg-white' : ''
    }${menuVisible && props.atTop ? ' shadow' : ''}`;

    const headerBaseClassName = 'fixed w-full z-30 top-0 text-white';
    const headerClassName = `${headerBaseClassName}${props.atTop ? '' : ' bg-white shadow'}`;

    // const navActionBaseClassName =
    //     'mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out';
    // const navActionAtTopClassName = 'bg-white text-gray-800';
    // const navActionNotAtTopClassName = 'gradient text-white';
    //
    // const navActionClassName = `${navActionBaseClassName}${
    //     props.atTop ? navActionAtTopClassName : navActionNotAtTopClassName
    // }`;

    return (
        <nav id="header" className={headerClassName}>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <a
                        className={`${textColour} no-underline hover:no-underline font-bold text-2xl lg:text-4xl`}
                        href="#"
                    >
                        {title}
                    </a>
                </div>
                <div className="block lg:hidden pr-4">
                    <button
                        id="nav-toggle"
                        className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        onClick={() => changeMenuVisibility()}
                    >
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={navContentClassName} id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        {links}
                        {/*<li className="mr-3">*/}
                        {/*    <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">*/}
                        {/*        Active*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li className="mr-3">*/}
                        {/*    <a*/}
                        {/*        className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"*/}
                        {/*        href="#"*/}
                        {/*    >*/}
                        {/*        link*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li className="mr-3">*/}
                        {/*    <a*/}
                        {/*        className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"*/}
                        {/*        href="#"*/}
                        {/*    >*/}
                        {/*        link*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                    {/*<button id="navAction" className={navActionClassName}>*/}
                    {/*    Action*/}
                    {/*</button>*/}
                </div>
            </div>
            {/*<hr className="border-b border-gray-100 opacity-25 my-0 py-0" />*/}
        </nav>
    );
};

export default Header;
