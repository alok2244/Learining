import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import './NavigationMenuTop.css'
import SearchBox from '../SearchBar/SearchBox';
import Account from '../Account/Account';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';

const NavigationMenuTop = () => {
  return (
    <div className='fixed w-full z-[999]  border-b-2'>
      
    <NavigationMenu.Root className='nav_bar'>
      {/* Left Section - Learning */}
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            <Link to={'/'}>
          <div className=" pl-2 flex items-center mb-2 ">
                    <img
                        src="/asset/icon/home_icon.png"
                        alt="home logo"
                        className="center size-11 "
                        />
                   <div className='h1-bold'>
              Learning
            </div>
                </div>
                        </Link>
            
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* Center Section - Search bar */}
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            <SearchBox />
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* Right Section - Auth Button */}
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            <Account />
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>

    </div>
  );
};

export default NavigationMenuTop;
