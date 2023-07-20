import bayar from'./app.module.css';

function App() {
  return (
 
    <div className={bayar.text}>
      <h3>Isi Form Dengan Pembayaran</h3>

      <div className={bayar.formGrid}>
        {/* Input sebelah kiri */}
        <div className={bayar.leftForm}>
          <input type="text" id="first-name" className={bayar.depan} placeholder="Nama Depan" />
          <input type="text" id="email" className={bayar.email} placeholder="Email" />
        </div>

        {/* Input sebelah kanan */}
        <div className={bayar.rightForm}>
          <input type="text" id="address" className={bayar.alamat} placeholder="Alamat Pengiriman" />
          <input type="text" id="phone" className={bayar.hp} placeholder="Telp/Hp" />
          <input type="text" id="last-name" className={bayar.nb} placeholder="Nama Belakang" />
        </div>

      </div>

      <div className={bayar.h4}>
          <h4>METODE PEMBAYARAN</h4>
        </div>

      <div className={bayar.logo}>
        <h5>Bank Transfer</h5>
        </div>

      <div className={bayar.h6}>
        <h6>Bank BCA an.Indocreativ No. 12345654</h6>
        </div>

        <div className={bayar.pp}>
          <input type="text" id="address"  placeholder="Proses Pembayaran" />
          </div>


    </div>
  );
}

export default App;
