/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    const newAcct = new Account(this.nextAccountNumber, holder);
    newAcct.deposit(balance);
    this.accounts.push(newAcct);
    this.nextAccountNumber++;
    return newAcct.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {

  for (let i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts === 0) {
    return 0;
  }

  let totalAssets = 0;

  for (let i = 0; i < this.accounts.length; i++) {
    totalAssets += this.accounts[i].getBalance();
  }
  return totalAssets;
};
