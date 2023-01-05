import React from "react";
import { NextSeo } from "next-seo";
import {
  DEFAULT_DESC_META_TAG,
  RENDER_TITLE_META_TAG,
} from "../../constants/index";

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title = "", description = "" }) => {
  return (
    <NextSeo
      title={RENDER_TITLE_META_TAG(title)}
      description={description ? description : DEFAULT_DESC_META_TAG}
      additionalLinkTags={[{ rel: "icon", href: "/favicon.ico" }]}
      openGraph={{
        url: `https://audiophile-ecommerce-nu.vercel.app/`,
        title: title,
        description: description,
        locale: "en_us",
        images: [
          {
            url: "https://res.cloudinary.com/dakts9ect/image/upload/v1657600692/sideprojects/Untitled-1_ym5obf.jpg",
            width: 1200,
            height: 630,
            alt: title,
            type: "image/jpeg",
          },
        ],
        site_name: "AudioPhile",
      }}
      twitter={{
        handle: "@eva_skillz",
        site: "@eva_skillz",
        cardType: "summary_large_image",
      }}
    />
  );
};
