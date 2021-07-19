const cssString = `
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
        font-size: 16px;
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
        color: white;
        position: absolute;
        margin: 8px;
        cursor: pointer;
        transition: font-size 1s;
      }

      #topperCloseButton:hover{
        font-weight: normal;
        font-size: 1.1rem;
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

module.exports = { cssString };
