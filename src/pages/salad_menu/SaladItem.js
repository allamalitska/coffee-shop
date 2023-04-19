
export const SaladItem = ({salad, isChecked, handleChange})=>{
    const {name, ingredients, price, imageUrl } = salad;
    const ingredientsArray = ingredients.split(',')
    return (
        <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black'}}>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{width: '80px', height: '80px',border: '1px solid black'}}>Image Placeholder</div>
                  <div>{price}</div>
                  <div style={{width: '80px', height: '80px',border: '1px solid black'}}>
                    <div style={{margin: 'auto'}}>
                       <input type="checkbox" isChecked={isChecked} onChange={handleChange}/>
                    </div>
                  </div>
              </div>
            </div>
    )
}

// SaladItem.propType = {
//   salad = PropTypes.sting.isRequired;
    //  price: nu
//     salad = propType., isChecked, handleChange
// }