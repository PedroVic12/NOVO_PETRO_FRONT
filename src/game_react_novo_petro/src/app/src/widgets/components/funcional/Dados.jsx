import React, { useState, useEffect,Component } from 'react';

export default class Dados extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <>
            <section>
                <p>Item 1:  {this.props.par1}</p>
                <p>Item 2:   {this.props.par2}</p>
                <p>Item 3:  {this.props.par3}</p>

            </section>
            </>
        );
    }
}
 
