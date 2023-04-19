import Link from 'next/link';
import saladsMock from './saladsMock'
import {SaladItem} from './SaladItem';
import {useState} from 'react'

//coffee/salads
export default function SaladPage() {
  const {list} = saladsMock
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>
        <Link href="/">Back to main menu</Link>
      </h1>
      <form>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          { 
            list.map((salad, index)=> (
              <SaladItem salad={salad} isChecked={isChecked} handleChange={handleChange}/>
              )
            )
          }
        </div>
        <button type="submit">A simple Button</button>   
      </form>
    </main>
  );
}



// class Salad {
//   constructor(name, ingredients, price, dressing) {
//     this.name = name;
//     this.ingredients = ingredients;
//     this.price = price;
//     this.dressing = dressing
//   }
// }


// const salads = [
//   new Salad('Caesar', 'chopped romaine lettuce, garlicky croutons, griled salmon', 15, 'eggs, olive oil, lemon, Parmesan, Worcestershire sauce, and anchovies'),
//   new Salad('Greek', 'sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese', 10, 'olive oil, red wine vinegar, lemon juice, Dijon mustard, minced garlic cloves, dried oregano, salt and pepper'),

//   new Salad('Warm Beef', 'baby arugula, tParmigiano-Reggiano cheese, red onion, beef, tomatoes', 18, 'honey, dijon mustard, salt, black pepper, garlic, balsamic vinegar,olive oil')
// ]

// console.log(salads)

//   getprice(price){
//       if (price = Salad.name)
//   }
// }



// const saladTypes = ['Caesar', 'Greek', 'Warm Beef']

// let saladCaesar = `chopped romaine lettuce, garlicky croutons, griled salmon`
// let caesarDressing = `eggs, olive oil, lemon, Parmesan, Worcestershire sauce, and anchovies`

// let saladGreek = `sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese`
// let greekDressing = `olive oil, red wine vinegar, lemon juice, Dijon mustard, minced garlic cloves, dried oregano, salt and pepper`


// let saladWarmBeef = `baby arugula, tParmigiano-Reggiano cheese, red onion, beef, tomatoes`
// let WarmBeefDressing = `honey, dijon mustard, salt, black pepper, garlic, balsamic vinegar,olive oil`