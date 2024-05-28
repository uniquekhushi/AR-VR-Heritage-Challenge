import React from "react";
import './App.css';
class SaveCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            date: this.props.date,
            id: this.props.id,
            cardnumber:this.props.cardno,
            cardnostr:'',
            updatecard: false,
            editit: false,
            updateit: false,
            swapIt:false,
            cardsData:[]
        }
        this.editCard = this.editCard.bind(this)
        this.updateTrigger = this.updateTrigger.bind(this)
        this.showIt = this.showIt.bind(this)
        this.cardnotostr=this.cardnotostr.bind(this)
    }
    editCard() {
        debugger;
        return (this.setState({
            editit: true,
        }))
    }
    editName = (evt) => {
        this.setState({
            name: evt.target.value
        });

    }
    editDate = (evt) => {
        this.setState({
            date: evt.target.value
        });

    }
    updateTrigger = (event) => {
        debugger;
        this.props.updateCallback(this.state.name, this.state.date, this.state.id,this.props.cardno);
        this.setState({
            editit: false,
        })
        alert("Card Updated Succcessfully!")

    }
    
    deleteTrigger = (event) => {
        debugger;
        this.props.deleteCallback(this.state.id,this.props.cardno);
        alert("Card Deleted Successfully!")

    }
    showIt() {
        debugger;
        
        return (this.setState({
            updateit: !this.state.updateit,
            swapIt:!this.state.swapIt
        }))
    }
    cardnotostr(){
        let num=cardnumber.toString();
        this.setState({
            cardnostr:num
        })
    }
    render() {
        //this.cardnotostr();
        
        //console.log(cardnumber.slice(-4))
        return (
        <div>

            <div  className='savedcards'>
            <div className="container">
            <div className="cards1"><h5>Card Ending with {this.props.cardno.toString().slice(-4)} &nbsp;&nbsp;<button onClick={this.showIt} className="arrow1"> {this.state.swapIt ?  <>	&#8593; </> : <>&#8595;</>} </button></h5></div>
                    {this.state.updateit ?
                        <div className='labels'>
                            <table className="table1">
                                <tr>

                                    <th>Card Number</th>
                                    <th>Expiry Date</th>
                                </tr>
                                <tr>
                                    <td>{this.props.cardno}</td>
                                    <td>{this.props.date}</td>
                                </tr>
                                <tr>
                                    <th>Name on Card</th>

                                </tr>
                                <tr>
                                    <td>{this.props.name}</td>
                                    <td><button onClick={this.editCard} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                                        <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                    </svg></button>&nbsp;&nbsp;<button onClick={this.deleteTrigger}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg></button></td>
                                </tr>
                            </table>
                            
                            {this.state.editit ?
                                <div className="newcards"> &nbsp;&nbsp;    <label>Name on Card:-</label><input type="text" value={this.state.name} onChange={this.editName}></input>
                                    <label>Expiry Date:-</label><input type="text" value={this.state.date} onChange={this.editDate}></input>
                                    <button onClick={this.updateTrigger}>Update</button>
                                   
                                    
                                </div> : null}
                        </div> : null
                    }

                </div>
                 
                </div>     
        
        </div>
        )
    }
}
export default SaveCard;
