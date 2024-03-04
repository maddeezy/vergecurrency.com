import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage();
    return {
      html, head, errorHtml, chunks,
    };
  }
  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
