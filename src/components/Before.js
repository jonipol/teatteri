import React from 'react';
import '../app.css';

const Before = () => {


  return(
    <div className='before'>
      <ul>
        <li>Näytelmän kesto on noin 2 tuntia. Sisältäen n. 20 minuutin mittaisen väliajan.</li>
        <li>Näytelmän käsiohjelmia jaetaan ennen esitystä lippukassalla.</li>
        <li>Ryhmien, jotka saapuvat linja-autolla, olisi hyvä olla teatterilla noin 40 minuuttia ennen esityksen alkua, jotta linja-auto saadaan pysäköityä.</li>
        <li>Myös muiden autolla liikkuvien tulisi huomioida, että autot parkkeerataan n. 100 m päähän teatterista.</li>
        <li>Pyörätuolilla liikkuvien olisi hyvä ilmoittaa etukäteen, jotta voimme varata teille sopivat paikat.</li>
        <li>Ristin kesäteatteri pidättää itsellään oikeuden hintojen ja ohjelmiston muutoksiin.</li>
        <li>Esityksen tallentaminen (kuvaaminen, äänittäminen ym.) on kielletty.</li>
        <li>Muistakaa sulkea matkapuhelimenne esityksen ajaksi.</li>
        <h3 style={{paddingTop: '2vh'}}>
          Esityksen peruuntuminen
        </h3>
        <p>
          Ylivoimaisen esteen sattuessa (esim. näyttelijän sairastuminen) teatteri lunastaa takaisin ostetut pääsyliput lippua vastaan tai lipun voi
          vaihtaa johonkin toiseen esitykseen. Teatteri ei vastaa muista peruutusten tai force majore -tapausten asiakkaalle aiheuttamista kustannuksista.
        </p>
      </ul>
    </div>
  );
};

export default Before;