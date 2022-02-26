import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function Biography() {
  return (
    <ScrollView
      style={{ height: "100%", padding: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{ fontSize: 25, fontWeight: "700" }}>Zulfiya Isroilova</Text>
      <Text style={{ fontSize: 15, fontWeight: "700", paddingVertical: 10 }}>
        (1915 - 1996)
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "700", fontStyle: "italic" }}>
        Oʻzbek xalqining sevimli shoirasi, taniqli jamoat arbobi, Oʻzbekiston
        xalq shoiri Zulfiya Isroilova 1915 yil 1 martda Toshkentning Oʻqchi
        mahallasida degrez oilasida tugʻilgan. U xotin-qizlar bilim yurtida
        oʻqib yurgan vaqtlaridayoq (1931–1934) adabiy toʻgaraklarga qatnashib,
        sheʼrlar mashq qiladi.
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          fontStyle: "italic",
          paddingTop: 15,
        }}
      >
        Zulfiyaning “Men ish qizi” nomli birinchi sheʼri 1931 yil 17 iyulda
        “Ishchi” gazetasida bosilib chiqdi. “Hayot varaqlari” nomli ilk toʻplami
        oʻn yetti yoshida nashr etildi (1932). 1935–1938 yillarda Oʻzbekiston
        Fanlar akademiyasining Til va adabiyot instituti aspiranturasida tahsil
        oldi. 1938–1948 yillarda nashriyotlarda muharrir, boʻlim boshligʻi,
        1950–1953 yillarda esa “Oʻzbekiston xotin-qizlari” (hozirgi “Saodat”)
        jurnalida boʻlim boshligʻi, 1953–1985 yillarda esa bosh muharrir boʻlib
        ishladi. Zulfiya badiiy-estetik puxta sheʼr-dostonlari bilan Oydin,
        Muzayyana Alaviya, Xosiyat Tillaxonovalar safiga kirib keldi.
        Zulfiyaning ijodiy kamolotida oʻzbek va rus klassiklari, xalq ogʻzaki
        ijodiyoti va jahon adabiyoti anʼanalarining roli beqiyos boʻldi.
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          fontStyle: "italic",
          paddingTop: 15,
        }}
      >
        U oʻttizdan ziyod sheʼriy va nasriy kitoblar muallifi. Badiiy ijod
        sohasidagi xizmatlari uchun Davlat mukofoti, 1968 yil Javoharlaʼl Neru
        nomidagi xalqaro mukofot bilan taqdirlandi. Tinchlik va doʻstlikni
        tarannum etuvchi asarlari hamda taraqqiyparvar Osiyo va Afrika
        yozuvchilari harakatidagi faol ishtiroki uchun esa xalqaro “Nilufar”
        mukofotiga sazovor boʻldi (1970). Shoira Hindiston, Yugoslaviya, Shri
        Lanka, Misr, Birma, Avstriya kabi mamlakatlarda boʻldi. U 1956 yilda
        Osiyo va Afrika yozuvchilarining Dehlida oʻtkazilgan birinchi
        konferensiyasida qatnashib, mashhur “Mushoira” (1958) asarini yaratdi.
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          fontStyle: "italic",
          paddingTop: 15,
        }}
      >
        Zulfiyaning oʻn beshga yaqin majmualari rus tilida chop etilgan. Uning
        asarlari ingliz, nemis, hind, bolgar, xitoy, koreys, arab, fors, tojik,
        arman, qirgʻiz, tatar, turkman, boshqird, ozarbayjon va boshqa tillarga
        tarjima qilingan. Shoira N. Nekrasov, M. Lermontov, Vera Inber, Lesya
        Ukrainka, Edi Ognetsvet, Marvarid Dilboziy, Amrita Pritam asarlarini
        oʻzbek tiliga mahorat bilan tarjima qilgan.
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          fontStyle: "italic",
          paddingTop: 15,
        }}
      >
        Mustaqillik yillarida ibratli hayot kechirgan, keng ijtimoiy faoliyat
        olib borgan shoira Zulfiya betakror isteʼdodi, Vatanga muhabbati,
        olijanob insoniy fazilatlari, xalqimiz maʼnaviyatini yuksaltirishdagi
        xizmatlari uchun yuksak hurmat va eʼzozga sazovor boʻldi. Oʻzbekiston
        hukumati atoqli shoiraning madaniyatimiz taraqqiyotidagi katta
        xizmatlarini eʼtiborga olib 1999 yili Zulfiya nomidagi Davlat mukofotini
        taʼsis etdi.
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          fontStyle: "italic",
          paddingTop: 15,
          marginBottom: 50,
        }}
      >
        Ardoqli shoira tavalludining 100 yilligi esa Oʻzbekiston Respublikasi
        Prezidentining 2014 yil 31 oktyabrdagi qarori bilan (2015) keng koʻlamda
        nishonlandi, chinakam adabiyot bayramiga aylanib ketdi.
      </Text>
    </ScrollView>
  );
}
