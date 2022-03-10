import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './drupal-comment.js';
import '@polymer/iron-ajax/iron-ajax.js';

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
      </style>
      <iron-ajax
        auto
        url="{{dataSource}}"
        handle-as="json"
        last-response="{{response}}"
      >
      </iron-ajax>
      <template is="dom-repeat" items="[[_toArray(response)]]" as="comment">
        <drupal-comment
        comment-title="{{comment.title}}"
        action-view="{{comment.view}}"
        action-edit="{{comment.edit}}"
        action-delete="{{comment.delete}}"
        id="commentBody"
        >
          {{comment.body}}
        </drupal-comment>
      </template>
    `;
  }
  static get properties() {
    return {
      dataSource: {
        type: String,
        notify: true
      },
      response: {
        type: Array,
        notify: true
      }
    };
  }

  _toArray(objt) {
    return Object.keys(objt).map(function(key) {
      return objt[key];
    });
  }
}

window.customElements.define('elmsln-cle-comments', ElmslnCleComments);
