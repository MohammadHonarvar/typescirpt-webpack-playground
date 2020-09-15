import {html, customElement, TemplateResult, LitElement, css} from 'lit-element';

// import {style} from './sample-css.js';

@customElement('pazh-sample-1')
export class PazhSample1 extends LitElement {
  static styles = [css`
    :host {
      display: block;
    }
  `];

  protected render(): TemplateResult {
    console.log('render');
    return html`<p>${process.env.PROJECT_NAME}</p>`;
  }
}
