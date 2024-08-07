import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <div className="mx-auto px-6 max-sm:px-0 max-w-8xl pt-12 lg:pt-20 mb-12">
      <div className="grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-auto md:ml-24 ml-10 max-sm:gap-10 ">
        <div className="flex flex-col gap-2 mb-10">
          <p className="text-white text-xl mb-6">Resources</p>
          {resourcesLinks.map((resource) => (
            <a
              key={resource.text}
              className="text-sm cursor-pointer"
              href={resource.href}
            >
              {resource.text}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 mb-10">
          <p className="text-white text-xl mb-6">Platform</p>
          {platformLinks.map((platform) => (
            <a
              key={platform.text}
              className="text-sm cursor-pointer"
              href={platform.href}
            >
              {platform.text}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white text-xl mb-6">Community</p>
          {communityLinks.map((community) => (
            <a
              key={community.text}
              className="text-sm cursor-pointer"
              href={community.href}
            >
              {community.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
