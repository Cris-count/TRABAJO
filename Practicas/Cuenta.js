class CuentaBancaria{
#saldo    
    
    constructor(titular, SaldoInicial = 0){
        this.titular = titular;
        this.#saldo = SaldoInicial;
    }

    get saldo(){
        return this.#saldo;
    }

    depositar(monto){
        if (monto <= 0 ) throw new error("monto invalido");
        this.#saldo += monto;
    }

    retirar(monto){
        if (mondo <= 0 ) throw new error("monto invalido");
        if (monto > this.#saldo) throw new error("saldo insuficiente");
        this.#saldo -= monto;
    }

    resumen(){
        console.log(`Titular: ${this.titular}, Saldo: ${this.#saldo}`);
    }
}

const c = new CuentaBancaria("Anna", 1000);
c.depositar(500);
c.retirar(200);
c.resumen();
