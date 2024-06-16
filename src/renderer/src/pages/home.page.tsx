import SelectGroup from '../assets/svg/select.svg';

const HomePage = (): JSX.Element => {
  return (
    <div className="flex flex-1 flex-col  justify-center items-center">
      <img className="h-[10rem]" src={SelectGroup} alt="select-group" />
      <div className="flex my-[2rem]">
        Select or create a group to get started
      </div>
    </div>
  );
};

export default HomePage;
