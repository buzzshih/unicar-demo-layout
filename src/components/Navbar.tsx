import { Navbar as FlowbiteNavbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { User, Car, Wrench } from "lucide-react";

export function Navbar() {
  const location = useLocation();

  return (
    <FlowbiteNavbar fluid className="bg-white shadow-sm">
      <FlowbiteNavbar.Brand as={Link} to="/">
        <Car className="mr-3 size-6" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          UniCar Vip Prototype
        </span>
      </FlowbiteNavbar.Brand>
      <FlowbiteNavbar.Toggle />
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link
          as={Link}
          to="/"
          active={location.pathname === "/"}
        >
          <div className=" my-2 flex flex-row items-center  text-center  md:flex-col">
            <User className="mr-2 size-5" />
            我的資料
          </div>
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link
          as={Link}
          to="/reserve"
          active={location.pathname === "/reserve"}
        >
          <div className=" my-2 flex flex-row items-center  text-center  md:flex-col">
            <Wrench className="mr-2 size-5" />
            預約服務
          </div>
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link
          as={Link}
          to="/find"
          active={location.pathname === "/find"}
        >
          <div className=" my-2 flex flex-row items-center  text-center  md:flex-col">
            <Car className="mr-2 size-5" />
            找車
          </div>
        </FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
}
