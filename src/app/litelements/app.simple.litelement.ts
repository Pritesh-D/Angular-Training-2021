import { LitElement, customElement, html, property, css } from 'lit-element'

@customElement("simple-element")
export class SimpleLitElement extends LitElement {

    @property({ type: String }) inputMessage;
    @property({ type: Array }) list;
    constructor() {
        super();
        this.inputMessage = '123';
        this.list = new Array();
    }

    render() {
        return html`<div class="container">
        <h2>This is simple lit element</h2>
        <hr/>
        <span>Input message is <strong>${this.inputMessage}</strong></span>
        <hr/>
        <ul>
            ${this.list.map((d) => html`<li>${d}</li>`)}
        </ul>
        <hr/>
        <input type="button" value="Click Me" @click=${this.clickMe}>
        </div>`
    }

    clickMe(): void {
        let event = new CustomEvent('lit-click', {
            detail: {
                data: this.inputMessage.toUpperCase()
            },
            bubbles: true
        });
        this.dispatchEvent(event);
    }
}