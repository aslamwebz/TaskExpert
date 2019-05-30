import React, {useState} from 'react'
import GithubCorner from 'react-github-corner';
import { TwitterPicker } from 'react-color';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';


const Navbar = (props) => {

    const [visible, setVisible] = useState(false)

    // const clickHandle = () => {
    //     props.openCart(true)
    // }

    const showhide = () =>{
        setVisible(!visible)
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container">
         <GithubCorner href="https://github.com/aslamwebz?tab=repositories" direction="left" size="90"/>
          <a className="navbar-brand" href="/TaskExpert">Tasker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <button className="nav-link" onClick={showhide}>Change Color</button>
                </li>
                {/* <li className="nav-item">
                    <button className="nav-link active btn btn-danger" onClick={clickHandle}> <i className="fas fa-shopping-cart"></i>&nbsp;View Cart</button>
                </li> */}
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li> */}
                </ul>
            </div>
          </div>

            <Rodal visible={visible} onClose={() => showhide()}>
                <div className="d-flex justify-content-center">
                    <TwitterPicker onChangeComplete={props.colorchange}/>
                </div>
            </Rodal>
        </nav>
    )
}


// const mapStateToProps = state => ({
//     open:state.items.open,
// })

// export default connect(mapStateToProps, {openCart})(Navbar)

export default Navbar