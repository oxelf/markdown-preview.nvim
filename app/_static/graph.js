class GeoGebraComponent extends HTMLElement {
    constructor() {
        super();
        console.log("GeoGebraComponent constructor");
    }

    // Define the observed attributes
    static get observedAttributes() {
        return ['graph'];
    }

    // Life cycle callback: called when the element is connected to the DOM
    connectedCallback() {
        this.render();
    }

    // Attribute changed callback
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'graph' && newValue !== oldValue) {
            this.render();
        }
    }

    // Render the GeoGebra iframe
    render() {
        // Get the graph attribute
        const graph = this.getAttribute('graph');
        console.log("graph", graph);
        if (!graph) return; // Return if graph attribute is empty or not set

        // Set the GeoGebra iframe URL
        // NOTE: This is a placeholder URL, please replace with the actual GeoGebra API or URL
        const geoGebraUrl = 'https://www.geogebra.org/classic';
        const iframeUrl = `${geoGebraUrl}?graph=${encodeURIComponent(graph)}`;

        // Create the iframe element
        const iframe = document.createElement('iframe');
        iframe.src = iframeUrl;
        iframe.frameBorder = '0';
        iframe.width = '500'; // Set a default width
        iframe.height = '500'; // Set a default height

        // Remove any existing iframe
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }

        // Add the iframe to the component
        this.appendChild(iframe);
    }
}

// Define the custom element
window.customElements.define('geo-gebra', GeoGebraComponent);
