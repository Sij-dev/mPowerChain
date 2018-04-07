import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
    return(
        <Menu style={{marginTop: '0px' }} fixed= 'top'inverted > 
            <Menu.Item>
                <Link route = '/'> 
                    <a className="item"> 
                        mPowerChain 
                    </a>
                </Link>
            </Menu.Item>
        
            <Menu.Menu  position = 'right'>
                <Menu.Item>
                    <Link route = '/'> 
                        <a className="item"> 
                            Campaigns 
                        </a>
                    </Link>
                    
                </Menu.Item>
                <Menu.Item>
                    <Link route = '/campaigns/new'> 
                        <a className="item">  
                            <Button 
                                icon='add'
                            />
                        </a>
                    </Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

