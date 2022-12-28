const customActive = document.getElementsByClassName('percent');
const customHandler = document.getElementsByClassName('with-hendler');

[...customActive].forEach((el, i) => el.onclick = () => {
      el.className = 'custom__just active percent';
      customHandler[i].className = 'custom__just with-hendler';
    });

[...customHandler].forEach((el, i) => el.onclick = () => {
      el.className = 'custom__just active with-hendler';
  customActive[i].className = 'custom__just percent';
    });
