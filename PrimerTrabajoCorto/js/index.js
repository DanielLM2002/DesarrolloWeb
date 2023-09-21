export class MiTarjeta extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.classList.add('mi-tarjeta');
    const title = document.createElement('h2');
    title.textContent = this.getAttribute('titulo');
    const content = document.createElement('p');
    content.textContent = this.getAttribute('contenido');
    wrapper.appendChild(title);
    wrapper.appendChild(content);
    shadow.appendChild(wrapper);
  }
}

customElements.define('mi-tarjeta', MiTarjeta);

export default MiTarjeta;



