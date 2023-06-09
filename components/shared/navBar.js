import renderToDOM from '../../utils/renderToDom';

const navBar = (user) => {
  console.warn(user);
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid nav-css">
        <a class="navbar-brand title" href="#">Vocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link nav-css" href="#" id="my-vocabulary">
                My Vocabulary <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-css" href="#" id="community">Community</a>
            </li>
          </ul>
        </div>
        <button class="create-btn" id="add-vocabulary-btn" data-bs-toggle="modal" data-bs-target="#vocabulary-modal">Create Vocabulary</button>
        <button class="create-btn" id="add-category-btn" data-bs-toggle="modal" data-bs-target="#category-modal">Create Category</button>
        <span class="welcome">${user.displayName} <em>[${user.uid}]</em></span>
        <div id="logout-form-container"></div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
