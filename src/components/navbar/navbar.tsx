import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

import darkLogo from '@assets/Logo/logo-dark.svg';
import logo from '@assets/Logo/logo.svg';
import { useNavbar } from '@components/navbar/navbar.hook';
import { ETheme } from '@shared/enums/index';
import { computeStyles } from '@utils/computeStyles';

import './navbar.css';
import { TNavbar } from './navbar.types';

export const Navbar: FC<TNavbar> = (props: TNavbar): JSX.Element => {
  const { items, itemsBottom } = props;
  const { openNavbar, setOpenNavbar, themeMode, isActiveForPaths } =
    useNavbar();

  return (
    <div
      id='navbar'
      className={computeStyles('navbar', {
        condition: openNavbar,
        valid: 'w-64',
        unvalid: 'w-20',
      })}
    >
      <div>
        <div className='p-l flex justify-between'>
          {openNavbar && (
            <img
              src={themeMode === ETheme.dark ? logo : darkLogo}
              alt='logo'
              className='text-neutral-black dark:text-white'
            />
          )}
          <button
            type='button'
            className={computeStyles('navbar-button', {
              condition: openNavbar,
              unvalid: 'w-full',
            })}
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            <FontAwesomeIcon
              icon={openNavbar ? faArrowLeft : faArrowRight}
              className='text-neutral-black dark:text-white font-extrabold'
            />
          </button>
        </div>
        <nav className='p-l'>
          <ul>
            {items.map((item) => (
              <li key={item.text} className='py-xs'>
                <NavLink
                  end
                  to={item.path}
                  className={({ isActive }) =>
                    computeStyles(
                      'w-full block p-m hover:navbar-navlink hover-icon',
                      {
                        condition: isActiveForPaths(isActive, item.pathname),
                        valid: 'navbar-navlink',
                      }
                    )
                  }
                >
                  {({ isActive }) => (
                    <div
                      className={computeStyles('hover:text-white', {
                        condition: openNavbar,
                        unvalid: 'text-center',
                      })}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        id='icon'
                        className={computeStyles('text-l font-bold', {
                          condition: isActiveForPaths(isActive, item.pathname),
                          valid: 'text-neutral-black dark:text-white',
                          unvalid: 'text-icon',
                        })}
                      />
                      {openNavbar && (
                        <span
                          className={computeStyles('navbar-text', {
                            condition: openNavbar,
                            valid: 'pl-3',
                            unvalid: 'pl-0',
                          })}
                        >
                          {item.text}
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {!!itemsBottom?.length && (
        <div>
          <ul>
            {itemsBottom.map((item) => {
              if (item.disabled) return null;
              return (
                <li
                  key={item.text}
                  className='py-xs cursor-pointer'
                  onClick={item.onClick}
                >
                  <div
                    className={computeStyles(
                      'hover:text-white ml-6 mb-6 text-sm',
                      {
                        condition: openNavbar,
                        unvalid: 'text-center',
                      }
                    )}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      id='icon'
                      className={computeStyles('text-l text-white font-bold', {
                        valid: 'text-neutral-black dark:text-white',
                      })}
                    />
                    {openNavbar && (
                      <span
                        className={computeStyles('navbar-text', {
                          condition: openNavbar,
                          valid: 'pl-3',
                          unvalid: 'pl-0',
                        })}
                      >
                        {item.text}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
