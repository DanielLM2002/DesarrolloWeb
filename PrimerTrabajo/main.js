const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="../css/style.css">
  <div class="container">       
    <article class="card">
        <div class="background">
        <img src="../assets/profile.jpg" alt="profile">
        </div>
        <div class='content'>
        <h2>Zack Wilson &#127468;&#127463;</h2>
        <p>
            Senior full-stack engineer at 
            <a href="https://google.com" title="Google">Google</a>
        </p>
        <p>Helping with:</p>
        <ul class="chips">
            <li class="chip">React.js</li>
            <li class="chip">Node.js</li>
            <li class="chip">PostgreSQL</li>
        </ul>
        <div class="action-buttons">
            <a href="#book-a-mentor" title="Book a lector">
            Book a lector
            </a>
            <a href="#learn-more" class="secondary" title="Learn More">
            Learn More
            </a>
        </div>
        </div>
    </article>
  </div>
`;

class miTarjeta extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("mi-tarjeta", miTarjeta);
