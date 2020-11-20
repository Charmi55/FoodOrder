import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENTS_PRICE={
    salad:0.4,
    cheese:0.5,
    meat:0.7,
    bacon:0.8

}
class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
        },
        totalPrize:4,
        purchasable:false,
        purchasing:false
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
        .map(igKey=>{
            return ingredients[igKey];
        })
        .reduce((sum, el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0})
    }
    addIgredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type]= updatedCount;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrize;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrize:newPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientsHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type]= updatedCount;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrize;
        const newPrice = oldPrice-priceAddition;
        this.setState({totalPrize:newPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler=()=>{
        alert("you continue!");
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchasedContinued = {this.purchaseContinueHandler}
                    price={this.state.totalPrize}/>
                </Modal>
                <Burger ingredients= {this.state.ingredients}/>
                <BurgerControls 
                    ingredientAdded={this.addIgredientHandler}
                    ingredientRemoved={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrize}
                    ordered = {this.purchaseHandler}
                    purchasable={this.state.purchasable}/>
            </Auxiliary>
        )
    }
}
export default BurgerBuilder;