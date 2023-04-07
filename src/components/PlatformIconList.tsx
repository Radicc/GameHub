import React from "react";
import { IconType } from "react-icons";
import { FaWindows } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platform: string;
}
const IconCombine = () => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <FaWindows />
      <BsBrowserChrome />
    </span>
  );
};

const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    "PC (Windows)": FaWindows,
    "Web Browser": BsBrowserChrome,
    "PC (Windows), Web Browser": IconCombine,
  };

  return (
    <HStack margin={1}>
      <Icon key={platform} as={iconMap[platform]} color="gray.500" />
    </HStack>
  );
};

export default PlatformIconList;
