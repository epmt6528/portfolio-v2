import { As, Icon, Link } from '@chakra-ui/react';

interface IconLinkProps {
  icon: As;
  href: string;
}

const IconLink = ({ icon, href }: IconLinkProps) => {
  const ICON_SIZE = 9;
  return (
    <Link href={href} isExternal>
      <Icon as={icon} w={ICON_SIZE} h={ICON_SIZE} />
    </Link>
  );
};

export default IconLink;
