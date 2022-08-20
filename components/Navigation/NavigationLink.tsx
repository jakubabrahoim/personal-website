import Link from "next/link";
import { useRouter } from "next/router";

import { IconType } from "react-icons/lib";
import { IconContext } from "react-icons";

interface Props {
    href: string;
    icon: JSX.Element;
    caption: string;
}

const NavigationLink = (props: Props) => {
    const { pathname } = useRouter();
    const isRouteActive = pathname === props.href;

    return (
        <Link href={props.href}>
            <a className={
                `mx-2 rounded-lg px-2 py-1 text-lg font-medium transition hover:bg-stone-200
                ${isRouteActive && 'underline decoration-gray-400 underline-offset-4'}`
            }>
                <span className='flex items-center'>
                    <IconContext.Provider value={{ className: 'w-5 h-5 mr-1.5' }}>
                        {props.icon}
                    </IconContext.Provider>
                    {props.caption}
                </span>
            </a>
        </Link>
    )
}

export default NavigationLink;