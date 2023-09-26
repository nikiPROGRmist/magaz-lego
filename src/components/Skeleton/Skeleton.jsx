import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={320}
    height={490}
    viewBox="0 0 320 490"
    backgroundColor="#e0e0e0"
    foregroundColor="#eeeded"
    {...props}
  >
    <rect x="68" y="72" rx="0" ry="0" width="0" height="1" />
    <rect x="123" y="156" rx="0" ry="0" width="1" height="0" />
    <rect x="111" y="159" rx="0" ry="0" width="1" height="1" />
    <rect x="119" y="114" rx="0" ry="0" width="1" height="0" />
    <rect x="123" y="134" rx="0" ry="0" width="1" height="0" />
    <rect x="60" y="54" rx="20" ry="20" width="200" height="250" />
    <rect x="10" y="382" rx="10" ry="10" width="300" height="37" />
    <rect x="9" y="426" rx="10" ry="10" width="50" height="22" />
    <rect x="10" y="456" rx="10" ry="10" width="70" height="20" />
    <rect x="280" y="450" rx="10" ry="10" width="30" height="30" />
    <rect x="10" y="22" rx="10" ry="10" width="30" height="30" />
    <rect x="10" y="337" rx="10" ry="10" width="202" height="39" />
    <rect x="194" y="314" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
);
