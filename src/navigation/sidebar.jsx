import IDocument from "../assets/document.svg"

export default [
    {
        id: 1,
        section: "Account",
        navigation: [
            {
                id: 1,
                path: 'profile',
                icon:  (color) => <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25 26.75C6.25 21.9175 10.1675 18 15 18C19.8325 18 23.75 21.9175 23.75 26.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 14.25C17.7614 14.25 20 12.0114 20 9.25C20 6.48858 17.7614 4.25 15 4.25C12.2386 4.25 10 6.48858 10 9.25C10 12.0114 12.2386 14.25 15 14.25Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>,
                title: "My Profile"
            },
            {
                id: 2,
                path: 'wallets',
                title: "Wallets",
                icon:  (color) => <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 6.75H5C4.30964 6.75 3.75 7.30964 3.75 8V23C3.75 23.6904 4.30964 24.25 5 24.25H25C25.6904 24.25 26.25 23.6904 26.25 23V8C26.25 7.30964 25.6904 6.75 25 6.75Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.75 19.25H13.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.75 14.25H26.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.75 11.75H26.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>,
            },
            {
                id: 3,
                path: 'kyc',
                title: "Kyc Registration",
                icon:  (color) => <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 16.75C12.6307 16.75 13.75 15.6307 13.75 14.25C13.75 12.8693 12.6307 11.75 11.25 11.75C9.86929 11.75 8.75 12.8693 8.75 14.25C8.75 15.6307 9.86929 16.75 11.25 16.75Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 8H5C4.30964 8 3.75 8.55964 3.75 9.25V21.75C3.75 22.4404 4.30964 23 5 23H25C25.6904 23 26.25 22.4404 26.25 21.75V9.25C26.25 8.55964 25.6904 8 25 8Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 23C7.5 21.6193 9.17893 20.5 11.25 20.5C13.3211 20.5 15 21.6193 15 23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.5 18L17.5 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.5 14.25L18.75 14.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                ,
            },
        ]
    },
    {
        id: 2,
        section: "Investments",
        navigation: [
            {
                id: 4,
                path: 'dashboard',
                title: "Dashboard",
                icon:  (color) => <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 14.25H5C4.30964 14.25 3.75 14.8096 3.75 15.5V25.5H11.25V14.25Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 10.5H18.75V25.5H26.25V11.75C26.25 11.0596 25.6904 10.5 25 10.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 5.5H12.5C11.8096 5.5 11.25 6.05964 11.25 6.75V25.5H18.75V6.75C18.75 6.05964 18.1904 5.5 17.5 5.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>,
            },
            {
                id: 5,
                path: 'investments',
                title: "My Investments",
                icon:  (color) => <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.25 25.5H3.75V6.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26.25 9.25L16.25 18L11.25 13L3.75 19.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                ,
            },
            {
                id: 6,
                path: 'my-referrals',
                title: "My Referrals",
                icon:  (color) => <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.75 25.5C8.75 23.4289 11.5482 21.75 15 21.75C18.4518 21.75 21.25 23.4289 21.25 25.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.5 18.312C24.7074 18.8907 26.25 20.2122 26.25 21.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 18.312C5.29262 18.8907 3.75 20.2122 3.75 21.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 18C17.0711 18 18.75 16.3211 18.75 14.25C18.75 12.1789 17.0711 10.5 15 10.5C12.9289 10.5 11.25 12.1789 11.25 14.25C11.25 16.3211 12.9289 18 15 18Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.5 13.2951C23.2672 12.6085 23.75 11.6106 23.75 10.5C23.75 8.42893 22.0711 6.75 20 6.75C19.0396 6.75 18.1634 7.11107 17.5 7.70487" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 13.2951C6.73281 12.6085 6.25 11.6106 6.25 10.5C6.25 8.42893 7.92893 6.75 10 6.75C10.9604 6.75 11.8366 7.11107 12.5 7.70487" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                ,
            },
            {
                id: 7,
                path: 'claim-of-yields',
                title: "Claim of Yields",
                icon:  (color) => <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 3.25C7.7868 3.25 2.75 8.2868 2.75 14.5C2.75 20.7132 7.7868 25.75 14 25.75C20.2132 25.75 25.25 20.7132 25.25 14.5C25.25 8.2868 20.2132 3.25 14 3.25ZM0.25 14.5C0.25 6.90608 6.40608 0.75 14 0.75C21.5939 0.75 27.75 6.90608 27.75 14.5C27.75 22.0939 21.5939 28.25 14 28.25C6.40608 28.25 0.25 22.0939 0.25 14.5Z" fill={color} />
                <path fillRule="evenodd" clipRule="evenodd" d="M9.96875 11.4443C9.96875 9.37327 11.6477 7.69434 13.7188 7.69434H14.2743C16.3454 7.69434 18.0243 9.37327 18.0243 11.4443V11.7221H15.5243V11.4443C15.5243 10.754 14.9647 10.1943 14.2743 10.1943H13.7188C13.0284 10.1943 12.4688 10.754 12.4688 11.4443V11.5659C12.4688 12.0394 12.7363 12.4722 13.1597 12.684L15.9514 14.0798C17.2218 14.715 18.0243 16.0135 18.0243 17.4339V17.5554C18.0243 19.6265 16.3454 21.3054 14.2743 21.3054H13.7188C11.6477 21.3054 9.96875 19.6265 9.96875 17.5554V17.2777H12.4688V17.5554C12.4688 18.2458 13.0284 18.8054 13.7188 18.8054H14.2743C14.9647 18.8054 15.5243 18.2458 15.5243 17.5554V17.4339C15.5243 16.9604 15.2568 16.5276 14.8333 16.3158L12.0417 14.92C10.7713 14.2848 9.96875 12.9863 9.96875 11.5659V11.4443Z" fill={color} />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.25 6.1665C14.8023 6.1665 15.25 6.61422 15.25 7.1665V7.94428C15.25 8.49657 14.8023 8.94428 14.25 8.94428H13.75C13.1977 8.94428 12.75 8.49657 12.75 7.94428V7.1665C12.75 6.61422 13.1977 6.1665 13.75 6.1665H14.25Z" fill={color} />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.25 20.0557C14.8023 20.0557 15.25 20.5034 15.25 21.0557V21.8334C15.25 22.3857 14.8023 22.8334 14.25 22.8334H13.75C13.1977 22.8334 12.75 22.3857 12.75 21.8334V21.0557C12.75 20.5034 13.1977 20.0557 13.75 20.0557H14.25Z" fill={color} />
                </svg>
                ,
            },
        ]
    },
    {
        id: 3,
        section: "Documents",
        navigation: [
            {
                id: 8,
                path: 'documentation-legal',
                title: "Documentation Legal",
                icon:  (color) => <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 26.75H7.5C6.80965 26.75 6.25 26.1904 6.25 25.5L6.25 5.5C6.25 4.80965 6.80964 4.25 7.5 4.25L16.9539 4.25C17.3021 4.25 17.6345 4.39524 17.8711 4.65074L23.4172 10.6406C23.6311 10.8716 23.75 11.1749 23.75 11.4898L23.75 25.5C23.75 26.1904 23.1904 26.75 22.5 26.75Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 21.75H18.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 18H18.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.75 11.75L17.5 11.75C16.8096 11.75 16.25 11.1904 16.25 10.5L16.25 4.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
            },
        ]
    }
]