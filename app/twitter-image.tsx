import OpengraphImage, {
  alt as ogAlt,
  size as ogSize,
  contentType as ogContentType,
} from "./opengraph-image";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

// Same canvas as the OpenGraph card — X/Twitter just wants its own route.
export default OpengraphImage;
