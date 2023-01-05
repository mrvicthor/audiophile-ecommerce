export const DEFAULT_TITLE_META_TAG = "Homepage";
export const DEFAULT_DESC_META_TAG =
  "Browse and purchase the best audio devices in the market";
export const RENDER_TITLE_META_TAG = (title?: string) =>
  `AudioPhile | ${title ? title : DEFAULT_TITLE_META_TAG}`;
