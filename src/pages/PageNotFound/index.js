import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/img/PageNotFound.png'
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={PageNotFound} alt="PageNotFound" />
            <p style={{textAlign:"center"}}>
              <Link to="/">Voltar para a página Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;