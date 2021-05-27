console.log('App.js: loaded');

export class App {
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    formElement.addEventListener('submit', (e) => {
      // submitイベントの本来の動作を止める
      e.preventDefault();
      console.log(`入力欄の値: ${inputElement.value}`);
    });
  }
}