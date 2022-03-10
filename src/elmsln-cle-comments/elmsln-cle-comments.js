import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-styles/element-styles/paper-item-styles.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import '@polymer/neon-animation/neon-animation.js';

/**
 * @customElement
 * @polymer
 */
class ElmslnCleComments extends PolymerElement {
  static get template() {
    return html`
      <style include="paper-item-styles">
        :host {
          display: block;
        }
        .card-actions a {
          text-decoration: none;
          color: var(--paper-orange-a700);
        }
      </style>
      <paper-card heading="Title" elevation="5">
        <div class="card-content">
          Hey you did a great job on this submission!
        </div>
        <div class="card-actions">
          <a href="node/5#comments" tabindex="-1">
            <paper-button raised id="view">View</paper-button>
          </a>
          <paper-tooltip for="view" animation-delay="0">View comment</paper-tooltip>
          <a href="node/5/comment/6/edit" tabindex="-1">
            <paper-button id="edit">Edit</paper-button>
          </a>
          <paper-tooltip for="edit" animation-delay="0">Edit comment</paper-tooltip>
          <a href="node/5/comment/6/delete" tabindex="-1">
            <paper-icon-button icon="icons:delete-forever" id="delete">Delete</paper-icon-button>
          </a>
          <paper-tooltip for="delete" animation-delay="0">Delete comment forever!</paper-tooltip>
        </div>
      </paper-card>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'elmsln-cle-comments'
      }
    };
  }
}

window.customElements.define('elmsln-cle-comments', ElmslnCleComments);
