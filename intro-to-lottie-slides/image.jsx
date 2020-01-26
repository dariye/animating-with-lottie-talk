import React from "react";
const Image = ({src, alt, width, height}) => <img src={import(src)} alt={alt} width={width || '100%'} height={height || 'auto'} />;

export default Image;
