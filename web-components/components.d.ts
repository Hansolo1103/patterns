/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {
  interface HTMLCobContactFormElement extends HTMLStencilElement {
    /**
     * Defaults to `https://contactform.boston.gov/emails` but can be set for development testing.
     */
    'action': string;
    /**
     * Pre-fills the subject field in the form.
     */
    'defaultSubject': string;
    /**
     * Hide the modal.
     */
    'hide': () => void;
    /**
     * Show the modal.
     */
    'show': () => void;
    /**
     * Email address to send the form contents to. Defaults to **feedback@boston.gov**.
     */
    'to': string;
    /**
     * HTTP Authorization header token. Needs to match an API token in the `contactform.boston.gov` database.
     */
    'token': string;
    /**
     * Whether or not the modal is shown. Defaults to hidden.
     */
    'visible': boolean;
  }
  var HTMLCobContactFormElement: {
    prototype: HTMLCobContactFormElement;
    new (): HTMLCobContactFormElement;
  };
  interface HTMLElementTagNameMap {
    'cob-contact-form': HTMLCobContactFormElement;
  }
  interface ElementTagNameMap {
    'cob-contact-form': HTMLCobContactFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cob-contact-form': JSXElements.CobContactFormAttributes;
    }
  }
  namespace JSXElements {
    export interface CobContactFormAttributes extends HTMLAttributes {
      /**
       * Defaults to `https://contactform.boston.gov/emails` but can be set for development testing.
       */
      'action'?: string;
      /**
       * Pre-fills the subject field in the form.
       */
      'defaultSubject'?: string;
      /**
       * Email address to send the form contents to. Defaults to **feedback@boston.gov**.
       */
      'to'?: string;
      /**
       * HTTP Authorization header token. Needs to match an API token in the `contactform.boston.gov` database.
       */
      'token'?: string;
      /**
       * Whether or not the modal is shown. Defaults to hidden.
       */
      'visible'?: boolean;
    }
  }
}


declare global {
  interface HTMLCobMapEsriLayerElement extends HTMLStencilElement {
    /**
     * If the layer is showing icons, use the [markercluster](https://github.com/CityOfBoston/Leaflet.markercluster) Leaflet plugin to show nearby icons as a single dot until you zoom in.
     */
    'clusterIcons': boolean;
    /**
     * For polygon layers, the color for the borders. (The fill will be a semi-transparent version of this color).
     */
    'color': string;
    /**
     * Boolean attribute. If set, regions will be filled in with the color attribute at 20% opacity. Also causes the legend to show a box rather than a straight line for this layer.
     */
    'fill': boolean;
    /**
     * If set, the color to use for polygon borders if the mouse is hovered over them.
     */
    'hoverColor': string;
    /**
     * URL to use as an icon for the layer’s features, and to show in the legend for this layer.
     */
    'iconSrc': string;
    /**
     * String to show on the legend for this layer. 
     */
    'label': string;
    /**
     * A Mustache template to use to generate the contents of a Leaflet popup for the layer’s features. Its context will be the feature’s properties. To specify the template in a more editor-friendly way, use the `popup` slot and a `<script>` tag.
     */
    'popupTemplate': string;
    /**
     * Identifier string for the layer. Must be unique within the map. 
     */
    'uid': string;
    /**
     * URL for an ArcGIS feature layer. 
     */
    'url': string;
  }
  var HTMLCobMapEsriLayerElement: {
    prototype: HTMLCobMapEsriLayerElement;
    new (): HTMLCobMapEsriLayerElement;
  };
  interface HTMLElementTagNameMap {
    'cob-map-esri-layer': HTMLCobMapEsriLayerElement;
  }
  interface ElementTagNameMap {
    'cob-map-esri-layer': HTMLCobMapEsriLayerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cob-map-esri-layer': JSXElements.CobMapEsriLayerAttributes;
    }
  }
  namespace JSXElements {
    export interface CobMapEsriLayerAttributes extends HTMLAttributes {
      /**
       * If the layer is showing icons, use the [markercluster](https://github.com/CityOfBoston/Leaflet.markercluster) Leaflet plugin to show nearby icons as a single dot until you zoom in.
       */
      'clusterIcons'?: boolean;
      /**
       * For polygon layers, the color for the borders. (The fill will be a semi-transparent version of this color).
       */
      'color'?: string;
      /**
       * Boolean attribute. If set, regions will be filled in with the color attribute at 20% opacity. Also causes the legend to show a box rather than a straight line for this layer.
       */
      'fill'?: boolean;
      /**
       * If set, the color to use for polygon borders if the mouse is hovered over them.
       */
      'hoverColor'?: string;
      /**
       * URL to use as an icon for the layer’s features, and to show in the legend for this layer.
       */
      'iconSrc'?: string;
      /**
       * String to show on the legend for this layer. 
       */
      'label'?: string;
      /**
       * Sent on load and when the configuration changes so that the parent <cob-map> can update the layer’s contents or appearance.
       */
      'onCobMapEsriLayerConfig'?: (event: CustomEvent) => void;
      /**
       * A Mustache template to use to generate the contents of a Leaflet popup for the layer’s features. Its context will be the feature’s properties. To specify the template in a more editor-friendly way, use the `popup` slot and a `<script>` tag.
       */
      'popupTemplate'?: string;
      /**
       * Identifier string for the layer. Must be unique within the map. 
       */
      'uid'?: string;
      /**
       * URL for an ArcGIS feature layer. 
       */
      'url'?: string;
    }
  }
}


declare global {
  interface HTMLCobMapElement extends HTMLStencilElement {
    /**
     * Header to show above the address search box. Defaults to “Address search”
     */
    'addressSearchHeading': string;
    /**
     * String to use as the placeholder in the address search box (if visible). Defaults to “Search for an address…”
     */
    'addressSearchPlaceholder': string;
    /**
     * If provided, clicking on the search result markers from an address search will open this layer’s popup. If there’s only one search result, the popup will be opened automatically.
     */
    'addressSearchPopupLayerUid': string | null;
    /**
     * URL for an ArcGIS tiled layer basemap. Default to our custom City of Boston basemap, layered over a generic Esri basemap.
     */
    'basemapUrl': string;
    /**
     * Title for the map. Shown on the collapse / expand header at mobile widths.
     */
    'heading': string;
    /**
     * Position to center the map on to start. Will be updated as the map is moved by the user. Changes to this will move the map.
     */
    'latitude': number;
    /**
     * Position to center the map on to start. Will be updated as the map is moved by the user. Changes to this will move the map.
     */
    'longitude': number;
    /**
     * Test attribute to make the overlay open automatically at mobile widths. Only used so that we can take Percy screenshots of the overlay.
     */
    'openOverlay': boolean;
    /**
     * Boolean attribute for whether to put a search box for addresses in the overlay.
     */
    'showAddressSearch': boolean;
    /**
     * Boolean attribute for whether to put a map legend in the overlay.
     */
    'showLegend': boolean;
    /**
     * Boolean attribute for whether to show zoom buttons in the bottom right of the map.
     */
    'showZoomControl': boolean;
    /**
     * Zoom level for the map. Will be updated as the map is zoomed. Changes to this will zoom the map.
     */
    'zoom': number;
  }
  var HTMLCobMapElement: {
    prototype: HTMLCobMapElement;
    new (): HTMLCobMapElement;
  };
  interface HTMLElementTagNameMap {
    'cob-map': HTMLCobMapElement;
  }
  interface ElementTagNameMap {
    'cob-map': HTMLCobMapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cob-map': JSXElements.CobMapAttributes;
    }
  }
  namespace JSXElements {
    export interface CobMapAttributes extends HTMLAttributes {
      /**
       * Header to show above the address search box. Defaults to “Address search”
       */
      'addressSearchHeading'?: string;
      /**
       * String to use as the placeholder in the address search box (if visible). Defaults to “Search for an address…”
       */
      'addressSearchPlaceholder'?: string;
      /**
       * If provided, clicking on the search result markers from an address search will open this layer’s popup. If there’s only one search result, the popup will be opened automatically.
       */
      'addressSearchPopupLayerUid'?: string | null;
      /**
       * URL for an ArcGIS tiled layer basemap. Default to our custom City of Boston basemap, layered over a generic Esri basemap.
       */
      'basemapUrl'?: string;
      /**
       * Title for the map. Shown on the collapse / expand header at mobile widths.
       */
      'heading'?: string;
      /**
       * Position to center the map on to start. Will be updated as the map is moved by the user. Changes to this will move the map.
       */
      'latitude'?: number;
      /**
       * Position to center the map on to start. Will be updated as the map is moved by the user. Changes to this will move the map.
       */
      'longitude'?: number;
      /**
       * Test attribute to make the overlay open automatically at mobile widths. Only used so that we can take Percy screenshots of the overlay.
       */
      'openOverlay'?: boolean;
      /**
       * Boolean attribute for whether to put a search box for addresses in the overlay.
       */
      'showAddressSearch'?: boolean;
      /**
       * Boolean attribute for whether to put a map legend in the overlay.
       */
      'showLegend'?: boolean;
      /**
       * Boolean attribute for whether to show zoom buttons in the bottom right of the map.
       */
      'showZoomControl'?: boolean;
      /**
       * Zoom level for the map. Will be updated as the map is zoomed. Changes to this will zoom the map.
       */
      'zoom'?: number;
    }
  }
}


declare global {
  interface HTMLCobVizElement extends HTMLStencilElement {
    /**
     * A JSON string or equivalent object that defines the map and layers. The schema for this config comes from VizWiz, so it won’t be documented here.  Any attributes prefixed with `map-` will be passed on to the generated `<cob-map>` component. _E.g._ `map-id` or `map-style`.
     */
    'config': string;
  }
  var HTMLCobVizElement: {
    prototype: HTMLCobVizElement;
    new (): HTMLCobVizElement;
  };
  interface HTMLElementTagNameMap {
    'cob-viz': HTMLCobVizElement;
  }
  interface ElementTagNameMap {
    'cob-viz': HTMLCobVizElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cob-viz': JSXElements.CobVizAttributes;
    }
  }
  namespace JSXElements {
    export interface CobVizAttributes extends HTMLAttributes {
      /**
       * A JSON string or equivalent object that defines the map and layers. The schema for this config comes from VizWiz, so it won’t be documented here.  Any attributes prefixed with `map-` will be passed on to the generated `<cob-map>` component. _E.g._ `map-id` or `map-style`.
       */
      'config'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
