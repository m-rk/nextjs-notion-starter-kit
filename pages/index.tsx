import * as React from 'react'

export default function Home() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: black;
        }

        h1 {
            position: absolute;
            bottom: 0;
            z-index: 10;
            width: 100%;
            overflow: hidden;
            margin: 0 0 10vh 0;
            opacity: 0.8;
        }

        h1 img {
            height: 30vh;
        }
      `}</style>
      <h1><img src="/tangle-fade.svg" alt="Tangle" /></h1>

      <script src="/js/jquery.js"></script>
      <script src="/js/jquery.backstretch.min.js"></script>
      <script
      dangerouslySetInnerHTML={{
        __html: `
$.backstretch([
  'bg/carrizo.png',
  'bg/chicago.png',
  'bg/vietnam.png',
  'bg/parkerville.png',
], {
  width: 400,
  alignX: 'center',
  alignY: '0.8',
  duration: 30000,
  fade: 5000,
  fadeFirst: false
});
  `
}}
            />
    </>
  );
}