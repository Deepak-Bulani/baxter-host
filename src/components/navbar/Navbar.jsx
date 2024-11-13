import { Link } from 'react-router-dom';
import { navbarItem } from '../../constants';

const NavBar = () => {
  const linkHoverClasses = `
  from-white to-gray-300 text-[#2b477d]
`;

  const linkClasses = `
  flex justify-center items-center font-medium
  w-full max-w-[175px] min-w-[140px]
  rounded-t-[3px] rounded-b-none py-3 mt-4
  bg-gradient-to-b from-[#9cb0d3] to-[#617598]
  hover:from-white hover:to-gray-300 hover:text-[#2b477d]
  inline-block
  flex-grow flex-shrink
`;

  const subMenuClass = `
  absolute top-full hidden 
  border border-gray-300 rounded 
  w-full group-hover:block rounded-t-[5px]
`;

  const optionItemClass = `
  flex justify-center items-center
  block px-4 py-3
  bg-primary-navBarItemBgColor 
  hover:bg-white hover:text-[#2b477d]
  text-white
  rounded-sm border-b border-black-400
`;

  return (
    <div className="flex justify-center w-[1250px] gap-1 text-white text-sm bg-primary-navBarBgColor">
      {navbarItem.map((item, index) => (
        <div
          key={index}
          className={`${linkClasses} relative group ${item.defaultHover ? linkHoverClasses : ''}`}
        >
          <Link to={item.link} className="flex items-center justify-center w-full">
            {item.text}
            {item.subMenuFlag && (
              <img
                src="/src/svg/drop-down.png"
                className="h-4 ml-2 w-5 mt-1 text-[#2b477d]"
                alt="dropdown"
              />
            )}
          </Link>
          {item.subMenuFlag && (
            <div className={subMenuClass}>
              {item.subMenuItem.map((ele, subIndex) => (
                <Link to={ele.link} className={optionItemClass} key={subIndex}>
                  {ele.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default NavBar;
