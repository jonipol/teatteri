import React from 'react';

import vanhaKuva from '../img/ristinkoulu.jpg';

const History = () => {

// TODO: Resize images
// TODO: On wide displays let images be next to each other
  return(
    <article>
      <div style={{width: '95%', margin: 'auto', marginBottom: '1em'}}>
        <img src={vanhaKuva} width='95%' alt='Ristin koulu vuonna 19xx'/>
      </div>
      <div style={{width: '95%', margin: 'auto'}}>
        <p>Talo on rakennettu vuonna 1897 Liperin kunnan kolmanneksi kansakouluksi, Kaatamon kylän kouluksi. Koulutyö uudessa koulurakennuksessa aloitettiin 4. lokakuuta 1897. Rakennus on Liperin vanhin edelleen käytössä oleva puurakenteinen koulurakennus.</p>
        <p>Sodan aikana, syksystä 1940 alkaen, koululla oli sotilaita majoitettuina ja koulun pihalla oli kenttäkeittiöt, joilla sotilaille keitettiin ruokaa. Sodan aikana koululla pätkittiin puuta talkoilla pieniksi paloiksi puukaasuautoja varten. Pilkkeet pakattiin paperisäkkeihin ja tässä työssä olivat myös lapset mukana</p>
        <p>Kun siirtolaisia alkoi tulla, he tulivat ensin koululle, josta heidät sitten sijoitettiin kylän taloihin, opettaja-Maija (Rummukainen) hoiti siirtolaisten sijoittamista. Siirtolaiset joutuivat majoittumaan aluksi koululla, jossa he nukkuivat patjoilla ja laittoivat ruokaa veistoluokan liimankeittohellalla.</p>
        <p>1940-luvulla koululla pidettiin kinkereitä, hartaushetkiä ja sekakuoron harjoituksia. Koululla oli myös lainakirjasto 30-luvulta saakka, kirjastosta saivat koululaiset lainata kirjoja, kyläkirjasto oli erikseen. 1970- ja 1980-luvuilla koulu oli iltaisin kansalaisopiston ryhmien käytössä.</p>
        <p>Koulutoimintaa rakennuksessa oli vuoteen 1983 saakka, jonka jälkeen kunta vuokrasi talon kokonaan Liperin harrastajateatteriyhdistykselle teatteritoimintaa varten. Teatteriesityksiä on esitetty rakennuksen takana olevassa rinteessä vuodesta 1974 alkaen</p>
        <p>Liperin harrastajateatteriyhdistys ry osti talon kunnalta teatteritaloksi 29.9.1998. Talo toimii myös kylätalona ja sitä käyttävät kylän muutkin yhdistykset.</p>
        <p>Taloa on kunnostettu kylän yhteiseksi tapahtumapaikaksi. Rakennuksessa olevat kaksi luokkaa on yhdistetty suuremmaksi tilaksi ja keittiötiloja on ajanmukaistettu. Talon kunnostus suoritettiin Leader-hankkeena ja kunnostukseen osallistuivat teatterilaisten lisäksi kylän muiden yhdistysten ahkerat jäsenet. Ahkerimpina talkoolaisina kunnostustyössä olivat Urho Tolvanen, Eljas Hyttinen, Pentti Miinalainen, Eero Nykänen ja Anssi Miinalainen. Ullakon portaat lahjoitti Kyösti Nissinen. Ansioituneena kahvinkeittäjänä talkoolaisille oli usein Sinikka Nykänen. Leader-hankkeen ”paperisodan” hoitelivat Heidi Mutanen ja Asko Ikonen.</p>
        <p>Teatteritaloa myös vuokrataan erilaisia juhlia ja muita tapahtumia varten, esimerkiksi häitä, syntymäpäiviä ja valmistujaisia on talossa vietetty. Talon vuokraamisesta voit kysyä puhelimitse numeroista 040 703 8447 tai 040 703 7478</p>
      </div>
      <div style={{width: '95%', margin: 'auto', marginTop: '1em'}}>
        <h4 style={{color: 'red'}}>tuore kuva koulusta samasta kuvakulmasta?</h4>
        <img src={vanhaKuva} width='95%' alt='Teatteritalo vuonna 2020'/>
      </div>
    </article>
  );
};

export default History;