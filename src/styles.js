const css = `
      #topperRoot {
        all: initial; /* blocking inheritance for all properties */
      }
      #topperRoot * {
        all: unset; /* allowing inheritance within #mydiv */
      }
      #topperRoot {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 999;
      }
      #topperIframeContainer {
        width: 640px;
        height: 480px;
        position: relative;
      }
      #topperIframe {
        width: 100%;
        height: 100%;
      }

      #topperCloseButton {
        color: white !important;
        position: absolute;
        margin: 8px;
      }

      button#topperCloseButton {
        font-family: inherit;
        font-size: 100%;
        padding: 0;
        box-shadow: none;
      }

      @media (max-width: 499px) {
        #topperIframeContainer {
          width: 385px;
          height: 480px;
        }
      }
      @media (min-width: 500px) and (max-width: 1000px) {
        #topperIframeContainer {
          width: 580px;
          height: 480px;
        }
      }
      @media (min-width: 1000px) {
        #topperIframeContainer {
          width: 640px;
          height: 480px;
        }
      }`;

module.exports = { css };
