import React from 'react' 
import logo from '../assets/turbo1.jpeg';

function Bodytwo() {
    return (
        <div className="funds">
            <div className="hod">
            <img src={logo} alt="Logo" />
            </div>
            <div className="priv">
            <figure class="text-end">
                    <blockquote class="blockquote">
                        <p class="mb-0">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Integer posuere erat a ante.</p>
  
                    </blockquote>
                <figcaption class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            </div>
            <div className="privtwo">
            <figure class="text-end">
                    <blockquote class="blockquote">
                        <p class="mb-0">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Integer posuere erat a ante.</p>
  
                    </blockquote>
                <figcaption class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            </div>
        </div>
        
    );
    
}

export default Bodytwo;