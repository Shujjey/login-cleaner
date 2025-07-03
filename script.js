function checkLogins() {
  const loginList = document.getElementById("loginList");
  const passkeyList = document.getElementById("passkeyList");

  // Show loading
  loginList.innerHTML = "<li>🔄 Checking logins...</li>";
  passkeyList.innerHTML = "<li>🔄 Checking passkeys...</li>";

  setTimeout(() => {
    // Fake linked accounts
    const linkedAccounts = [
      { provider: "Google", status: "Connected ✅" },
      { provider: "Facebook", status: "Not Connected ❌" },
      { provider: "Twitter", status: "Connected ✅" }
    ];

    // Fake passkeys
    const passkeys = [
      { device: "iPhone 13 Pro", added: "May 5, 2024" },
      { device: "MacBook Air", added: "Jan 20, 2024" }
    ];

    // Show linked accounts
    loginList.innerHTML = "";
    linkedAccounts.forEach(account => {
      const li = document.createElement("li");
      li.textContent = `${account.provider}: ${account.status}`;
      loginList.appendChild(li);
    });

    // Show passkeys
    passkeyList.innerHTML = "";
    passkeys.forEach(key => {
      const li = document.createElement("li");
      li.textContent = `${key.device} (Added: ${key.added})`;
      passkeyList.appendChild(li);
    });

  }, 1000); // simulate loading
}
