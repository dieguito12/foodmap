import React, { Component } from 'react';
import Auth from '../../../auth/Auth';
import $ from 'jquery';

class RestMenu extends Component {
    state = {
    }
    componentWillMount() {
        var user = Auth.loggedUser();
        if (user != null) {
            $.ajaxSetup({
                headers: { 'token': user['auth_token'] }
            });
        }
        $.ajax({
            type: 'GET',
            url: "http://159.203.191.142:8080/dishByIdRestaurant/"+ this.props.restId,
            dataType: 'json',
            success: this.fetchData,
            error: this.handleError
        });
    }
    fetchData = (result) =>{
       this.setState(result);
    }
    handleError = (error) => {
        if (error['status'] === 403) {
            Auth.unsetUser();
        }
    }
    render() {
        var MenuRest = [];
        for (var i = 0; i < 3; i++) {
            if(this.state.hasOwnProperty(i))
            {
                for(var j=0; j<this.state[""+i].dishes.length; j++)
                    {
                        MenuRest.push({Plato:this.state[""+i].dishes[j].description, Precio:this.state[""+i].dishes[j].price});
                    }
            }
        }
        // console.log(MenuRest);
        var commentNodes = MenuRest.map(function(searchs) {
            return (
                    <tr>
                        <td>{searchs.Plato}</td>
                        <td>RD${searchs.Precio}</td>
                    </tr>
            );
        });
       return (
            <table className="responsive-table bordered striped">
        <thead>
          <tr>
              <th data-field="id">Plato</th>
              <th data-field="price">Precio</th>
          </tr>
        </thead>

        <tbody>
            {commentNodes}
        </tbody>
        </table>
        );
    }
}

export default RestMenu;