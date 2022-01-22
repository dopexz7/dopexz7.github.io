import Link from 'next/link'
const TopNav = () => {
    return (
        <div className="main-header-topnav">
            <div className='main-header-logo'>
                #NPOTW
            </div>
            <div className="main-header-navigation">
                <a href="#">This week</a>
                <a href="#">Past weeks</a>
                <a href="#">Artists</a>
                <a href="#">Streamers</a>
                <a href="#">/</a>
                <Link href="/dashboard">
                    <a>Dashboard</a>
                </Link>
                
                
            </div>
        </div>
    );
};

export default TopNav;