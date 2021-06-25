function toper () {
        const iframeContainer = document.createElement("div");
        const iframe = document.createElement("iframe");
        iframeContainer.setAttribute("id", "iframeContainer");
        iframe.setAttribute("id", "iframe");
        iframe.setAttribute("src", "https://mvp-pages.vercel.app/");
        const htmlRef = document.querySelector("html");
        iframeContainer.appendChild(iframe);
        htmlRef.insertBefore(iframeContainer, htmlRef.firstChild);

        // htmlRef.appendChild(iframeContainer);
        console.log("Images/Files are fully loaded");
};
