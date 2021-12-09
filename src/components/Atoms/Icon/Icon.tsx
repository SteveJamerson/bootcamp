import { ElementType, FC } from "react";
import IconsTypes, { IconName } from "./Icon.types";

interface IconProps {
    component?: ElementType;
    size?: number;
    name: IconName;
    className?: string;
}

const Icon: FC<IconProps> = ({ name, size = 24, className, ...props }) => {
    const Icon = IconsTypes[name];
    return (
        <Icon
            className={className}
            width={size}
            height={size}
        />
    )
}

export default Icon;