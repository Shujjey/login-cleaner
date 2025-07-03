const dummyAccounts = [
  { id: 1, platform: 'Google', email: 'user1@gmail.com' },
  { id: 2, platform: 'Facebook', email: 'user2@facebook.com' },
  { id: 3, platform: 'Twitter', email: 'user3@twitter.com' }
];

const LOCAL_KEY = 'savedAccounts';
const accountList = document.getElementById('account-list');
const restoreBtn = document.getElementById('restore-btn');

function loadAccounts() {
  const saved = localStorage.getItem(LOCAL_KEY);
  return saved ? JSON.parse(saved) : dummyAccounts;
}

function saveAccounts(accounts) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(accounts));
}

function renderAccounts(accounts) {
  accountList.innerHTML = '';

  if (accounts.length === 0) {
    accountList.innerHTML = '<p>🎉 No linked logins!</p>';
    return;
  }

  accounts.forEach(acc => {
    const div = document.createElement('div');
    div.className = 'account';
    div.innerHTML = `
      <div>
        <strong>${acc.platform}</strong><br />
        <small>${acc.email}</small>
      </div>
      <button onclick="deleteAccount(${acc.id})">🗑️</button>
    `;
    accountList.appendChild(div);
  });
}

function deleteAccount(id) {
  const accounts = loadAccounts().filter(acc => acc.id !== id);
  saveAccounts(accounts);
  renderAccounts(accounts);
}

function restoreAll() {
  saveAccounts(dummyAccounts);
  renderAccounts(dummyAccounts);
}

document.addEventListener('DOMContentLoaded', () => {
  renderAccounts(loadAccounts());
});

restoreBtn.addEventListener('click', restoreAll);
