


const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <button className="back-footer">
                    <span>Back</span>
                    <svg width="15" height="15" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                </button>
            </div>
            <div>
                <button className="next-footer">
                    <span>Next</span>
                    <svg width="15" height="15" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                </button>
            </div>
        </footer>
    )
}


export default Footer;