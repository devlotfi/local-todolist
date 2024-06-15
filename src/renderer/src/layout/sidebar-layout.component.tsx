import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';

const SidebarLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="drawer md:drawer-open">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content max-h-[calc(100vh-3rem)] flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="drawer-side mt-[3rem] md:mt-0 max-h-[calc(100vh-3rem)]">
        <label
          htmlFor="app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="flex font-bold text-[20pt] my-[1rem] ml-[1rem]">
            <FontAwesomeIcon
              className="text-primary mr-[0.5rem]"
              icon={faList}
            ></FontAwesomeIcon>{' '}
            Groups
          </div>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarLayout;
