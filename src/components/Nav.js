import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Header, Menu } from "semantic-ui-react";
import './Nav.css'


function Nav({ setPage, page }) {
    const changePageJ = () => {setPage('jms')}
    const changePageC = () => {setPage('about')}
    const changePageP = () => {setPage('project')}


    return (
        <>
            <Menu id="mainMenu">
                <Menu secondary stackable>
                    <Menu.Item
                        onClick={changePageJ}
                    >
                        <Header size='large'>
                            Jonathan Singh
                        </Header>
                    </Menu.Item>
                    <Menu.Item
                        onClick={changePageP}
                    >
                        Projects
                    </Menu.Item>
                    <Menu.Item
                        onClick={changePageC}
                    >
                        About
                    </Menu.Item>
                </Menu>
            </Menu>
        </>
    )
}

export default Nav;