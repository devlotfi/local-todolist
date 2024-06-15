import {
  faBars,
  faTimes,
  faWindowMaximize,
  faWindowMinimize,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import Logo from '../assets/svg/logo.svg';

const TitleBarLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex flex-col h-screen w-screen bg-base-300">
      <div className="drag navbar px-[0.5rem] min-h-[3rem] p-[0.2rem] bg-base-100 text-base-content">
        <div className="flex-none">
          <label
            htmlFor="app-drawer"
            className="no-drag btn btn-sm btn-square btn-ghost md:hidden"
          >
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </label>
        </div>
        <img className="h-[1.5rem] mx-[0.5rem]" src={Logo} alt="logo" />
        <div className="flex-1">
          <a className="no-drag hidden md:flex btn btn-sm btn-ghost text-xl">
            Local Todolist
          </a>
        </div>

        <div className="flex">
          <button className="no-drag btn btn-sm btn-square ml-[0.3rem]">
            <FontAwesomeIcon icon={faWindowMinimize}></FontAwesomeIcon>
          </button>
          <button className="no-drag btn btn-sm btn-square ml-[0.3rem]">
            <FontAwesomeIcon icon={faWindowMaximize}></FontAwesomeIcon>
          </button>
          <button className="no-drag btn btn-sm btn-square ml-[0.3rem]">
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default TitleBarLayout;
