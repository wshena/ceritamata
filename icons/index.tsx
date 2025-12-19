import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp, FaAngleRight, FaAngleLeft, FaArrowRight } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export const MenuIcon = ({size, color, style}:IconProps) => <MdMenu size={size} color={color} className={style} />

export const CloseIcon = ({size, color, style}:IconProps) => <IoClose size={size} color={color} className={style} />

export const SearchIcon = ({size, color, style}:IconProps) => <FaMagnifyingGlass size={size} color={color} className={style} />

export const AngleUpIcon = ({size, color, style}:IconProps) => <FaAngleUp size={size} color={color} className={style} />

export const AngleDownIcon = ({size, color, style}:IconProps) => <FaAngleDown size={size} color={color} className={style} />

export const AngleRightIcon = ({size, color, style}:IconProps) => <FaAngleRight size={size} color={color} className={style} />

export const AngleLeftIcon = ({size, color, style}:IconProps) => <FaAngleLeft size={size} color={color} className={style} />

export const ArrowRightIcon = ({size, color, style}:IconProps) => <FaArrowRight size={size} color={color} className={style} />