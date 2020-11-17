import React from 'react';
import MapPageCards2 from './MapPageCards2';

class InSpace2 extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        astrolist:[
            {
                name: "Sergey Ryzhikov",
                flag: "./photos/Russia.png",
                astroImage: "./photos/AnatoliIvanishin.jpg",
                description: "Sergueï Nikolaïévitch Ryjikov (Сергей Николаевич Рыжиков) (aussi transcrit Ryzhikov) is a Russian cosmonaut ...",
                wiki: "https://en.wikipedia.org/wiki/Sergey_Ryzhikov_(cosmonaut)"
              },
              {
                name: "Kate Rubins",
                flag: "./photos/Usa.png",
                astroImage: "./photos/KateRubins.jpg",
                description: "Kate Rubins is an American microbiologist and NASA astronaut ...",
                wiki: "https://en.wikipedia.org/wiki/Kathleen_Rubins"
              },
              {
                name: "Sergey Kud-Sverchkov",
                flag: "./photos/Russia.png",
                astroImage: "./photos/SergeyKudSverchkov.png",
                description: "Sergueï Vladimirovitch Koud-Skvertchkov (Сергей Владимирович Кудь-Сверчков) was born on August 23, 1983 at the ...",
                wiki: "https://en.wikipedia.org/wiki/Sergey_Kud-Sverchkov"
              },
              {
                  name: "Michael Hopkins",
                  flag: "./photos/Usa.png",
                  astroImage: "./photos/MichaelHopkins.jpg",
                  description: "Michael Scott Hopkins (born December 28, 1968) is a United States Space Force colonel and NASA astronaut ...",
                  wiki: "https://en.wikipedia.org/wiki/Michael_S._Hopkins"
              },
              {
                name: "Victor Glover",
                flag: "./photos/Usa.png",
                astroImage: "./photos/VictorGlover.jpg",
                description: "Victor Jerome Glover (born April 30, 1976) is a NASA astronaut of the class of 2013 ...",
                wiki: "https://en.wikipedia.org/wiki/Victor_J._Glover"
            },
            {
              name: "Shannon Walker",
              flag: "./photos/Usa.png",
              astroImage: "./photos/ShannonWalker.jpg",
              description: "Shannon Walker (born June 4, 1965) is an American physicist and a NASA astronaut selected in 2004 ...",
              wiki: "https://en.wikipedia.org/wiki/Shannon_Walker"
          },
          {
            name: "Soichi Noguchi",
            flag: "./photos/Japan.png",
            astroImage: "./photos/SoichiNoguchi.jpg",
            description: "Soichi Noguchi (野口 聡一, Noguchi Sōichi, born 15 April 1965) is a Japanese aeronautical engineer and JAXA astronaut. ...",
            wiki: "https://en.wikipedia.org/wiki/Soichi_Noguchi"
        }
            ],
        };
    }

render () {
  return (
    <div>
      <div>
         {this.state.astrolist.map((name, index) => (
        <MapPageCards2 key={index} {...name} />
      ))}
      </div>
    </div>
  );
}
}

export default InSpace2;


  


 

