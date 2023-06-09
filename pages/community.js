import renderToDOM from '../utils/renderToDom';

const communityVocabularyFilterActions = (array) => {
  let btnString = '<div class="d-flex justify-content-center gap-3"><button class="btn btn-success btn-lg mb-4" id="filter-community-btn--all">All</button>';
  // input list of categories
  array.forEach((item) => {
    // "--" here separates the id into 2 parts because 'filter-btn,categoryID' are 1 id.
    btnString += `<button class="btn btn-success btn-lg mb-4" id="filter-community-btn--${item.category_id}">${item.name}</button>`;
  });
  btnString += '</div>';
  btnString += `<div class="d-flex justify-content-between space-bottom"><input class="form-control mr-sm-2"
                id="search-community"
                placeholder="Search Community Vocabulary"
                aria-label="Search"/><select class="form-control" id="sort-community-id" required>
                <option value="">Choose Sort</option>
                <option value="alphabetically">Alphabetically</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option></select></div>`;
  renderToDOM('#filter-actions', btnString);
};

export default communityVocabularyFilterActions;
