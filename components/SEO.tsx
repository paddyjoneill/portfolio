import Head from "next/head";

interface Props {
    title: string
    description: string
}

const SEO = (props: Props) => {
    return <Head >
        <meta name="Description" content={props.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{props.title}</title>
    </Head>
}

export default SEO