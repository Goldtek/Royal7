import React from 'react'
import {Link} from "react-router-dom";

const HomeComponent = () =>{
    return(
        <div className="set_2">
            <h4><i className="fa fa-home"></i>&nbsp;&nbsp;Home</h4>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link class="nav-link active" data-toggle="tab" to="#set_nav">Details</Link>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane container active" id="set_nav">
                    <div className="cont_tab5">
                        <h5>Page 1</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam scelerisque tristique cursus. Morbi mollis, ligula a sagittis rhoncus, 
                            leo ante efficitur arcu, ut aliquam felis urna eu tellus. 
                            Nullam egestas dolor volutpat metus lobortis vulputate. 
                            Suspendisse imperdiet auctor nunc nec mollis. 
                            Orci varius natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Donec lectus mi, sagittis nec sagittis ut, dapibus nec erat. 
                            Aenean pretium turpis quis nisi rhoncus, quis finibus lectus porttitor. 
                            Aenean lacinia sapien quis mi porta imperdiet. Nam fermentum et felis ut venenatis. 
                            Nulla facilisi. Mauris quis aliquet sem, a efficitur orci. 
                            Aliquam sed arcu sodales, semper metus quis, ullamcorper arcu.
                        </p>

                            <h5>Page 2</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam scelerisque tristique cursus. Morbi mollis, ligula a sagittis rhoncus, 
                            leo ante efficitur arcu, ut aliquam felis urna eu tellus. 
                            Nullam egestas dolor volutpat metus lobortis vulputate. 
                            Suspendisse imperdiet auctor nunc nec mollis. 
                            Orci varius natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Donec lectus mi, sagittis nec sagittis ut, dapibus nec erat. 
                            Aenean pretium turpis quis nisi rhoncus, quis finibus lectus porttitor. 
                            Aenean lacinia sapien quis mi porta imperdiet. Nam fermentum et felis ut venenatis. 
                            Nulla facilisi. Mauris quis aliquet sem, a efficitur orci. 
                            Aliquam sed arcu sodales, semper metus quis, ullamcorper arcu.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeComponent;