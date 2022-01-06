import type { NavItem } from "$lib/interfaces/interfaces";
import { writable } from "svelte/store";

const contents : NavItem[] = [
    {
        title: 'ABOUT',
        href: '/'
    },
    {
        title: 'SERVICES',
        href: '#services'
    },
    {
        title: 'CONTACT',
        href: '#contact-form'
    }
]

const NavItems = writable(contents)

export default NavItems