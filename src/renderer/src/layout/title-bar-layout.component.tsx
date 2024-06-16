import {
  faBars,
  faCheck,
  faMoon,
  faPlus,
  faSun,
  faTimes,
  faWindowMaximize,
  faWindowMinimize,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useContext } from 'react';
import Logo from '../assets/svg/logo.svg';
import { Theme, ThemeContext } from '@renderer/context/theme.context';
import { IPCMessages } from '@shared/ipc-messages';

const TitleBarLayout = ({ children }: PropsWithChildren): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeContext);

  const minimize = (): void => {
    window.electron.ipcRenderer.send(IPCMessages.MINIMIZE);
  };
  const maximize = (): void => {
    window.electron.ipcRenderer.send(IPCMessages.MAXIMIZE);
  };
  const close = (): void => {
    window.electron.ipcRenderer.send(IPCMessages.CLOSE);
  };

  const showAddGroupModal = (): void => {
    const modal = document.getElementById(
      'add-group-modal'
    ) as HTMLDialogElement;
    modal.showModal();
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-base-100">
      <div className="drag navbar z-50 border-b-[1px] border-base-300 px-[0.5rem] min-h-[3rem] p-[0.2rem] bg-base-100 text-base-content">
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

          <div className="dropdown no-drag">
            <div tabIndex={0} role="button" className="btn btn-sm btn-ghost">
              Theme
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content border-base-300 border-[1px] z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => setTheme(Theme.LIGHT)}>
                  <FontAwesomeIcon icon={faSun}></FontAwesomeIcon> Light{' '}
                  {theme === Theme.LIGHT ? (
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faCheck}
                    ></FontAwesomeIcon>
                  ) : null}
                </a>
              </li>
              <li>
                <a onClick={() => setTheme(Theme.DARK)}>
                  <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon> Dark
                  {theme === Theme.DARK ? (
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faCheck}
                    ></FontAwesomeIcon>
                  ) : null}
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown no-drag">
            <div tabIndex={0} role="button" className="btn btn-sm btn-ghost">
              Group
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content border-base-300 border-[1px] z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={showAddGroupModal}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add group
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <button
            onClick={() => minimize()}
            className="no-drag btn btn-sm btn-square ml-[0.3rem]"
          >
            <FontAwesomeIcon icon={faWindowMinimize}></FontAwesomeIcon>
          </button>
          <button
            onClick={() => maximize()}
            className="no-drag btn btn-sm btn-square ml-[0.3rem]"
          >
            <FontAwesomeIcon icon={faWindowMaximize}></FontAwesomeIcon>
          </button>
          <button
            onClick={() => close()}
            className="no-drag btn btn-sm btn-square ml-[0.3rem]"
          >
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default TitleBarLayout;
