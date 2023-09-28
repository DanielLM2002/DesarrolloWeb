// El HTML y CSS le pertencen a Jason Alexander https://github.com/atherosai/ui/tree/main/profile-cards-02

const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="styles.css">
<body>
    <div class="container">       
        <div class="card">
            <div class='background'>
                <img src="assets/profile.jpg" alt="background" />
            </div>
            <div class='content'>
                <h2>Daniel Lizano</h2>
                <p>
                    I'm a JavaScript full-stack engineer, love working with <em>React</em> and <em>Node.js</em>. 
                </p>
                <ul class="social-icons">
                    <li>
                        <a href="#twitter" title="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"
                            >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 
                                        10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5
                                        4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                >
                                </path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#instagram" title="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                 stroke-linecap="round" stroke-linejoin="round"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#threads" title="Threads">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                                 fill="none" stroke-linecap="round" stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7
                                        -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 
                                        3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
                                >
                                </path>
                             </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#linkedin" title="Linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                 class="feather feather-linkedin"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                            </svg>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</body>
`;

class miTarjeta extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("mi-tarjeta", miTarjeta);


