import Tippy from "@tippyjs/react";

function Tooltip({children,content}) {
    return ( 
        <Tippy content={content}>{children}</Tippy>
     );
}

export default Tooltip;