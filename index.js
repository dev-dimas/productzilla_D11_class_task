// 1. Buat sebuah class yang menyimpan data akun bank. Property yang disimpan adalah nomor rekening dan saldo. Pada class tersebut buatlah class method untuk :
//  - Menyimpan nomor rekening dan saldo
//  - Untuk deposit
//  - Tarik saldo
//  - Cek saldo
// 2. Buatlah minimal 2 instance dengan 2 rekening berbeda dan saldo yang berbeda

class BankAccount {
  noRekening;
  saldo;
  setNoRekeningAndSaldo(nomerRekening, saldo) {
    this.noRekening = nomerRekening;
    this.saldo = saldo;
  }
  doDeposit(nominal) {
    this.saldo += nominal;
  }
  pullCash(nominal) {
    if (this.saldo >= nominal) {
      return (this.saldo -= nominal);
    }
    return console.log(
      `Saldo anda hanya tersisa ${this.saldo}, tidak dapat melakukan penarikan sebesar ${nominal}. Pastikan saldo anda cukup!.`
    );
  }
  checkSaldo() {
    return this.saldo;
  }
}

console.log('==== Rekening 1 ====');
const rekeningDimasBCA = new BankAccount();
rekeningDimasBCA.setNoRekeningAndSaldo(13309418089, 100_000);
rekeningDimasBCA.doDeposit(20_000);
rekeningDimasBCA.pullCash(130_000);
const saldoRekeningDimasBCA = rekeningDimasBCA.checkSaldo();
console.log(saldoRekeningDimasBCA);

console.log('\n==== Rekening 2 ====');
const rekeningDimasMandiri = new BankAccount();
rekeningDimasMandiri.setNoRekeningAndSaldo(56022937460, 500_000);
rekeningDimasMandiri.doDeposit(100_000);
rekeningDimasMandiri.pullCash(130_000);
const saldoRekeningDimasMandiri = rekeningDimasMandiri.checkSaldo();
console.log(saldoRekeningDimasMandiri);
