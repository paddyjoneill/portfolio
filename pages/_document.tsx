import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }
    render() {
        return (
            <Html>
                <Head >
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=optional" rel="stylesheet" />
                </Head>
                <body className="leading-normal tracking-normal text-white gradient">
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument