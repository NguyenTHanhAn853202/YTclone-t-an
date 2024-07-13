import { FaChevronRight } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPlaylistAddCheck } from "react-icons/md";
import { IoFlagOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { config } from "~/router/config";
import { MdOutlineHistory } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";

const listCategory = [
    {
        icon: <IoMdHome />,
        title:"Trang chủ",
        to:config.home
    },
    {
        icon: <AiOutlineFire />,
        title: "Trending",
        to:"/trending"
    },
    {
        icon: <MdOutlineSubscriptions />,
        title: "Kênh Đăng Ký",
        to:"/subscriptions"
    }
]

const listHistory = [
    {
        icon:<h3>Bạn</h3>,
        title: <FaChevronRight />,
        to:"/user/profile"
    },
    {
        icon:<MdOutlineHistory  />,
        title: "Video đã xem",
        to:"/history"
    },
    {
        icon:<AiFillLike />,
        title: "Video đã thich",
        to:"/liked-videos"
    },
    {
        icon:<MdPlaylistAddCheck />,
        title:"Danh sách phát",
        to:"/my-playlist"
    }
]

const listSettings = [
    {
        icon:<IoSettingsOutline />,
        title: "Cài đặt",
        to:"/settings"
    },
    {
        icon:<IoFlagOutline />,
        title: "Báo cáo",
        to:"/report"
    },
    {
        icon:<MdOutlineContactSupport />,
        title: "Hỗ trợ",
        to:"/help"
    }
]

export {listHistory,listCategory,listSettings}