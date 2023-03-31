import React from "react";

function BMI() {
  return (
    <div className="BMISection">
      <div className="container mb-5">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-10">
            <h3 className="text-center">Vücut Kitle İndeksi Nedir?</h3>
            <p>
              Vücut kitle indeksi, boy kilo endeksi olarak da bilinen, kişinin
              ağırlık ve boy değerleri kullanılarak hesaplanan bir sayıdır.
              Formülde kullanılan vücut ağırlığı, kilogram, boy ise metre
              cinsinden alınarak hesaplama yapılır. Vücut kitle endeksi
              hesaplama sonucunda çıkan değer ile kişinin zayıf, normal
              ağırlıkta, hafif şişman ya da obez olması gibi bir sınıflama
              yapılır. Fakat bu değer ile vücut yağ oranı ölçülmez. Yağ, kas, su
              gibi değerlerin miktarları belirlemede sadece genel bir tablo
              çizilmiş olur. Ana kullanım amacı kişinin boyuna göre sağlıklı
              vücut ağırlığında olup olmadığını belirlemektir. Kısaca vücut
              kitle indeksi, kişinin fazla kilolu ya da zayıf olduğunu gösteren
              bir ölçüttür; fakat vücut içerisindeki yağ, kas gibi değerleri
              bize vermez.
            </p>
            <h3 className="text-center">
              Boy Kilo İndeksi ile İdeal Kilo Hesaplanır mı?
            </h3>
            <p>
              Zayıflık, normal ağırlık, şişmanlık ve obezite için belirlenen
              değerler çok genel kabul edilir. Bu değerler kişinin yaşı,
              hamilelik durumu, ırkı gibi çeşitli faktörlere göre değişebilir.
              Örneğin asyalı kişilerin obez kabul edilme değerleri bu nedenle
              daha küçüktür. Sporcularda ise artan kas kütlesi nedeniyle ağırlık
              fazla çıkacağı için vücut kitle indeksi yanlış kanıya neden
              olabilir. Bu sebeple de vücut kitle indeksi, özel durumu
              bulunmayan kişilerin ağırlıklarının riskli olup olmadığının bir ön
              göstergesi olarak kabul edilebilir. Sonuç sonrası kişiden alınan
              bel, kalça çevresi ve deri kıvrım kalınlığı ölçümü ile klinik
              olarak daha doğru değerlendirme yapılması ve yorumlanması
              sağlanabilir.
            </p>
            <h3 className="text-center">
              Vücut Kitle İndeksi Nasıl Hesaplanır?
            </h3>
            <p>
              Vücut kitle indeksi hesaplama için öncelikle kişinin ağırlığının
              tartılması ve boyunun ölçülmesi gerekir. Bu veriler yani boy ve
              kilo VKİ hesaplama için yeterli bilgilerdir. Fakat doğru bir
              değerlendirme için hesaplamanın güncel bilgiler ile yapılması
              önemlidir. BKİ hesaplaması için kişinin uygun şekilde tartılan
              ağırlığı boyunun karesine bölünür. Hesaplama sırasında ağırlık kg
              cinsinden, boy ise metre cinsinden olmalıdır. Ağırlık tartılması
              için en doğru vakit kişinin uyandıktan sonra açken ve tuvalet
              ihtiyacını giderdikten sonra yaptığı tartımdır. Her yaştan birey
              için ideal kilo hesaplama şekli aynıdır; fakat yaşa göre vücut
              kitle indeksi değerlendirme şekli değişebilir. Özellikle çocuklar
              ve yaşlılar için değerlendirme farklılıklar içerir. Çıkan sonuç
              kişinin yaşına göre belirli aralıklar içerisinde yorumlanır.
            </p>
            <h5>Örnek VKİ hesaplama;</h5>
            <p>Ağırlık: 58 kg</p>
            <p>Boy: 1,59 m</p>
            <p>VKİ: 58 / (1,59)*(1,59) = 22,9 kg/m2</p>
            <h3 className="text-center">Vücut Kitle İndeksi Değerleri</h3>
            <p>
              Vücut kitle endeksi, yetişkin bireyler için belirli değer
              aralıklarını içerir. Beden kitle indeksi hesaplandıktan sonra
              sonuçlar kişinin sağlığı için çeşitli fikirler verir. Fakat
              kadınlar için vücut kitle indeksi değerlerinin hamilelikte
              kullanımı doğru olmaz. Çünkü gelişen bebek ile birlikte annenin
              ağırlığı ve beslenme ihtiyacı da arttığı için vücut kitle indeksi
              de doğal olarak artış gösterir. Boy kilo endeksi hesaplama ile
              elde edilen değerlere göre sonuçlar yorumlanır. Kadın ve erkek
              yetişkinlerde çıkan sonuca göre kişinin ağırlığının
              değerlendirmesi şu aralıklara göre yapılır:
            </p>
            <ul>
              <li>
                18,5 kg/m2 ve daha düşük değerler ={" "}
                <span className="text-bold"> Zayıf</span>
              </li>
              <li>
                18,5 ve 24,9 kg/m2 arasındaki değerler =
                <span className="text-bold"> Normal ağırlıkta</span>
              </li>
              <li>
                25,0 ve 29,9 kg/m2 arasındaki değerler ={" "}
                <span className="text-bold">Kilolu</span>
              </li>
              <li>
                30,0 ve 34,9 kg/m2 arasındaki değerler =
                <span className="text-bold">1. derece obezite</span>
              </li>
              <li>
                35,0 ve 39,9 kg/m2 arasındaki değerler ={" "}
                <span className="text-bold">2. derece obezite</span>
              </li>
              <li>
                40 kg/m2 ve üzerindeki değerler =
                <span className="text-bold"> 3. derece obezite</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMI;
