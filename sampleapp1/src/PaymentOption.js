import React from 'react'
import './App.css';
import SaveCard from './savecard'
import * as THREE from 'three';
import ThreeDImage from './ThreeDImage';
import Dashboard from './Dashboard';
// class PaymentOption extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             cards: [],
//             name: '',
//             key: 1,
//             cardNo: '',
//             date: '',
//             addCard:false,
//             dispCard:false,
//             cardData:[],
//         }
//         this.addNewCard = this.addNewCard.bind(this)
//         this.editCard = this.editCard.bind(this)
//         this.showIt=this.showIt.bind(this)
//         this.dispCards=this.dispCards.bind(this)
//     }

//      addNewCard = async (e)=> {
//         debugger;
        
//         let data={name:this.state.name, cardNo:this.state.cardNo,expiry:this.state.date, key:this.state.key}
       
//         let result = await fetch(
//         'http://localhost:7001/addtodb', {
//             method: "post",
//             body:JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         result = await result.json();
//         console.warn(result);
//         if (result) {
//             alert("Data saved successfully");
            
//         }
//         let cards = this.state.cards;
//         cards.push({ name: this.state.name, cardNo: this.state.cardNo, date: this.state.date, key: this.state.key });
//         this.setState({
//             cards: cards,
//             key: this.state.key + 1,
//             name: '',
//             cardNo: '',
//             date: '',
//         });
        
//     }
//     async dispCards(){
//         debugger;
//         let data;
//        fetch("http://localhost:7001/", {
//                 method:"get",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//         .then(async(res) => {
//              data = await res.json();
//              debugger;
//              this.setState({ cardData: data })
//          console.log(this.state.cardData)

//             //console.log(this.state.cardData)
//         }) 
        
//     }
    
//     editName = (evt) => {
//         this.setState({
//             name: evt.target.value
//         });

//     }
//     editNumber = (evt) => {
//         this.setState({
//             cardNo: evt.target.value
//         });
//     }
//     editDate = (evt1) => {
//         this.setState({
//             date: evt1.target.value

//         });
//     }
//     editCard() {
//         debugger;
//         this.setState({
//             name: '',
//             date: '',
//         })
//     }
//     updateCard = (name3, date, key,no) => {
//         debugger;
//         let result =  fetch(
//             'http://localhost:7001/update', {
//                 method: "post",
//                 body:JSON.stringify({name3,date,no}),
//                 headers: {
//                     'Content-Type': 'application/json'
                
//                 }
//             })
            
        
        
        
//     }
    
//     deleteCard = (key,no) => {
//         debugger;
//         let cards = this.state.cards;
//         let result =  fetch(
//             'http://localhost:7001/delete', {
//                 method:"post",
//                 body:JSON.stringify({no}),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             // result =  result.json();
            
        

//     }
//     showIt() {
//         debugger;
        
//         return (this.setState({
//             addCard:!this.state.addCard,
//             dispCard:!this.state.dispCard,
//         }))
//     }
    
 
//     render() {
       
//         this.dispCards();
          
//         return (
//             <div className='mainclass'>
//                 < link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
//                 <ThreeDImage/>
//                 <div class="container">
//                 <h1>Payment Options</h1>
                       
//                        <h3><p>An overview of your payment methods with e-test-payment.com</p></h3>
//                        <div class="cards2"><h3 class="saved">Saved Debit and Credit Cards</h3></div>   
//                     </div>
//                     {this.state.cardData.map((value) => {
//                                         return <SaveCard name={value.name} date={value.expiry} cardno={value.cardNo} onEdit={this.editCard} id={value.key} updateCallback={this.updateCard} deleteCallback={this.deleteCard} />
//                                     })}
                                   
//                 <div class="container">
                


//                     <div class="cards2"><h4 class="saved2">Add New Card&nbsp;&nbsp;<button onClick={this.showIt}> {this.state.addCard ?  <>	&#8593; </> : <>&#8595;</>} </button></h4></div>
//                     { this.state.dispCard ? <div class="newcards">
//                                     <div className='labels'>
//                                         <label>Name on Card</label>
//                                         <input value={this.state.name} type="text" onChange={this.editName} />

//                                         <label>Card No.</label>
//                                         <input value={this.state.cardNo} onInput={this.editNumber} />

//                                         <label>Expiry Date</label>
//                                         <input value={this.state.date} onInput={this.editDate} />

//                                     </div>
//                                     <button onClick={this.addNewCard} className="addcard">Add New</button>

//                                 </div> : null }
//                                 {/* <button onClick={this.dispCards}> Showcards</button> */}
//                                 {/* {JSON.stringify(this.state.cardData)} */}
//                     {/* <div class="panel-group" id="accordion">
                        
                    
                        
//                         <div class="panel panel-default">
//                             <div class="panel-heading">
//                                 <h4 class="panel-title">
//                                     <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
//                                         Add New Card
//                                     </a>
//                                 </h4>
//                             </div>
//                             <div id="collapseTwo" class="collapse">
//                                 <div class="panel-body">
//                                     <div className='labels'>
//                                         <label>Name on Card</label>
//                                         <input value={this.state.name} type="text" onChange={this.editName} />

//                                         <label>Card No.</label>
//                                         <input value={this.state.cardNo} onInput={this.editNumber} />

//                                         <label>Expiry Date</label>
//                                         <input value={this.state.date} onInput={this.editDate} />

//                                     </div>
//                                     <button onClick={this.addNewCard}>Add New</button>

//                                 </div>
//                             </div>
//                         </div>
//                     </div> */}
                    
            
        

                   
                    


//                 </div>
               










//                 {/* <button onClick={this.editCard}>Edit</button> */}
//                 {/* <p> Name{this.state.name}</p> */}
//                 {/* <p> No{this.state.cardNo}</p>
//                 <p>Exp{this.state.date}</p>
//                  */}
//                 {/* <p> {JSON.stringify(this.state.cards)}</p> */}




//             </div>
//         )
//     }


// }
const PaymentOption = () =>{
    return (
        <Dashboard/>
        // <div style={{width:'50%'}}>

        // <ThreeDImage/></div>
    )
}
export default PaymentOption;