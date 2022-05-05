import React from 'react'
import {styled, useStyletron} from 'baseui';
import SideNavListItem from './sidebarNavItem';
import { menuData } from '../assets/constant';

const Sidebar = ({open, setOpen}) => {
    
    const [css] = useStyletron();
    return (
        <SidebarWrapper className={css({
            '@media (max-width: 768px)': {
                display: open ? 'block' : 'none',
            }
        })}>
            <div className={css({
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                background: 'rgba(0, 0, 0, 0.5)',
                height: '100vh',
                zIndex: '-1',
                display: 'none',
                '@media (max-width: 768px)': {
                    display: open ? 'block' : 'none',
                }
            })}
                onClick={() => setOpen(false)}
            />
            {
                menuData.map(({ icon, title, active, path }, index) => (
                            <SideNavListItem  path={path} key={index} active={active} title={title} >
                                {icon}
                            </SideNavListItem>
                ))
            }
        </SidebarWrapper>
    )
}
export default Sidebar
const SidebarWrapper = styled('section', {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    maxWidth: '255px',
    height: '100vh',
    background: '#363740',
    zIndex: '1',
    overflowX: 'hidden',
});
