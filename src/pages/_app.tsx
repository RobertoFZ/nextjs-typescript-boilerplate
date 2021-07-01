import type { AppProps } from 'next/app'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import { GlobalStyle } from 'components/layouts/GlobalStyle'
import environment from 'shared/constants/environment'
import '@fontsource/roboto'
import { ReactNode } from 'react'

const { bugsnagApiKey } = environment

if (bugsnagApiKey && bugsnagApiKey !== '') {
	Bugsnag.start({
		apiKey: environment.bugsnagApiKey,
		plugins: [new BugsnagPluginReact()],
		releaseStage: process.env.releaseStage,
		enabledReleaseStages: ['production', 'staging'],
	})
}

function MyApp({ Component, pageProps }: AppProps): ReactNode {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
