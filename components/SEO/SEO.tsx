import Head from 'next/head'
import { useRouter } from 'next/router'
import { SEO_VIEWPORT, SEO_THEMECOLOR, SEO_TITLE, SEO_DESCRIPTION, SEO_KEYWORDS, SEO_OG_IMAGE, SEO_TWITTER_IMAGE, PRODUCTION_URL } from '../constants'

export type SEOProps = {
    viewport?: string;
    themeColor?: string;
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
}

export const SEO = ({
    viewport = SEO_VIEWPORT,
    themeColor = SEO_THEMECOLOR,
    title = SEO_TITLE,
    description = SEO_DESCRIPTION,
    keywords = SEO_KEYWORDS,
    ogTitle = SEO_TITLE,
    ogDescription = SEO_DESCRIPTION,
    ogImage = SEO_OG_IMAGE,
    ogUrl = PRODUCTION_URL,
    twitterTitle = SEO_TITLE,
    twitterDescription = SEO_DESCRIPTION,
    twitterImage = SEO_TWITTER_IMAGE,
}: SEOProps) => {
    const router = useRouter();

    return(
        <Head>
            <meta name="viewport" content={viewport} />
            <meta name="theme-color" content={themeColor} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <title>{title}</title>
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={ogTitle} />
            <meta property="og:url" content={`${ogUrl}${router.asPath}`} />
            <meta property="og:type" content={'website'} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twitterImage} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default SEO;