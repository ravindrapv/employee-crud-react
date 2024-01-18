import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Employees", link: "/employees", icon: AiOutlineUser },
    { name: "Help", link: "/help", icon: AiOutlineQuestionCircle },
  ];
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-[#034EA2] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        {/* <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABAlBMVEX////tBngAv/MDTaL///0AwPH+//oAv/X/ruPPMoH/8//dEHfqBnfuBXjq//+l+f8CT6H/0/jSUZHYEnHrCHPOGG3wjL7/8P//+v+e9P8Pu+s4vOMDTaTd//8AwvIcQZlMM4/0//+MKIvPFYSrzvYWp+gMu/QAaK8AVaUjWZcKTJoPTI+5HYgRq+c9NpOKrM8AcbQAZbH///QAwuw9utozv9gmV5kUp+0AaLcJv+QmodwHX6ZNuuFUm9EtTpM5N4u36f+wt+t2VZp9NI35tuu0RI63HXum8P+f1fez0u/f5vY8qNYle642V42frcqTptA8OoOjo8n04/+mZKSnKIPZl8XU+BipAAAELUlEQVR4nO3beVPTQBgG8CWnVixRVGIpwSgUaEW0aBXwvhAV8cDv/1V8dze00NlplmQ7u3WeZ2GGP8rM+5s9kuymzHMs8dkfnfWNzcTXDrNZtCqA2CxaFUBsFq0KIDaLVgUQm0WrAojNolUBxGbRqgBis2hVALFZtCqA2CxaFUBsFq0KIDaLVgUQm0WrAojNolUBxGbRqgBis2hVYiEJw1mHxBTqlSzLPA5JtCmuQSQlHkL0eyR0LEWnyKHlk6StF0b/4lTLwmKedNafXA7iVrLdXU7xRhC/rdUYn1oONYLsZmeQxJ/dyT6ExALizy4kI4dYuDrPRY9Qn2g1RrPLpebxqd7pCMgLGvr6kMyt8DFFodnCe6Tt+3oMgtgeS+MRw4pf2ePtjc3LQFouZnlvb6+1f+Cv6octO5anPM8oL1+9fnNPP2zB0Ry+fff+w339sKajyRsfP31+oB8WRE61gOVMJF26cnVxfm5ubl4vjAVutUAwoogR5BqHaIY5lkBKoihoCMh1QCwHENuFjwcQ24WPBxDbhY8HENuFjwcQ24WPBxDTt/FFObygIJhQ8IXCz3+0MsT4gxGVkudUSMB/SxNFkfh0fcg0HlNXVpr0nJdrhj7Le1A+GQZRVcjdaWTh8MuaZo6O1ta+spS6RjCiypDpbOp8+77FMxgMtkpyfDw4/pESpC/GWXWI6b21kFqrtf241+12+T5htzRJ74T6ot+P6kFMn3B4If/ZFiey4iip5DiAPtE9yVOCyLWr8mT3MrMty8Iwox6RR8vkmLxnKyA7OYsIktZatUwfZo4g4mxDnHBMCJf0dpp50I9YWlyDKvaI4YQECTmEH5sl5Qc1lN5OnvNVq16PGJ8jnpgjBPFFd5QdmdFqwCG5WH5rQQxHvk3CIXKilx0r+91kBKlzHTHfI3HRI8XBcRnEH0HoYtKvDDF84C8gGYckepA2n+x5znd701oQw4uWODqTkNGFYlKHSAiVHqQpq3NBNL1qiZPMIaRk8RVvaPgcEggInyTOQXwtSHIRUuPu1zQkjs9DtCIhkbyLdwbCJ0kW60PaEsIAAQQQQAABBBBAAAFkJiHyUbcaxJ3nER4JKfa0yjMTEJ24CYmHQ0vvzXZnhxbfRQn/hzkCCCBTgnj1JrtDF0Tvcsuv+5BE74JoDGJ+E5sgo6O38r1fRyGhgISjoVW69+suhO5+Qwt3v9OA1Fh+3Zns8hyRIG3xnc52+Tc7DUGm8irKy/2D1Ufa+fmLGYCsTCPN339OH2rn9G8jPfviSPUru/lQSY0bNxdlCRqF3Lp9Zykt3nhw6p1GQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAJkxyD/ZU4mTLBA8MQAAAABJRU5ErkJggg=="
          alt=""
          width={40}
        /> */}
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-500 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
