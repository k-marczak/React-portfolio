import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About me
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    {/* <SidebarRoute>Sign In</SidebarRoute> */}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
