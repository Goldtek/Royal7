import React, { Fragment } from 'react'

/*COMPONENT IMPORTS  STARTS HERE #######*/
import HeaderComponent from "./header"
import SidebarComponent from "./sidebar"
import ContentComponent from "./content"
import FooterComponent from "./footer"
/*COMPONENT IMPORTS  STARTS HERE #######*/
function dashboard() {
return (
<Fragment>
<HeaderComponent/>
<div className="parent-wrapper" id="outer-wrapper">
<SidebarComponent/>
<div className="main-content" id="content-wrapper">
<ContentComponent/>
<FooterComponent/>
</div>
</div>

</Fragment>
)
}

export default dashboard
