import {
	WEBSITE_BASE_URL,
	WEBSITE_DESCRIPTION,
	WEBSITE_NAME,
} from "@/constants/company";

export const metadataConfig = {
	metadataBase: new URL(WEBSITE_BASE_URL),
	title: {
		default: WEBSITE_NAME,
		template: `%s | ${WEBSITE_NAME}`,
	},
	description: WEBSITE_DESCRIPTION,
	keywords: [WEBSITE_NAME],
	assets: [`${WEBSITE_BASE_URL}/assets`],
	manifest: `${WEBSITE_BASE_URL}/manifest.webmanifest`,
	category: "technology",
	generator: "Next.js",
	applicationName: WEBSITE_NAME,
	authors: [{ name: "Daberechi Okorie", url: WEBSITE_BASE_URL }],
	creator: "Daberechi Okorie",
	publisher: "Daberechi Okorie",
	formatDetection: {
		email: true,
		address: false,
		telephone: true,
	},
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
		},
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/icon.png",
		shortcut: "/shortcut-icon.png",
		apple: "/apple-icon.png",
	},
	openGraph: {
		title: WEBSITE_NAME,
		description: WEBSITE_DESCRIPTION,
		type: "website",
		url: WEBSITE_BASE_URL,
		images: [
			{
				url: `${WEBSITE_BASE_URL}/logo.png`,
				width: 1200,
				height: 630,
				alt: WEBSITE_NAME,
			},
		],
	},
	twitter: {
		handle: "#",
		site: "#",
		card: "summary_large_image",
	},
	verification: {
		google: "google",
	},
};
