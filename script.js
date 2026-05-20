import { commands } from "./command.js";
const commandsData = commands;

const main = document.querySelector("main");

function generateWebsite() {
  main.innerHTML = "";

  commandsData.forEach((section) => {
    const sectionElement = document.createElement("section");
    sectionElement.id = section.id;

    let commandsHTML = "";

    section.commands.forEach((command) => {
      let optionsHTML = "";

      if (command.options) {
        optionsHTML = `
            <div class="block">
              <h4>Options</h4>

              <table>
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Description</th>
                    <th>Example</th>
                  </tr>
                </thead>

                <tbody>
                  ${command.options
                    .map(
                      (option) => `
                    <tr>
                      <td class="option">${option.option}</td>
                      <td>${option.description}</td>
                      <td><code>${option.example}</code></td>
                    </tr>
                  `,
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          `;
      }

      let examplesHTML = "";

      if (command.examples) {
        examplesHTML = `
            <div class="block">
              <h4>Examples</h4>

              ${command.examples
                .map(
                  (example) => `
                <div class="example">
                  <div class="example-title">${example.title}</div>
                  <pre>${example.command}</pre>
                </div>
              `,
                )
                .join("")}
            </div>
          `;
      }

      let notesHTML = "";

      if (command.notes) {
        notesHTML = `
            <div class="block">
              <h4>Important Notes</h4>

              ${command.notes
                .map(
                  (note) => `
                <div class="note">${note}</div>
              `,
                )
                .join("")}
            </div>
          `;
      }

      let warningHTML = "";

      if (command.warning) {
        warningHTML = `
            <div class="warning">
              <h4>Warning</h4>
              <p>${command.warning}</p>
            </div>
          `;
      }

      commandsHTML += `
          <div class="card command-card">
            <div class="card-header">
              <h3>${command.name}</h3>
              <p>${command.purpose}</p>
            </div>

            <div class="card-content">

              <div class="block">
                <h4>Syntax</h4>
                <pre>${command.syntax}</pre>
              </div>

              ${optionsHTML}
              ${examplesHTML}
              ${notesHTML}
              ${warningHTML}

            </div>
          </div>
        `;
    });

    sectionElement.innerHTML = `
        <h2>${section.category}</h2>

        <div class="cards">
          ${commandsHTML}
        </div>
      `;

    main.appendChild(sectionElement);
  });
}

generateWebsite();

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll(".command-card");

  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
