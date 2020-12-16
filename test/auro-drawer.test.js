import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-drawer.js';

describe('auro-drawer', () => {
  it('auro-drawer is accessible', async () => {
    const el = await fixture(html`
      <auro-drawer open="true">
        <span slot="header">Blocking drawer</span>
        <span slot="content">Hello World!</span>
      </auro-drawer>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-drawer has footer content', async () => {
    const el = await fixture(html`
      <auro-drawer open="true">
        <span slot="header">Blocking drawer</span>
        <span slot="content">Hello World!</span>
        <span slot="footer"><button>Click</button></span>
      </auro-drawer>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-drawer custom element is defined', async () => {
    const el = await !!customElements.get("auro-drawer");

    await expect(el).to.be.true;
  });

  it('auro-drawer blocking does not render a close icon', async () => {
    const el = await fixture(html`
      <auro-drawer modal></auro-drawer>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.equal(null);
  });

  it('auro-drawer non-blocking renders a close icon', async () => {
    const el = await fixture(html`
      <auro-drawer></auro-drawer>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.not.equal(null);
  });

  it('auro-drawer closes on non-blocking background click', async () => {
    const el = await fixture(html`
      <auro-drawer>
        <span slot="header">It's a drawer</span>
        <span slot="content">Hello World!</span>
      </auro-drawer>
    `);

    const root = el.shadowRoot;
    const background = root.querySelector('#dialog-overlay');
    let listener = oneEvent(background, 'click');
    background.click();
    await listener;
    expect(el.getAttribute('dialogOverlay--open')).to.equal(null);
  });
});