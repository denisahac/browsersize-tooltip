'use strict';

!function() {
  class BrowserSizeTooltip {

    constructor() {
      var oldEl = document.getElementById(this._getID()); // Old element

      if(oldEl == null) {
        this._el = document.createElement('span');
        this._setId();
      } else {
        this._el = oldEl;
      }

      this._init(); // Initialize component
    }

    /**
     * Component initialization
     *
     */
    _init() {
      // Default styles
      this._el.style.position = 'fixed';
      this._el.style.bottom = '0';
      this._el.style.right = '0';
      this._el.style.zIndex = '999999';
      this._el.style.padding = '8px';
      this._el.style.backgroundColor = '#000000';
      this._el.style.color = '#FFFFFF';

      this._updateDimension(); // Calculate the dimension
      this._events(); // Events

      this._addEl(); // Append element
    }

    /**
     * The ID string of the element
     *
     * @return String. The ID of the element
     *
     */
    _getID() {
      return 'browsersize-tooltip-' + Date.now();
    }

    /**
     * Set the ID attribute of the element
     *
     */
    _setId() {
      this._el.setAttribute('id', this._getID());
    }

    /**
     * Determine the dimension of the browser window
     *
     */
    _updateDimension() {
      this._el.innerHTML = window.innerWidth + ' x ' + window.innerHeight + ' pixels';
    }

    /**
     * Append the element to the body
     *
     */
    _addEl() {
      document.body.appendChild(this._el);
    }

    /**
     * Event listeners
     *
     */
    _events() {
      var that = this;
      window.addEventListener('resize', function() {
        that._updateDimension(); 
      })
    }
  }

  new BrowserSizeTooltip();
}();