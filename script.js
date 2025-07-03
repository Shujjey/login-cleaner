function checkLogins() {
  const loginList = document.getElementById("loginList");

  // Simulate a loading delay
  loginList.innerHTML = "<li>🔄 Checking logins...</li>";

  setTimeout(() => {
    // Fake data – this will be replaced with real checks later
    const linkedAccounts = [
      { provider: "Google", status: "Connected ✅" },
      { provider: "Facebook", status: "Not Connected ❌" },
      { provider: "Twitter", status: "Connected ✅" },
      { provider: "TikTok Passkey", status: "Not Linked ❌" }
    ];

    // Clear the list
    loginList.innerHTML = "";

    // Show each login status
    linkedAccounts.forEach(account => {
      const li = document.createElement("li");
      li.textContent = `${account.provider}: ${account.status}`;
      loginList.appendChild(li);
    });
  }, 1000); // 1 second delay
        }
