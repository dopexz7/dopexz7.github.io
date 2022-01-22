import { Link, animateScroll as scroll } from "react-scroll";
const thisWeeksCharacter = "Character name";
const thisWeeksCharacterAffil = "More details";
const thisWeeksCharacterAffilSecond = "Art references";
const thisWeeksCharacterDescription = "Randy Bullet is an OG member of Chang Gang, joining the gang in 2017. He is also a shadow master to the Puppets within the Underground racing scene.";
const HeaderContent = () => {
    
    return (
        <div className="main-header-headercontent">
            <div className="main-header-headercontentleft">
                <h1 className="main-header-headercontenth1">
                    Current character of the week...
                </h1>
                <div className="main-header-headercontentleftcontent">
                { thisWeeksCharacterDescription }
                </div>
                <div className="main-header-headercontentleftbottom">
                    <div className="main-header-headercontentleftbottom-div bottom-div-first">
                        Other
                    </div>
                    <div className="main-header-headercontentleftbottom-div">
                        { thisWeeksCharacterAffil }
                    </div>
                    <div className="main-header-headercontentleftbottom-div bottom-div-noborder">
                        { thisWeeksCharacterAffilSecond }
                    </div>
                    <div className="main-header-headercontentleftbottom-div bottom-div-last">
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        Current art
                        </Link>
                    </div>
                    
                </div>
            </div>

            <div className="main-header-headercontentright">
                <div className="main-header-headercontentrightcontent">
                    
                </div>
            </div>
            
        </div>
    );
};

export default HeaderContent;