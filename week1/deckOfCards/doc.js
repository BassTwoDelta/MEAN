class Card{
    constructor(suit, key, value){
        this.suit = suit;
        this.key = key;
        this.value = value; 

    }

    showCard(){
        console.log(`This card is the ${this.key} of ${this.suit}`);
        return this;
    }
}

class Deck{
    constructor(){
        this.deck = [];
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]; 
        const cardVals = {"Ace": 1, "Two": 2, "Three": 3, "Four": 4, "Five":5, "Six":6, "Seven":7, "Eight":8, "Nine":9, "Ten": 10, "Jack":11, "Queen": 12, "King": 13};
        for(let i = 0; i < suits.length; i++){
            for(let key in cardVals){
                this.deck.push(new Card(suits[i], key, cardVals[key]));
            }
        }
        return this
    }

    shuffle() {
        for(let i = this.deck.length-1; i>0; i--){
            let random = Math.floor(Math.random() *(i+1))
            let temp = this.deck[i]; 
            this.deck[i] = this.deck[random];
            this.deck[random] = temp;
        }
        return this;
    }

    reset(){
        this.deck = [];
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]; 
        const cardVals = {"Ace": 1, "Two": 2, "Three": 3, "Four": 4, "Five":5, "Six":6, "Seven":7, "Eight":8, "Nine":9, "Ten:": 10, "Jack":11, "Queen": 12, "King": 13};
        for(let i = 0; i < suits.length; i++){
            for(let key in cardVals){
                this.deck.push(new Card(suits[i], key, cardVals[key]));
            }
        }
        this.shuffle();
        console.log("Deck has been reset, you now have a new deck! GOOD LUCK!")
        return this
    }
    
    deal(){
        var cardDealt = this.deck.pop();
        console.log(`Card has been dealt and removed from the deck. Total cards remaing = ${this.deck.length}!`)
        return cardDealt
    }
}

class Player {
    constructor(name){
        this.name = name; 
        this.hand = []; 
    }
    draw(deck){
        this.hand.push(deck.deal().showCard())
        return this; 
    }

    discard(){
        var discardCard = this.hand.pop();
        console.log(`${this.name} has discarded the ${discardCard.key} of ${discardCard.suit}`);
        return this;
    }
}

p1 = new Player("Garrett")
deck1 = new Deck();
deck1.shuffle();
p1.draw(deck1);
p1.draw(deck1);
p1.discard();
deck1.reset();
p1.draw(deck1)

