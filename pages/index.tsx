import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from '../layouts/Footer';
import Head from 'next/head';
import Layout from '../layouts/Layout';
import NavigationBar from '../layouts/NavigationBar';
import QuoteCard from '../containers/QuoteCard';
import { Spacer } from '@nextui-org/react';
import Tasks from '../containers/Tasks';
import dynamic from 'next/dynamic';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const DynamicClockCardWithNoSSR = dynamic(
	() => import('../containers/ClockCard'),
	{
		ssr: false,
	}
);

export default function Home() {
	return (
		<>
			<Layout>
				<Head>
					<title>aimer</title>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta name='author' content='John Rommel Octaviano' />
					<meta name='description' content='' />
					<meta name='designer' content='John Rommel Octaviano' />
					<meta name='reply-to' content='johnrommel.octaviano@gmail.com' />
					<meta name='owner' content='John Rommel P. Octaviano' />
					<meta name='summary' content='John Rommel Octaviano' />
					<meta name='directory' content='submission' />
					<meta name='coverage' content='Worldwide' />
					<meta name='distribution' content='Global' />
					<meta
						name='subject'
						content='John Rommel Octaviano, Aimer, Todo, Productivity'
					/>
					<meta
						name='keywords'
						content='John Rommel Octaviano, Aimer, Todo, Productivity'
					/>
					<meta name='topic' content='Aimer' />
					<meta name='category' content='Productivity' />
					<meta name='target' content='all' />
					<meta name='audience' content='all' />
					<meta name='rating' content='General' />
					<meta
						name='generator'
						content='Visual Studio Code, XD, Photoshop, Firefox Developer Edition, Windows Terminal, etc.'
					/>
					<meta name='referrer' content='no-referrer' />
					<meta name='fragment' content='!' />
					<meta
						name='format-detection'
						content='telephone=no,date=no,address=no,email=no,url=no'
					/>
					<meta name='mssmarttagspreventparsing' content='true' />
					<meta name='HandheldFriendly' content='True' />
					<meta name='robots' content='index,follow' />
					<meta name='googlebot' content='index,follow' />
					<meta name='google' content='nositelinkssearchbox' />
					<meta name='slurp' content='noydir' />
					<meta name='msapplication-navbutton-color' content='#0072F5' />
					<meta name='ICBM' content='14.169648, 121.333653' />
					<meta name='geo.position' content='14.169648;121.333653' />
					<meta name='geo.region' content='PH-LAG' />
					<link
						rel='author'
						href='data:text/plain;base64,VGhpcyBwZXJzb25hbCBwb3J0Zm9saW8gaXMgYnVpbHQgYnkgSm9obiBSb21tZWwgT2N0YXZpYW5vLCBhIEZyb250IEVuZCBEZXZlbG9wZXIsIFVzZXIgSW50ZXJmYWNlIERlc2lnbmVyLCBHcmFwaGljIERlc2lnbmVyLCBhbmQgVGVjaG5pY2FsIEJsb2dnZXIgYmFzZWQgaW4gdGhlIFBoaWxpcHBpbmVzLg0KDQpGYWJyaWNhdGluZyB0aGluZ3MgaXMgYSB0aW1lbGVzcyBqb3VybmV5LiBBIG1hZ25pZmljZW50IHZveWFnZSB0aGF0IGxlYWRzIHRvIHRoZSBwYXRoIG9mIHBvc3NpYmlsaXRpZXMuIENvbnRpbnVpbmcgb24gdG8gdGhlIHByb2xvbmdlZCBlbmQu'
					/>
					<link rel='me' href='mailto:johnrommel.octaviano@gmail.com' />
					<link rel='me' href='sms:+639562057280' />
					<link
						rel='icon'
						sizes='192x192'
						href='https://img.icons8.com/color/96/null/alarm-clock--v1.png'
					/>
					<link
						rel='mask-icon'
						href='https://img.icons8.com/color/96/null/alarm-clock--v1.png'
						color=''
					/>
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='black-translucent'
					/>
					<meta
						name='apple-mobile-web-app-title'
						content='John Rommel Octaviano'
					/>
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='black' />
				</Head>
				<NavigationBar />
				<Spacer y={1} />
				<main>
					<DynamicClockCardWithNoSSR />
					<Spacer y={1} />
					<QueryClientProvider client={queryClient}>
						<QuoteCard />
					</QueryClientProvider>
					<Spacer y={1} />
					<Tasks />
					<Spacer y={1} />
				</main>
				<Footer />
				<Spacer y={1} />
			</Layout>
		</>
	);
}
