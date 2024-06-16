import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GroupItem from '@renderer/components/group-item.component';
import { Outlet, useParams } from 'react-router-dom';

const SidebarLayout = (): JSX.Element => {
  const { groupId } = useParams();

  return (
    <div className="drawer md:drawer-open">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-[calc(100vh-3rem)] min-h-[calc(100vh-3rem)] flex flex-col">
        <Outlet></Outlet>
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
            ></FontAwesomeIcon>
            Groups
          </div>

          <GroupItem
            selected={true}
            group={{ name: 'lol', id: 'lola' }}
          ></GroupItem>
          <GroupItem
            selected={true}
            group={{ name: 'lol', id: 'lola' }}
          ></GroupItem>
          <GroupItem
            selected={true}
            group={{ name: 'lol', id: 'lola' }}
          ></GroupItem>
        </ul>
      </div>
    </div>
  );
};

export default SidebarLayout;
