function checkLogin(provider) {
  const resultDiv = document.getElementById('result');
  const isLinked = Math.random() > 0.5;
  if (isLinked) {
    resultDiv.innerHTML = `
      <p><strong>${provider}</strong> is <span style="color: green;">linked</span> to your account.</p>
      <button onclick="removeLogin('${provider}')">Remove ${provider} Login</button>
    `;
  } else {
    resultDiv.innerHTML = `<p><strong>${provider}</strong> is <span style="color: red;">not linked</span> to your account.</p>`;
  }
}

function removeLogin(provider) {
  document.getElementById('result').innerHTML = `
    <p><strong>${provider}</strong> login has been <span style="color: red;">removed</span>.</p>
  `;
}
