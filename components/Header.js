/**
 * Created by kbr0003 on 29/07/18.
 */
import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
    return(
        <Menu style={ { marginTop : '10px'} }>
            <Link route="/">
              <a className="item"> Project Buterin</a>   
            </Link>    
            <Menu.Menu position='right'>
            <Link route="/practice/home">
              <a className="item"> practice </a>   
            </Link> 
            <Link route="/compete/home">
              <a className="item"> compete </a>   
            </Link> 
            <Link route="/leaderboard">
              <a className="item"> leaderboard </a>   
            </Link>

            </Menu.Menu>
        </Menu>
    )

}
