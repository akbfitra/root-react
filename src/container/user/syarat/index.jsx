import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'



import './css/style.css';
import {  Container, Row, Col, Button, Table} from 'react-bootstrap'
import { logoutProcess } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const SyaratDanKetentuan = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
    <Navbar/>
      <div id="syarat-ketentuan">
          <Container>
            
            <Row>
              <Col md={12} lg={12} >
                <div className="part-one">
                <Row>
                <Col>
                  <h3 className="title-one text-center"><strong>Syarat & Ketentuan</strong></h3>
                  <hr className=""/>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                  <Table borderless size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td style={{width:'10px'}}><h4><strong>I.</strong></h4></td>
                      <td><h4><strong>KETENTUAN UMUM</strong></h4></td>
                    </tr>
                    <tr>
                      <td>1.1</td>
                      <td>Survplus.id merupakan portal penyelenggara survei secara daring (online) yang mempertemukan antara surveyor dengan responden. Secara umum dapat digambarkan bahwa portal ini merupakan alat bagi surveyor untuk menyusun dan mempublikasikan lembar kuesionernya, untuk mendapatkan jawaban dari para responden sesuai dengan kriteria yang ditentukan.</td>
                    </tr>
                    <tr>
                      <td>1.2</td>
                      <td>Surveyor yaitu pihak yang membutuhkan pendapat untuk dijadikan pertimbangan dalam pengambilan keputusan. Adapun Responden yaitu pihak yang memberikan pendapat tentang sesuatu hal yang ditanyakan/dibutuhkan oleh surveyor.</td>
                    </tr>
                    <tr>
                      <td>1.3</td>
                      <td>Akses kedalam survplus.id secara penuh hanya diberikan bagi surveyor dan responden yang telah melakukan pendaftaran dan akunnya telah dinyatakan aktif.</td>
                    </tr>
                    <tr>
                      <td>1.4</td>
                      <td>Selanjutnya, pada syarat dan ketentuan penggunaan ini, penggunaan kata “kami” merujuk pada Tim Pengelola Survplus, sedangkan penyebutan “survplus.id” merujuk pada portal dan sistem aplikasi di dalamnya.</td>
                    </tr>
                    <tr>
                      <td>1.5</td>
                      <td>Sekiranya diperlukan untuk kepentingan dan peningkatan kenyamanan surveyor, responden, dan kami sendiri, kami akan terus memperbarui Syarat dan Ketentuan Penggunaan ini dari waktu ke waktu dengan menerbitkan versi terbaru di situs web kami. Kami akan memberikan pemberitahuan pada saat ketentuan baru akan diberlakukan. Ketentuan baru tidak akan mempengaruhi pelaksanaan survei yang tengah berjalan.</td>
                    </tr>
                    <tr>
                      <td>1.6</td>
                      <td>Sekiranya terdapat perselisihan, baik antara responden dengan surveyor maupun dengan Survplus, maka penyelesaian secara kekeluargaan lebih dikedepankan.</td>
                    </tr>
                  </tbody>
                </Table>
                  
                </Col>
              </Row>

              <Row className="m-t-15">
                <Col md={12} lg={12}>
                <Table borderless size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td style={{width:'10px'}}><h4><strong>II.</strong></h4></td>
                      <td><h4><strong>KEBIJAKAN PRIVASI</strong></h4></td>
                    </tr>
                    <tr>
                      <td>2.1</td>
                      <td>Kami berkomitmen untuk menjaga privasi pengguna portal survplus.id. Kami menyimpan semua data pribadi Anda di server, komputer pribadi, dan perangkat seluler yang aman dari pencurian data oleh pihak luar.</td>
                    </tr>
                    <tr>
                      <td>2.2</td>
                      <td>Kami tidak melakukan pelacakan dan perekaman data penggunaan yang meliputi alamat IP Anda, geografis lokasi, jenis dan versi browser, sistem operasi, lama kunjungan, tampilan halaman dan jalur navigasi situs web, serta informasi tentang waktu, frekuensi, dan pola penggunaan layanan Anda.</td>
                    </tr>
                    <tr>
                      <td>2.3</td>
                      <td>Kami hanya melakukan perekaman data-data yang sudah Anda isikan pada saat melakukan pendaftaran. Selain itu, kami juga melakukan perekaman terhadap data yang diisikan pada saat surveyor maupun tim Survplus menyusun lembar kuesioner maupun pada saat responden mengisi jawaban pada lembar kuesioner tersebut.</td>
                    </tr>
                    <tr>
                      <td>2.4</td>
                      <td>Jawaban pada lembar kuesioner yang diisi oleh reponden akan tetap bersifat anonim. Data nama dan nomor KTP tiap-tiap responden tidak akan diberikan kepada surveyor maupun pihak lainnya.</td>
                    </tr>
                    <tr>
                      <td>2.5</td>
                      <td>Kami juga melakukan perekaman terhadap data transaksi pengisian saldo yang dilakukan oleh surveyor, pembayaran oleh surveyor dan pemasukan saldo yang diterima oleh responden, serta pencairan saldo yang dilakukan oleh responden dan surveyor. Hal ini dilakukan untuk menjaga akuntabilitas setiap transaksi keuangan yang dilakukan melalui survplus.id.</td>
                    </tr>
                    <tr>
                      <td>2.6</td>
                      <td>Selain itu kami melakukan perekaman data korespondensi antara surveyor dan responden dengan tim Survplus, sebagai bahan identifikasi permintaan yang sudah selesai dan masih dalam proses penyelesaian, serta sebagai bahan analisis untuk melakukan peningkatan pelayanan di masa yang akan datang.</td>
                    </tr>
                    <tr>
                      <td>2.7</td>
                      <td>Data yang direkam akan disimpan selamanya, kecuali data pada akun-akun yang telah dihapus yang baru akan dilakukan penghapusan 12 (dua belas) bulan setelah akun-akun tersebut tidak aktif.</td>
                    </tr>
                    <tr>
                      <td>2.8</td>
                      <td>Kami dapat mengungkapkan data pribadi Anda kepada penasihat hukum atau pendukung profesional lainnya untuk mendapatkan nasihat, namun tetap melakukannya di bawah kewajiban kerahasiaan.</td>
                    </tr>
                    <tr>
                      <td>2.9</td>
                      <td>Jika terdapat bagian dari bisnis atau operasi Survplus yang dijual atau dialihkan ke, atau diintegrasikan dengan, organisasi lain (atau jika kami tengah mengadakan negosiasi untuk tujuan tersebut), data pribadi Anda mungkin akan diungkapkan kepada organisasi tersebut namun tetap tidak akan mengungkap nama dan nomor KTP.</td>
                    </tr>
                  </tbody>
                </Table>
                </Col>
              </Row>

              <Row className="m-t-15">
                <Col md={12} lg={12}>
                <Table borderless size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td style={{width:'10px'}}><h4><strong>III.</strong></h4></td>
                      <td><h4><strong>SYARAT DAN KETENTUAN BAGI SURVEYOR</strong></h4></td>
                    </tr>
                    <tr>
                      <td>3.1</td>
                      <td>Secara umum tidak ada syarat tertentu bagi surveyor, kecuali batas usia minimal yaitu 17 (tujuh belas) tahun yang terkait dengan keleluasaan dalam melakukan transaksi perbankan. Bagi calon surveyor yang berusia di bawah 17 (tujuh belas) tahun, dapat menggunakan akun orang tua maupun perwakilan dari institusi pendidikan yang menaungi.</td>
                    </tr>
                    <tr>
                      <td>3.2</td>
                      <td>Sebelum dapat memanfaatkan menu penyiapan lembar kuesioner, melakukan penyebaran kuesioner, verifikasi data isian kuesioner, dan menerima data dan rekapitulasi hasil isian kuesioner secara penuh, calon surveyor harus melakukan pendaftaran pada portal survplus.id. Dalam proses awal pendaftaran, calon surveyor mengisikan data nama lengkap, alamat email, nomor telpon seluler, dan kata sandi yang diinginkan.</td>
                    </tr>
                    <tr>
                      <td>3.3</td>
                      <td>Selanjutnya sistem Survplus akan melakukan pemeriksaan terhadap permintaan pendaftaran dari calon surveyor dan akan mengirimkan email agar calon surveyor melakukan verifikasi. Calon surveyor wajib melakukan verifikasi dengan mengikuti petunjuk yang diberikan pada email dengan subjek “verifikasi surveyor survplus”, agar dapat mengaktifkan akunnya. Setelah melakukan aktivasi akun, maka akun surveyor sudah langsung dapat digunakan dengan “log in” pada survplus.id.</td>
                    </tr>
                    <tr>
                      <td>3.4</td>
                      <td>Selanjutnya sistem Survplus akan melakukan pemeriksaan terhadap permintaan pendaftaran dari calon surveyor dan akan mengirimkan email agar calon surveyor melakukan verifikasi. Calon surveyor wajib melakukan verifikasi dengan mengikuti petunjuk yang diberikan pada email dengan subjek “verifikasi surveyor survplus”, agar dapat mengaktifkan akunnya. Setelah melakukan aktivasi akun, maka akun surveyor sudah langsung dapat digunakan dengan “log in” pada survplus.id.</td>
                    </tr>
                    <tr>
                      <td>3.5</td>
                      <td>Surveyor perlu melakukan pengisian ulang saldo yang diperlukan. Jumlah saldo minimal yang diperlukan adalah jumlah perkalian dari jumlah responden yang dibutuhkan dengan imbalan untuk masing-masing responden (100%), ditambahkan dengan 20% biaya untuk Survplus.</td>
                    </tr>
                    <tr>
                      <td>3.6</td>
                      <td>Terdapat 2 jenis saldo, yaitu Saldo Bebas dan Saldo Terikat. Saldo Bebas merupakan jumlah saldo yang dimiliki surveyor yang dapat digunakan secara bebas, baik untuk menambah studi baru maupun dilakukan penarikan. Adapun Saldo Terikat adalah jumlah saldo yang sudah dialokasikan sebagai imbalan kepada responden dan biaya untuk Survplus.</td>
                    </tr>
                    <tr>
                      <td>3.7</td>
                      <td>Tidak ada jumlah saldo minimal yang dapat dicairkan atau ditarik kembali oleh surveyor. Pencairan saldo dilakukan melalui transfer ke rekening bank yang diisikan pada menu “Isi Ulang Saldo”</td>
                    </tr>
                    <tr>
                      <td>3.8</td>
                      <td>Surveyor disarankan menyusun lembar kuesioner pada aplikasi komputer di luar survplus.id, sampai benar-benar matang, termasuk tata bahasa dan pengurutan soalnya. Diharapkan penuangan kedalam form survplus.id hanya bersifat penyalinan kedalam form yang disediakan.</td>
                    </tr>
                    <tr>
                      <td>3.9</td>
                      <td>Surveyor memulai studi baru dengan menekan simbol “Tambah Studi Baru”, yang dilanjutkan dengan penyalinan pertanyaan dan pilihan jawaban sesuai dengan petunjuk dan menu dalam form lembar kuesioner dalam menu “Tambah Studi Baru”.</td>
                    </tr>
                    <tr>
                      <td>3.10</td>
                      <td>Dalam menyusun lembar kuesionernya, surveyor dapat meminta pendampingan dari Tim Survplus dengan tanpa biaya tambahan. Namun demikian, dimungkinkan adanya layanan khusus yang memerlukan biaya tambahan sesuai kesepakatan sebelumnya.</td>
                    </tr>
                    <tr>
                      <td>3.11</td>
                      <td>Surveyor harus mengisi Judul Studi. Waktu yang Diperlukan untuk Menjawab, Jumlah Responden yang Dibutuhkan, Imbalan yang Diberikan untuk Responden, Tanggal Mulai, Tanggal Berakhir, dan Tujuan Studi. Seluruh isian merupakan kewenangan surveyor, termasuk menentukan imbalan bagi responden</td>
                    </tr>
                    <tr>
                      <td>3.12</td>
                      <td>Surveyor dapat memilih responden sesuai dengan profil demografi dan data ketertarikan calon responden. Pada bagian atas menu “Kriteria Responden” terdapat informasi jumlah responden yang tersedia berdasarkan pilihan variable-variable yang diinginkan.</td>
                    </tr>
                    <tr>
                      <td>3.13</td>
                      <td>Setelah surveyor selesai menyusun lembar kuesionernya, selanjutnya surveyor dapat melihat tampilan pra tinjau (preview) jawabannya sebelum disampaikan kepada responden melalui Survplus. Dengan menekan tombol “Simpan”, maka surveyor telah mengunci daftar pertanyaan dalam lembar kuesioner untuk kami verifikasi lebih lanjut. Namun demikian dalam tahapan ini surveyor masih dapat melakukan perbaikan/penyempurnaan terhadap lembar kuesionernya.</td>
                    </tr>
                    <tr>
                      <td>3.14</td>
                      <td>Kami akan melakukan verifikasi terhadap tujuan dan isi lembar kuesioner yang disusun oleh surveyor agar tidak memuat ujaran kebencian, menyinggung isu suku, agama, ras, dan antar golongan tertentu (SARA), bermuatan pornografi, serta yang bermuatan politik praktis. Keputusan hasil verifikasi dapat berupa persetujuan publikasi lembar kuesioner maupun permintaan agar surveyor melakukan revisi terhadap lembar kuesionernya.</td>
                    </tr>
                    <tr>
                      <td>3.15</td>
                      <td>Surveyor dapat melakukan pemantauan jawaban-jawaban yang masuk dari responden secara real time. Selanjutnya surveyor meneliti detail jawaban dan selanjutnya melakukan verifikasi untuk memberikan atau tidak memberikan persetujuan atas jawaban-jawaban yang masuk untuk selanjutnya diberikan imbalan.</td>
                    </tr>
                    <tr>
                      <td>3.16</td>
                      <td>Surveyor memiliki waktu untuk melakukan verifikasi atas jawaban-jawaban responden selama 3 (tiga) hari kalender setelah tanggal berakhirnya studi. Jika pada hari ke-4 masih terdapat jawaban yang belum diverifikasi, maka sistem Survplus akan secara otomatis menjadikan jawaban yang belum diverifikasi tersebut berstatus diterima.</td>
                    </tr>
                    <tr>
                      <td>3.17</td>
                      <td>Begitu surveyor memutuskan menerima hasil isian lembar kuesioner dari tiap responden, maka secara otomatis saldo akan terpotong. Besaran saldo yang akan terpotong adalah imbalan bagi responden (100%) ditambah 20% biaya untuk Survplus.</td>
                    </tr>
                    <tr>
                      <td>3.18</td>
                      <td>Imbalan hanya diberikan melalui layanan Survplus, yaitu berupa penambahan saldo dalam akun responden. Selain imbalan utama, surveyor dapat memberikan bonus imbalan tambahan sebagai bentuk apresiasi bagi para responden yang dipilih.</td>
                    </tr>
                    <tr>
                      <td>3.19</td>
                      <td>Surveyor dimungkinkan memberikan bonus tambahan bagi responden yang dipilih maupun untuk semua responden. Saldo yang akan terpotong sesuai dengan jumlah imbalan bagi responden, tidak ditambahkan 20% biaya untuk Survplus.</td>
                    </tr>
                    <tr>
                      <td>3.20</td>
                      <td>Surveyor berhak untuk menutup akunnya sewaktu-waktu. Sebelum dilakukan penutupan akun, surveyor harus memastikan agar sudah tidak ada lagi saldo yang tersisa atau saldo Rp0,-. Jika masih terdapat saldo yang tersisa pada saat akun dihapus, maka berarti surveyor menyerahkan sepenuhnya hak pemanfaatan saldo yang tersisa tersebut kepada Survplus.</td>
                    </tr>
                  </tbody>
                </Table>
                </Col>
              </Row>
              <Row className="m-t-15">
                <Col md={12} lg={12}>
                <Table borderless size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td style={{width:'10px'}}><h4><strong>IV.</strong></h4></td>
                      <td><h4><strong>SYARAT DAN KETENTUAN BAGI RESPONDEN</strong></h4></td>
                    </tr>

                    <tr>
                      <td>4.1</td>
                      <td>Secara umum tidak ada syarat tertentu bagi responden, kecuali batas usia minimal yaitu 17 (tujuh belas) tahun yang terkait dengan keleluasaan dalam melakukan transaksi perbankan.</td>
                    </tr>
                    <tr>
                      <td>4.2</td>
                      <td>Sekiranya surveyor membutuhkan jawaban dari orang yang berusia di bawah 17 tahun, maka surveyor akan mengarahkan agar responden menanyakan kepada yang bersangkutan, dan jawaban diberikan melalui akun responden.</td>
                    </tr>
                    <tr>
                      <td>4.3</td>
                      <td>Sebelum dapat melengkapi data demografi dan ketertarikan untuk menggunakan menu pengisian lembar kuesioner, calon responden harus melakukan pendaftaran pada portal survplus.id terlebih dahulu. Dalam proses awal pendaftaran, calon responden wajib mengisikan data nama lengkap, alamat email, nomor telpon seluler, dan kata sandi yang diinginkan.</td>
                    </tr>
                    <tr>
                      <td>4.4</td>
                      <td>Selanjutnya sistem Survplus akan melakukan pemeriksaan terhadap permintaan pendaftaran dari calon responden dan akan mengirimkan email agar calon responden melakukan verifikasi. Calon responden wajib melakukan verifikasi dengan mengikuti petunjuk yang diberikan pada email dengan subjek “verifikasi responden survplus”, agar dapat mengaktifkan akunnya. Setelah melakukan aktivasi akun, maka akun responden Anda sudah langsung dapat digunakan dengan “log in” pada survplus.id.</td>
                    </tr>
                    <tr>
                      <td>4.5</td>
                      <td>Setelah log in, responden akan mendapati menu Profil Responden, Ketertarikan, Studi, dan Tarik Saldo.</td>
                    </tr>
                    <tr>
                      <td>4.6</td>
                      <td>Pengisian data dalam menu Profil Responden dan Ketertarikan akan mempengaruhi peluang mendapatkan tawaran mengikuti survei. Semakin lengkap responden mengisi data dalam kedua menu tersebut, maka semakin besar kemungkinan untuk mendapatkan tawaran untuk mengikuti survey.</td>
                    </tr>
                    <tr>
                      <td>4.7</td>
                      <td>Menu Profil Responden merupakan data-data demografi responden, yang terdiri atas bagian data yang wajib diisi dan opsional. Data-data yang wajib diisi yaitu Nama Lengkap, email, dan nomor telepon seluler yang sudah terisi otomatis yang diambil dari data yang diisi pada saat pendaftaran. Data wajib lainnya yang wajib diisi yaitu Provinsi dan Kota/Kabupaten Domisili (tempat tinggal), Tanggal Lahir, dan Jenis Kelamin</td>
                    </tr>
                    <tr>
                      <td>4.8</td>
                      <td>Selain itu terdapat data-data yang tidak wajib diisi atau opsional, yaitu unggahan KTP, Tingkat Pendidikan, Pendapatan per Bulan, Status Keluarga, Bidang Pekerjaan, dan informasi Bagaimana Anda Mengetahui Survplus. Semakin lengkap responden mengisi data dalam kedua menu tersebut, maka semakin besar kemungkinan untuk mendapatkan tawaran untuk mengikuti survey.</td>
                    </tr>
                    <tr>
                      <td>4.9</td>
                      <td>Dalam menu Ketertarikan, terdapat beragam pertanyaan dari berbagai bidang, antara lain Bisnis dan Industri, Hiburan, Kebugaran, Makanan dan Minuman, Elektronik, dan lain-lain. Semakin lengkap responden mengisi data dalam kedua menu tersebut, maka semakin besar kemungkinan untuk mendapatkan tawaran untuk mengikuti survei.</td>
                    </tr>
                    <tr>
                      <td>4.10</td>
                      <td>Untuk melakukan pengisian kuesioner, responden dapat melihat menu Studi untuk Responden, yaitu pada tab “Sedang Berlangsung”. Selain itu, Survplus juga akan mengirimkan pemberitahuan pada saat terdapat survei yang sesuai dengan data profil dan ketertarikan responden, baik melalui email maupun pesan singkat ke nomor ponsel yang terdapat pada data profil.</td>
                    </tr>
                    <tr>
                      <td>4.11</td>
                      <td>Responden mengisi lembar kuesioner sesuai dengan petunjuk yang ada pada lembar kuesioner maupun keterangan lain yang berada di laman yang dibuka pada saat mengerjakan lembar kuesioner tersebut.</td>
                    </tr>
                    <tr>
                      <td>4.12</td>
                      <td>Responden harus mengisi kuesioner dengan jujur sesuai dengan pengetahuan dan pengalaman yang dimiliki. Apabila mewakili jawaban dari pihak lain, jawaban harus dituangkan secara benar dalam lembar kuesioner pada survplus.id. Surveyor dapat memberikan pertanyaan penguji kejujuran dan ketelitian responden dalam menjawab pertanyaan.</td>
                    </tr>
                    <tr>
                      <td>4.13</td>
                      <td>Setelah responden selesai menjawab pertanyaan atau melakukan instruksi yang diberikan, selanjutnya responden dapat melihat tampilan pra tinjau (preview) jawabannya sebelum disampaikan kepada surveyor. Dengan menekan tombol “Simpan”, maka responden telah mengunci jawabannya dan mengajukannya kepada surveyor.</td>
                    </tr>
                    <tr>
                      <td>4.14</td>
                      <td> Apabila telah disetujui oleh surveyor, responden akan mendapatkan imbalan berupa penambahan jumlah saldo dalam akun survplus.id. Rincian saldo yang sudah didapatkan dan yang tengah dilakukan verifikasi dapat dilihat pada menu “Studi untuk Responden”, pada tab “Telah Diajukan”.</td>
                    </tr>
                    <tr>
                      <td>4.15</td>
                      <td>Terdapat ketentuan jumlah saldo minimal yang dapat dicairkan, yaitu sebesar Rp 50.000,- (lima puluh ribu rupiah). Pencairan saldo dilakukan melalui transfer ke rekening bank yang diisikan pada menu “Tarik Saldo”. Dalam menu tersebut juga terdapat informasi riwayat saldo yang telah ditarik oleh responden.</td>
                    </tr>
                    <tr>
                      <td>4.16</td>
                      <td>Responden berhak untuk menutup akunnya sewaktu-waktu. Sebelum dilakukan penutupan akun, responden harus memastikan agar sudah tidak ada lagi saldo yang tersisa atau saldo Rp0,-. Jika masih terdapat saldo yang tersisa pada saat akun dihapus, maka berarti responden menyerahkan sepenuhnya hak pemanfaatan saldo yang tersisa tersebut kepada Survplus.</td>
                    </tr>
                  </tbody>
                </Table>
                </Col>
              </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    <Footer/>
    </>
  )
}

export default withRouter(SyaratDanKetentuan)