'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function () {
  var WinsizeNotifier = function () {
    function WinsizeNotifier() {
      _classCallCheck(this, WinsizeNotifier);

      var oldEl = document.getElementById(this._getID()); // Old element

      if (oldEl == null) {
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


    _createClass(WinsizeNotifier, [{
      key: '_init',
      value: function _init() {
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

    }, {
      key: '_getID',
      value: function _getID() {
        return 'winsize-notifier';
      }

      /**
       * Set the ID attribute of the element
       *
       */

    }, {
      key: '_setId',
      value: function _setId() {
        this._el.setAttribute('id', this._getID());
      }

      /**
       * Determine the dimension of the browser window
       *
       */

    }, {
      key: '_updateDimension',
      value: function _updateDimension() {
        this._el.innerHTML = window.innerWidth + ' x ' + window.innerHeight + ' pixels';
      }

      /**
       * Append the element to the body
       *
       */

    }, {
      key: '_addEl',
      value: function _addEl() {
        document.body.appendChild(this._el);
      }

      /**
       * Event listeners
       *
       */

    }, {
      key: '_events',
      value: function _events() {
        var that = this;
        window.addEventListener('resize', function () {
          that._updateDimension();
        });
      }
    }]);

    return WinsizeNotifier;
  }();

  new WinsizeNotifier();
}();
