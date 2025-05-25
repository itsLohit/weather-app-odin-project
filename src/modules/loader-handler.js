const showLoader = () => {
  document.getElementById('loader').style.display = 'block';
};

const hideLoader = () => {
  document.getElementById('loader').style.display = 'none';
};

export { showLoader, hideLoader };
