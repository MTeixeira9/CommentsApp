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
class DrupalComment extends PolymerElement {
  static get template() {
    return html`
      <style include="paper-item-styles">
        :host {
          display: inline-flex;
        }
        .card-actions a {
          text-decoration: none;
          color: var(--paper-orange-a700);
        }
      </style>
      <paper-card heading="{{commentTitle}}" elevation="5">
        <div class="card-content">
          <slot></slot>
        </div>
        <div class="card-actions">
          <template is="dom-if" if="{{actionView}}">
            <a href="{{actionView}}" tabindex="-1">
              <paper-button raised id="view">View</paper-button>
            </a>
            <paper-tooltip for="view" animation-delay="0">View comment</paper-tooltip>
          </template>
          <template is="dom-if" if="{{actionEdit}}">
            <a href="{{actionEdit}}" tabindex="-1">
              <paper-button id="edit">Edit</paper-button>
            </a>
            <paper-tooltip for="edit" animation-delay="0">Edit comment</paper-tooltip>
          </template>
          <template is="dom-if" if="{{actionDelete}}">
            <a href="{{actionDelete}}" tabindex="-1">
              <paper-icon-button icon="icons:delete-forever" id="delete">Delete</paper-icon-button>
            </a>
            <paper-tooltip for="delete" animation-delay="0">Delete comment forever!</paper-tooltip>
          </template>
        </div>
      </paper-card>
    `;
  }
  static get properties() {
    return {
      commentTitle: {
        type: String,
        value: 'Comment Title',
        reflectToAttribute: true,
        notify: true
      },
      actionView: {
        type: String,
        reflectToAttribute: true,
        notify: true
      },
      actionEdit: {
        type: String,
        reflectToAttribute: true,
        notify: true
      },
      actionDelete: {
        type: String,
        reflectToAttribute: true,
        notify: true
      }
    };
  }
}

window.customElements.define('drupal-comment', DrupalComment);
