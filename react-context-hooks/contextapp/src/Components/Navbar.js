import React, {/*Component,*/ useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

// Class Component with Context Consumers
// export default class Navbar extends Component {    
//     render(){
//         return(
//             <AuthContext.Consumer>{(authContext)=>( 
//                 <ThemeContext.Consumer>{(themeContext) =>{
//                     const {isAuthenticated, toggleAuth} = authContext;
//                     const {isLightTheme,light,dark} = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return(
//                         <nav style={{backgroundColor: theme.ui, color: theme.syntax}}>
//                             <h1>Context App</h1>
//                             <div onClick={toggleAuth}>
//                                 { isAuthenticated ? "Logged In" : "Logged Out"}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}</ThemeContext.Consumer>
//             )}</AuthContext.Consumer>
          
//         )
//     }
// }
// Functional Component with useContext hook
const Navbar = () => {
    
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const theme = isLightTheme ? light: dark;
    return (
        <nav style={{backgroundColor: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                { isAuthenticated ? "Logged In" : "Logged Out"}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Navbar

