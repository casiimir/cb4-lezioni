import { useState } from 'react';
import Gallery from './components/Gallery';
import Button from './components/Button';
import './App.css';

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <Gallery visibility={isGalleryVisibile}/>
      <hr />
      <Button btnTextCont="show / hide" onHandleClick={() => setGalleryVisibility(!isGalleryVisibile)}/>
      <div className="App__randomText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, repudiandae quia nisi tempora ipsam aut soluta iure quis repellendus! Nemo quo dicta doloremque deserunt nostrum voluptatum nobis in eum sapiente!
        Tenetur eos vel ea doloremque officia voluptate et minima repudiandae quo? Ducimus, voluptatibus laborum veniam voluptate sed impedit illo reprehenderit, doloremque, sapiente sint delectus totam perspiciatis aspernatur at iste fugit!
        Vel totam eius sequi, qui neque perspiciatis veritatis, facilis ducimus expedita officiis autem adipisci voluptas dolore sunt reiciendis rerum nulla nesciunt? Impedit voluptatum nihil, dicta velit harum est commodi ipsam?
        Unde ea repellendus provident temporibus non, maxime, dolorem, tempora minima autem id veritatis illo dolor tempore amet corporis explicabo quisquam dolores harum deleniti maiores ut obcaecati ex! Laboriosam, harum facere!
        Qui unde officiis blanditiis beatae sed hic voluptatum architecto distinctio cupiditate, quidem laborum recusandae deleniti quis amet corrupti quia! Reiciendis voluptates dignissimos explicabo reprehenderit eos? Explicabo dolor impedit est dignissimos!
        Minus consequuntur accusamus tenetur aspernatur natus, numquam nesciunt libero commodi porro ullam error voluptatibus tempora quam harum velit quos sequi neque deserunt corrupti iusto laudantium animi? Deserunt minus quaerat velit?
      </div>
    </div>
  );
}

export default App;
