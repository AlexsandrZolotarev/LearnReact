import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from './Components/Items';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      orders :[],
      items:[
      {
        id:1,
        title:'Corner Sofa',
        img:'corner-sofa.jpg',
        desc : 'Natural leather, GALA, Russia',
        category: 'Sofa',
        price : '1079,22',
      },
      {
        id:2,
        title:'Rocking chair',
        img:'rocking chair.jpg',
        desc : 'Wood, Russia Furniture, Russia',
        category: 'Chair',
        price : '194,26',
      },
      {
        id:3,
        title:'Chair',
        img:'ChairItaly.jpg',
        desc : 'Wood, Cavio-mod.Francesca, Italiana',
        category: 'Chair',
        price : '377,73',
      },
      {
        id:4,
        title:'Table',
        img:'Table1iTALY.webp',
        desc : 'Wood, Cavio-mod.Francesca, Italiana',
        category: 'Table',
        price : '800,99',
      },
      {
        id:5,
        title:'Table',
        img:'Table2Italy.png',
        desc : 'Wood, Cavio-mod.Francesca, Italiana',
        category: 'Table',
        price : '150',
      },
      {
        id:6,
        title:'Sofa',
        img:'SofaBarga.webp',
        desc : 'Leather, BM Style, Italiana',
        category: 'Sofa',
        price : '150',
      },
    ]}

    this.addToOrder = this.addToOrder.bind(this);
  }
  render()
  {
    return (
    <div className="wrapper">
      <Header orders={this.state.orders}/>
      <Items items= {this.state.items} onAdd ={this.addToOrder}/>
      <Footer/>
    </div>)
  }


  addToOrder(item)
  {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id ==item.id)  isInArray = true;
    });
    if(!isInArray) this.setState({orders : [...this.state.orders,item]})
  }
}

export default App;
