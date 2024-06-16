import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GroupItem from '@renderer/components/group-item.component';
import { GROUP_LIST } from '@renderer/react-query/queries';
import { useQuery } from '@tanstack/react-query';
import { Outlet, useParams } from 'react-router-dom';
import NoData from '../assets/svg/no-data.svg';

const SidebarLayout = (): JSX.Element => {
  const { groupId } = useParams();
  const { data } = useQuery({
    queryKey: [GROUP_LIST.name],
    queryFn: GROUP_LIST,
  });

  return (
    <div className="drawer md:drawer-open">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-x-hidden h-[calc(100vh-3rem)] min-h-[calc(100vh-3rem)] flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side z-20 mt-[3rem] md:mt-0 max-h-[calc(100vh-3rem)]">
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

          {data?.map((group) => (
            <GroupItem
              key={group.id}
              selected={group.id === groupId}
              group={group}
            ></GroupItem>
          ))}

          {data && data?.length < 1 ? (
            <div className="flex flex-col items-center">
              <img className="h-[10rem]" src={NoData} alt="no-data" />
              <div className="flex">No data</div>
            </div>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default SidebarLayout;
